import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {PostsComponent} from './pages/posts/posts.component';
import {PostComponent} from './pages/post/post.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarBlogComponent} from './components/navbar-blog/navbar-blog.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        LayoutComponent,
        PostsComponent,
        PostComponent,
        FooterComponent,
        NavbarBlogComponent,
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        HttpClientModule
    ]
})
export class BlogModule {
}
