import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NewHomeComponent } from './new-home/new-home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home Details',
  },
  {
    path: 'new-home',
    component: NewHomeComponent,
    title: 'Add New Home',
  }
];
