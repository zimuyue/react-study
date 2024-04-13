const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('app'));

const states = [];
const stateSetters = [];
let stateIndex = 0;

function createState (initialState, index) {
  return states[index] || initialState;
}

function createStateSetter (index) {
  return function (newState) {
    states[index] = typeof newState === 'function' ? 
    newState(states[index]) : 
    newState;
    // 触发渲染函数
    render();
  }
}

export function useState (initialState) {
  // React 底层在更新时使用的是浅对比
  // 如果参数是对象的形式，只会去对比对象地址有没有变更
  // 所以在外界直接给状态赋值的方式，是不会生效的
  states[stateIndex] = createState(initialState, stateIndex);;
  
  if (!stateSetters[stateIndex]) {
    stateSetters.push(createStateSetter(stateIndex));
  }

  const _state = states[stateIndex];
  const _setState = stateSetters[stateIndex];

  stateIndex ++;

  return [
    _state,
    _setState
  ]
}

export function useReducer (reducer, initialState) {
  const [ state, setState ] = useState(initialState);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [
    state,
    dispatch
  ]
}

const effectDepArr = [];
let effectIndex = 0;

export function useEffect (cb, depArr) {
  if (typeof cb !== 'function') {
    throw new Error('Callback must be a function.');
  }

  if (depArr === undefined) {
    setTimeout(cb, 0);
    return;
  }

  if (!Array.isArray(depArr)) {
    throw new TypeError('Dependencies must be contained is an Array.');
  }

  const isChanged = effectDepArr[effectIndex] ? 
  depArr.some((dep, index) => dep !== effectDepArr[effectIndex][index]) :
  true;

  if (isChanged) {
    setTimeout(cb, 0);
  }

  effectDepArr[effectIndex] = depArr;
  effectIndex ++;
}

const layoutEffectDepArr = [];
let layoutEffectIndex = 0;

export function useLayoutEffect (cb, depArr) {
  if (typeof cb !== 'function') {
    throw new Error('Callback must be a function.');
  }

  if (depArr === undefined) {
    queueMicrotask(cb);
    return;
  }

  if (!Array.isArray(depArr)) {
    throw new TypeError('Dependencies must be contained is an Array.');
  }

  const isChanged = layoutEffectDepArr[layoutEffectIndex] ? 
  depArr.some((dep, index) => dep !== layoutEffectDepArr[layoutEffectIndex][index]) :
  true;

  if (isChanged) {
    queueMicrotask(cb);
  }

  layoutEffectDepArr[layoutEffectIndex] = depArr;
  layoutEffectIndex ++;
}

class PrueComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    // return true  - render
    // return false - render x
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    )
  }
}

// memo 高阶函数
// 接收一个函数组件返回一个组件
export function memo (Fc) {
  return class extends PrueComponent {
    render () {
      return Fc(this.props);
    }
  }
}

function shallowEqual (o1, o2) {
  if (o1 === o2) { // 对比引用
    return true;
  }

  if ( // 对比类型
    typeof o1 !== 'object' ||
    o1 === null ||
    typeof o2 !== 'object' ||
    o2 === null
  ) {
    return false;
  }

  const k1 = Object.keys(o1);
  const k2 = Object.keys(o2);

  if (k1.length !== k2.length) { // 对比长度
    return false;
  }

  for (let k of k1) { // 对比值
    if (!o2.hasOwnProperty(k) || o1[k] !== o2[k]) {
      return false;
    }
  }
  
  return true;
}

const memoDepArr = [];
let memoIndex = 0;

export function useMemo (cb, depArr) {
  if (memoDepArr[memoIndex]) { // 子组件函数重新执行读取缓存
    const [ _memo, _depArr ] = memoDepArr[memoIndex];
    // 判断缓存列表中是否有变更项
    const isFullySame = depArr.every((dep, index) => dep === _depArr[index]);

    if (isFullySame) { // 全部相同检查下一个 useMemo 调用
      memoIndex ++;
      return _memo;
    } else { // 有一项不相同重新设置缓存
      return setNewMemoElement(cb, depArr);
    }

  } else { // 如果是第一次调用设置缓存
    return setNewMemoElement(cb, depArr);
  }

  // 依赖收集，二维数据记录值与依赖项
  function setNewMemoElement (cb, depArr) {
    const memo = cb();
    memoDepArr[memoIndex ++] = [ memo, depArr ];
    return memo;
  }
}

const callbackDepArr = [];
let callbackIndex = 0;

export function useCallback (cb, depArr) {
  if (callbackDepArr[callbackIndex]) {
    const [ _cb, _depArr ] = callbackDepArr[callbackIndex];
    const isFullySame = _depArr.every((cb, index) => cb === _depArr[index]);

    if (isFullySame) {
      callbackIndex ++;
      return _cb;
    } else {
      return setNewCallbackElement(cb, depArr);
    }

  } else {
    return setNewCallbackElement(cb, depArr);
  }

  function setNewCallbackElement (cb, depArr) {
    callbackDepArr[callbackIndex ++] = [ cb, depArr ];
    return cb;
  }
}

export function createContext (defaultState) {
  const ctx = {
    Provider,
    Consumer
  }

  function Provider (props) {
    ctx._currentValue = ctx._currentValue || defaultState;
    Object.assign(ctx._currentValue, props.value);
    return props.children;
  }

  function Consumer (props) {
    return props.children(props);
  }

  return ctx;
}

export function useContext (context) {
  return context._currentValue;
}

async function render () {
  const App = (await import('./index')).default;
  // 触发 render 时 App 代码重新执行
  // 由于闭包的特性导致 stateIndex ++
  // 所以需要在重新渲染时，将 stateIndex = 0
  stateIndex = 0;
  effectIndex = 0;
  memoIndex = 0;
  callbackIndex = 0;
  root.render(<App />);
}

render();
