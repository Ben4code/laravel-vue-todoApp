import Welcome from './components/Welcome.vue';
import Tasks from './components/Tasks.vue';
import About from './components/About.vue';


export const routes = [
    
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/app',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
    
]