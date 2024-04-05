import {Injectable} from '@angular/core';
import {Post} from "../interfaces/post";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    posts: Post[] = []

    constructor() { }

    getAllPosts(): Post[] {
        return this.posts;
    }

    getPostById(id: string): Post | undefined {
        return this.posts.find(post => post.id === id);
    }

    addPost(post: Post): void {
        this.posts.push(post);
    }

    updatePost(post: Post): void {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
            this.posts[index] = post;
        }
    }

    deletePost(id: string): void {
        this.posts = this.posts.filter(post => post.id !== id);
    }


}
