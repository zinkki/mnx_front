import {createWebHistory, createRouter} from "vue-router";
// import List from "../components/List";
import Main from "../components/main/Main.vue";
// import Detail from "../components/Detail";
import Notfound404 from "../components/Notfound404";
// import Comment from "../components/Comment";

const routes = [
  {
    path: "/",
    component: <Main />,
  },
  // {
  //   // path: "/list",
  //   // component: <List />,
  // },
  // {
  //   // path: "/detail/:id",
  //   // component: <Detail />,
  //   // children: [
  //   //   {
  //   //     path: "comment", //children에는 맨 앞에 '/' 제거^__^
  //   //     component: <Comment />,
  //   //   },
  //   // ],
  // },
  {
    path: "/:anything(.*)", //맨 마지막에 써야함
    component: <Notfound404 />,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
