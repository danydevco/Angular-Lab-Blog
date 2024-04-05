import {Injectable} from '@angular/core';
import {Post} from "../interfaces/post";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    posts: Post[] = [
        {
            id: '1',
            title: 'Post 1',
            content: 'Content of post 1',
            author: 'Author 1',
            createdAt: '',
            category: 'Category 1',
            tags: ['tag1', 'tag2']
        }
    ]

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
