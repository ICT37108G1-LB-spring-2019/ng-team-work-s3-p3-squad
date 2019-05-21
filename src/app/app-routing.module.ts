import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreComponent} from './components/store/store.component';
import {ShirtComponent} from './components/shirt/shirt.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {AddShirtComponent} from './components/admin/add-shirt/add-shirt.component';
import {EditShirtComponent} from './components/edit-shirt/edit-shirt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store/shirts',
    pathMatch: 'full',
  },
  {
    path: 'store/shirts',
    component: StoreComponent,
  },
  {
    path: 'store/shirt/:id',
    component: ShirtComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/shirts',
      },
      {
        path: 'shirts',
        component: DashboardComponent,
      },
      {
        path: 'shirts/add',
        component: AddShirtComponent,
      },
      {
        path: 'shirts/:id/edit',
        component: EditShirtComponent,
      }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
