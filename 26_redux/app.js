/*
  flux 架构思想
  解决复杂的视图与数据的逻辑问题
  在前端中具备三种分层设计，数据、视图与 JS 逻辑
  视图与数据之间的关系绑定是双向的，而驱动它们的是通过 JS 逻辑
  JS 不仅要对数据进行操作还要对 DOM 进行操作来改变视图
  对于这两者的复杂操作行为，该如何去进行架构设计
  flux 思想就是为了解决这个问题而诞生的

  使用 flux 架构思想通过 JS 来完成对视图与状态的管理
  将状态数据交由 state 进行管理，页面 view 层触发 action
  来派发事件交由 reducer 来工作，reducer 会根据不同的 type 和 payload
  来完成对数据的操作，同时 state 中可以进行 subscribe 订阅数据的更新
  从而触发 publish 发布消息，使视图进行更新 render
*/
import store from './store';
import { addTodo } from './store/action';
import render from './render/todo';
/**
 * {
 *   subscribe
 *   getState
 *   dispatch
 * }
 */

// state => 发生了变化 => setter劫持 => cb
// store.subscribe(() => {
//   console.log(123);
// });

// store.subscribe(() => {
//   console.log(234);
// })

const oTodoInput = document.querySelector('#todoInput');
const oAddBtn = document.querySelector('#addBtn');
const oList = document.querySelector('#list');
const todoTemp = document.querySelector('#todoTemplate').innerHTML;

/**
 * 1. 没有remove  toggle的能力
 * 视图 => todoList 渲染
 * 
 * 2. 数据是更改了，视图怎么更改? 视图的操作方式是不一样的
 *    add  remove  toggle
 * 
 * => 外挂思想
 *  subscribe => cb state只要变化了，cb就执行
 *  不知道数据是怎么操作后得到的新的state
 *  
 *  todoList_old
 *  todoList_new
 * 
 */

const init = () => {
  bindEvent();
}

store.subscribe(() => {
  render(store.getState().todoList, oList, todoTemp);
})

function bindEvent () {
  oAddBtn.addEventListener('click', handleAddBtnClick, false);
}

function handleAddBtnClick () {
  if (!oTodoInput.value.trim().length) return;

  store.dispatch(addTodo({
    id: new Date().getTime(),
    content: oTodoInput.value.trim(),
    completed: false
  }));

  oTodoInput.value = '';
}

init();

