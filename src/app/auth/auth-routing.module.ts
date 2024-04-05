import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
