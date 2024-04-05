import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {PostsComponent} from "./pages/posts/posts.component";
import {PostComponent} from "./pages/post/post.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: 'post/:id',
                component: PostComponent
            },
            {
                path: '',
                redirectTo: 'posts',
                pathMatch: 'full'
            },
        ]
    },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
