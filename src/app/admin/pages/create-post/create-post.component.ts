import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {ApiResponse} from "../../../core/interfaces/api.interface";
import {MessageFlashService} from "../../../shared/components/alerts/message-flash/message-flash.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrl: './create-post.component.scss'
})
export class CreatePostComponent implements OnInit {
    postForm: FormGroup = this.fb.group({});

    constructor(private fb: FormBuilder,
                private http: HttpService,
                private messageFlashService: MessageFlashService,
                private router: Router) {}

    ngOnInit() {
        this.initializeFormLogin()
    }

    initializeFormLogin() {
        this.postForm = this.fb.group({
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
            published_at: ['', [Validators.required]],
        });
    }

    onSubmit() {
        console.log(this.postForm.value)
        if (this.postForm.valid) {
            this.http.post<ApiResponse<null>>('post', this.postForm.value)
                .subscribe({
                    next: (response) => {
                        if (response.successful){
                            this.messageFlashService.success({show: true, message: response.message});
                            this.router.navigate(['admin', 'post']).then()
                        }else{
                            this.messageFlashService.error({show: true, message: response.message});
                        }
                    }
                })
        }
    }
}
