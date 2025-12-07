import { createRouter, createWebHistory } from 'vue-router';

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'default',
            path: "/",
            redirect: { name: 'Authentication' }
        },
        {
            name: 'Authentication',
            path: '/Authentication',
            component: () => import('@/views/Authtication.vue')
        },
        {
            name: 'Music',
            path: '/Music',
            component: () => import('@/views/Music/Music.vue'),
            children: [
                {
                    name: 'SubMusicDefault',
                    path: '',
                    redirect: { name: 'SubMusic' }
                },
                {
                    name: 'SubMusic',
                    path: 'SubMusic',
                    component: () => import('@/views/Music/SubMusic.vue')
                },
                {
                    name: 'SubPodcasts',
                    path: 'SubPodcasts',
                    component: () => import('@/views/Music/SubPodcasts.vue')
                }
            ]
        },
        {
            name: 'Dashboard',
            path: '/Dashboard',
            component: () => import('@/views/Dashboard/Dashboard.vue')
        },
        {
            name: 'Forms',
            path: '/Forms',
            component: () => import('@/views/Forms/Forms.vue'),
            children: [
                {
                    name: 'formsDefault',
                    path: '',
                    redirect: { name: 'Priority' }
                },
                {
                    name: 'Priority',
                    path: 'Priority',
                    component: () => import('@/views/Forms/FormsPriority.vue')
                },
                {
                    name: 'Account',
                    path: 'Account',
                    component: () => import('@/views/Forms/FormsAccount.vue')
                },
                {
                    name: 'Appearance',
                    path: 'Appearance',
                    component: () => import('@/views/Forms/FormsAppearance.vue')
                },
                {
                    name: 'Notification',
                    path: 'Notification',
                    component: () => import('@/views/Forms/FormsNotification.vue')
                },
                {
                    name: 'Display',
                    path: 'Display',
                    component: () => import('@/views/Forms/FormsDisplay.vue')
                },
            ]
        },
        {
            name: 'Tasks',
            path: '/Tasks',
            component: () => import('@/views/Tasks/Tasks.vue')
        }
    ]
})

export default route;