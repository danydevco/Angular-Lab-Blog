import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {augmentIndexHtml} from "@angular-devkit/build-angular/src/utils/index-file/augment-index-html";
import {authGuard} from "./core/guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
