import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreComponent} from './components/store/store.component';
import {HttpClientModule} from '@angular/common/http';
import {ShirtComponent} from './components/shirt/shirt.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import { AddShirtComponent } from './components/admin/add-shirt/add-shirt.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PagingComponent } from './components/paging/paging.component';
import { EditShirtComponent } from './components/edit-shirt/edit-shirt.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ShirtComponent,
    DashboardComponent,
    AddShirtComponent,
    PagingComponent,
    EditShirtComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
