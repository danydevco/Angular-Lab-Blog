import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ApiResponse} from "../../../core/interfaces/api.interface";
import {Post} from "../../../core/interfaces/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

    constructor(private http: HttpService) {
        this.init()
    }

    init(){
        this.http.get<ApiResponse<Post>>('post')
            .subscribe(response  => {
                console.log(response)
            })
    }

}
