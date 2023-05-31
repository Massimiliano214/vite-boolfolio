import { createRouter, createWebHistory } from "vue-router";
import MyHome from './pages/MyHome.vue';
import MyContacts from './pages/MyContacts.vue';
import MyAbout from './pages/MyAbout.vue';
import MyProject from './pages/MyProject.vue';
import MyShow from './pages/MyShow.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: MyHome
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: MyContacts
    },
    {
        path: '/about',
        name: 'about',
        component: MyAbout
    },
    {
        path: '/projects',
        name: 'projects',
        component: MyProject
    },{
        path: '/project:slug',
        name: 'project',
        component: MyShow
    }]
});

export { router };