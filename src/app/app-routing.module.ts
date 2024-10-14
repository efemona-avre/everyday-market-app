import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductsPageComponent } from './modules/market/products-page/products-page.component';
// import { RegisterPageComponent } from './modules/core/register-page/register-page.component';

const routes: Routes = [
  // { path: 'products', component: ProductsPageComponent }, 
  // { path: 'register', component: RegisterPageComponent }, 
  { path: '', redirectTo: '/register', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
