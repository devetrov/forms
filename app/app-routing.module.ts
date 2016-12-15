import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { FormNestedComponent } from './forms/form-nested/form-nested.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/form-validation',
    pathMatch: 'full'
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: 'form-nested',
    component: FormNestedComponent
  },
  {
    path: 'form-controls',
    component: FormControlsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}