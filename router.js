import { createWebHistory, createRouter } from "vue-router";
import List from "@/components/List";
import Detail from "@/components/Detail";
const routes = [
    {
        path: "/list",
        component:List,
    },{
        path: "/detail/:id",
        component:Detail,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;