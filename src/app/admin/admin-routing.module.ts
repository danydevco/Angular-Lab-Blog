import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {PostsComponent} from "./pages/posts/posts.component";
import {PostComponent} from "./pages/post/post.component";
import {CreatePostComponent} from "./pages/create-post/create-post.component";

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
                path: 'post',
                component: PostComponent
            },
            {
                path: 'post/create',
                component: CreatePostComponent
            },
            {
                path: '',
                redirectTo: 'posts',
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
