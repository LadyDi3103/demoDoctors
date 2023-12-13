import { Routes } from '@angular/router';
import HomeAdminComponent from './views/home-admin/home-admin.component';
import LoginComponent from './views/login/login.component';
import DashboardComponent from './views/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    // {
    //     path: '**',
    //     redirectTo: 'home'
    // },
    // // { path: 'login', loadComponent:() => import('./views/login/login.component')  },
    {
        path: 'home-admin',
        component: HomeAdminComponent
    },
    //{ 
    //   path: 'home-admin', 
    //  loadComponent: () => import('./home-admin/home-admin.component'),
    // },
    {
        path: 'login',
        component: LoginComponent
    },
];
