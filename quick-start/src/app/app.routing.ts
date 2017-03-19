import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    },
    {
        path: 'news',
        component: NewsComponent
    }
]

export const routing = RouterModule.forRoot(routes);