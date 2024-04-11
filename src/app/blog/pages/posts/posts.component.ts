import { Component } from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {Post} from "../../../core/interfaces/post";
import {MessageFlashService} from "../../../shared/components/alerts/message-flash/message-flash.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

    posts: Post[] = []

    constructor(private postService: PostService, private messageFlashService: MessageFlashService) {
        this.postService.getAllPosts().subscribe({
            next: (posts) => {
                console.log(posts)
                this.posts = posts;
            },
            error: (error) => {
                this.messageFlashService.error({
                    message: 'An error occurred while loading posts',
                    show: true
                });
                console.error(error);
            }
        });
    }
}
