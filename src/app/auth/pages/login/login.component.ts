import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MessageFlashService} from "../../../shared/components/alerts/message-flash/message-flash.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = this.fb.group({});

    constructor(private authService: AuthService,
                private fb: FormBuilder,
                private router: Router,
                private messageFlashService: MessageFlashService) {}

    ngOnInit() {
        this.initializeFormLogin()
    }

    initializeFormLogin() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit() {
        console.log(this.loginForm.value)
        if (this.loginForm.valid) {
            console.log(this.loginForm.value)
            if (this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
                this.router.navigate(['admin', 'posts']).then()
            } else {
                this.messageFlashService.error({message: 'Usuario o contraseña incorrecto', show: true})
            }
        }
    }

}
