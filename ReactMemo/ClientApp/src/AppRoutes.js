import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import ReactFragmentDemo from "./Sample/ReactFragmentDemo";
import StateDescription from "./Sample/StateDescription";
import OnClickDemo from "./Sample/OnClickDemo";
import OnClickEventHandler from "./Sample/OnClickEventHandler";
import OneWayBinding from "./components/Demos/OneWayBinding/OneWayBinding";
import TodoListInMemory from "./components/TodoListInMemory";
import FunctionStateDemo from "./Sample/FunctionStateDemo";
import UseEffectDemo from "./Sample/UseEffectDemo";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
      path: '/About',
      element: <About />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/Contact',
      element: <Contact />
  },
  {
    path: '/ReactFragmentDemo',
    element: <ReactFragmentDemo />
  },
  {
    path: '/StateDescription',
    element: <StateDescription />
  },
  {
    path: '/OnClickDemo',
    element: <OnClickDemo />
  },
  {
    path: '/OnClickEventHandler',
    element: <OnClickEventHandler />
  },
  {
    path: '/OneWayBinding',
    element: <OneWayBinding />
  },
  {
    path: '/TodoListInMemory',
    element: <TodoListInMemory />
  },
  {
      path: '/FunctionStateDemo',
      element: <FunctionStateDemo />
  },
  {
      path: '/UseEffectDemo',
      element: <UseEffectDemo />
  }
];

export default AppRoutes;
