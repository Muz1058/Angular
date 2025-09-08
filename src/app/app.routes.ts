import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { ProfileComponent } from './profile/profile';
import { User } from './user/user';
import { ResolveFn } from '@angular/router';
import { Froms } from './froms/froms';
const titleResolver: ResolveFn<string> = (route) => {
  return `Profile of ${route.paramMap.get('name')}`;
};
export const routes: Routes = [

    {
        path: '',
        component: Home,
        title:'Home'
    },
    {
        path: 'login',
        component: Login,
        title:'Login'
    },
    {
        path: 'about',
        component: About,
        title:'About'
    },
    {
        path: 'contact',
        component: Contact,
        title:'Contact-Us'
    },
    
    {
        path:'profile',
        component:ProfileComponent,
        title:'profile'
    },
    {
        path:'user/:id/:name',
        component:User,
        title:titleResolver
    },
    {
        path:'form',
        component:Froms,
        title:'Form'
    },
    {
        path:'**',
        component:PageNotFound,
        title:'Error 404'
    }
];
