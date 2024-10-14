import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProductsRoutingModule } from '../products-routing.module';
import { RegisterRoutingModule } from '../register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterPageComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    ProductsRoutingModule,
    RegisterRoutingModule,
  ],
  exports: [
    RegisterPageComponent,
  ]
})
export class CoreModule { }
