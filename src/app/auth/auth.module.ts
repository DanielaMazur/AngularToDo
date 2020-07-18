import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent, LoginComponent } from './components';
import { AuthRouterModule } from './auth-routing.module';
import { MaterialModule } from '../modules/material-module/material-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
