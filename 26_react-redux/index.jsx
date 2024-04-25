import App from './App';
import { createRoot } from 'react-dom/client';
import store from '@/store';
import { Provider } from '@/react-redux';

/*
  flux 架构思想
  解决复杂的视图与数据的逻辑问题
  在前端中具备三种分层设计，数据、视图与 JS 逻辑
  视图与数据之间的关系绑定是双向的，而驱动它们的是通过 JS 逻辑
  JS 不仅要对数据进行操作还要对 DOM 进行操作来改变视图
  对于这两者的复杂操作行为，flux 思想就是为了解决这个问题而诞生的

  使用 flux 架构思想通过 JS 来完成对视图与状态的管理
  将状态数据交由 state 进行管理，页面 view 层触发 action
  来派发事件交由 reducer 来工作，reducer 会根据不同的 type 和 payload
  来完成对数据的操作，同时 state 中可以进行 subscribe 订阅数据的更新
  从而触发 publish 发布消息，使视图进行更新 render

  redux 就是遵循 flux 思想而设计的
  react-redux 只是在 redux 上增加了中心数据的概念
*/

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);
