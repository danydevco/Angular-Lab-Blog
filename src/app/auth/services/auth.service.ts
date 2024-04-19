import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../../core/interfaces/api.interface";
import {ILoginResponse} from "../../core/interfaces/auth.interface";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private api = environment.api;

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<ApiResponse<ILoginResponse>> {
        return this.http.post<ApiResponse<ILoginResponse>>(`${this.api}/auth/login`, {username, password})
    }



}
