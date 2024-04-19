import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';


@NgModule({
    declarations: [
        LayoutComponent,
        PostsComponent,
        PostComponent,
        NavbarComponent,
        SidebarComponent,
        CreatePostComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
