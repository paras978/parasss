import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ApiJsonComponent } from './pages/api-json/api-json.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: 'navbar',       component:NavComponent },
  { path: 'Api',          component:ApiJsonComponent},
  { path: 'Form',         component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
