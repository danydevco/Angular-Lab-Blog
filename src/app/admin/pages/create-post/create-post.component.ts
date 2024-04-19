import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent implements OnInit{
    postForm: FormGroup = this.fb.group({});

    constructor(private fb: FormBuilder) {}

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

    }
}
