import { Component } from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {Post} from "../../../core/interfaces/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

    posts: Post[] = []

    constructor(private postService: PostService) {
        this.posts = this.postService.getAllPosts();
    }
}
