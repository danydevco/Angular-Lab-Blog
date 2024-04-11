import { Component } from '@angular/core';
import {PostService} from "../../../core/services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../../core/interfaces/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
    post: Post | undefined = {} as Post

    constructor(private postService: PostService, private route: ActivatedRoute) {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.post = this.postService.getPostById(id);
            console.log(this.post)
        }
    }
}
