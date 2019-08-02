import Topic from "./Topic/topic";

import GridDemo1 from "./Grid/demo1/demo1";
import GridDemo2 from "./Grid/demo2/demo2";
import GridDemo3 from "./Grid/demo3/demo3";

import FlexboxDemo1 from "./Flexbox/demo1/demo1";
import FlexboxDemo2 from "./Flexbox/demo2/demo2";
import FlexboxDemo3 from "./Flexbox/demo3/demo3";
import FlexboxDemo4 from "./Flexbox/demo4/demo4";
import FlexboxDemo5 from "./Flexbox/demo5/demo5";
import FlexboxDemo6 from "./Flexbox/demo6/demo6";

const rootPath = process.env.PUBLIC_URL;

const routes = [
  {
    path: `${rootPath}/`,
    component: Topic,
    exact: true
  },
  {
    path: `${rootPath}/demo/grid/1`,
    component: GridDemo1
  },
  {
    path: `${rootPath}/demo/grid/2`,
    component: GridDemo2
  },
  {
    path: `${rootPath}/demo/grid/3`,
    component: GridDemo3
  },
  {
    path: `${rootPath}/demo/flex/1`,
    component: FlexboxDemo1
  },
  {
    path: `${rootPath}/demo/flex/2`,
    component: FlexboxDemo2
  },
  {
    path: `${rootPath}/demo/flex/3`,
    component: FlexboxDemo3
  },
  {
    path: `${rootPath}/demo/flex/4`,
    component: FlexboxDemo4
  },
  {
    path: `${rootPath}/demo/flex/5`,
    component: FlexboxDemo5
  },
  {
    path: `${rootPath}/demo/flex/6`,
    component: FlexboxDemo6
  }
];

export default routes;
export { rootPath };
