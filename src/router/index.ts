import { createRouter, createWebHistory } from 'vue-router';
import AppSidebar from '@/views/AppSidebar.vue';

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'default',
            path: "/",
            // redirect: { name: 'Authentication' }
            // component: () => import('@/views/AppSidebar.vue')
            component: () => import('@/views/Authtication.vue')
        },
        // {
        //     name: 'Authentication',
        //     path: 'authentication',
        //     component: () => import('@/views/Authtication.vue')
        // },
        {
            name: 'Main',
            path: '/main',
            component: AppSidebar,
            children: [
                {
                    name: 'Tasks',
                    path: 'tasks',
                    component: () => import('@/views/tasks/Tasks.vue')
                },
                {
                    name: 'Dashboard',
                    path: 'dashboard',
                    component: () => import('@/views/dashboard/DashBoard.vue')
                },
                {
                    name: 'Forms',
                    path: 'forms',
                    component: () => import('@/views/forms/Forms.vue'),
                    children: [
                        {
                            name: 'formsDefault',
                            path: '',
                            redirect: { name: 'Priority' }
                        },
                        {
                            name: 'Priority',
                            path: 'priority',
                            component: () => import('@/views/forms/FormsPriority.vue')
                        },
                        {
                            name: 'Account',
                            path: 'account',
                            component: () => import('@/views/forms/FormsAccount.vue')
                        },
                        {
                            name: 'Appearance',
                            path: 'appearance',
                            component: () => import('@/views/forms/FormsAppearance.vue')
                        },
                        {
                            name: 'Notification',
                            path: 'notification',
                            component: () => import('@/views/forms/FormsNotification.vue')
                        },
                        {
                            name: 'Display',
                            path: 'display',
                            component: () => import('@/views/forms/FormsDisplay.vue')
                        },
                    ]
                },
                {
                    name: 'Music',
                    path: 'music',
                    component: () => import('@/views/music/Music.vue'),
                    children: [
                        {
                            name: 'SubMusicDefault',
                            path: '',
                            redirect: { name: 'SubMusic' }
                        },
                        {
                            name: 'SubMusic',
                            path: 'sub-music',
                            component: () => import('@/views/music/SubMusic.vue')
                        },
                        {
                            name: 'SubPodcasts',
                            path: 'sub-podcasts',
                            component: () => import('@/views/music/SubPodcasts.vue')
                        }
                    ]
                },

            ]
        },
    ]
})

export default route;