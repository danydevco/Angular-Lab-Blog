import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {MessageFlashService} from "../../shared/components/alerts/message-flash/message-flash.service";
import {catchError, throwError} from "rxjs";
import {ILoginResponse} from "../../core/interfaces/auth.interface";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    api = environment.api
    constructor(private http: HttpClient, private messageFlashService: MessageFlashService) { }

    getEndPoint(path: string){
        return `${this.api}/${path}`
    }

    get<T>(path: string) {

        const headers = this.addHeader()

        const endpoint = this.getEndPoint(path)

        return this.http.get<T>(endpoint, {headers}).pipe(
            catchError(
                (error: HttpErrorResponse) => this.handleError(error)
            )
        )
    }

    post<T>(path: string, body: any) {

        const headers = this.addHeader()

        const endpoint = this.getEndPoint(path)

        return this.http.post<T>(endpoint, body, {headers}).pipe(
            catchError(
                (error: HttpErrorResponse) => this.handleError(error)
            )
        )
    }

    getUser(): ILoginResponse | null {
        const user: string | null = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }

    getToken() {
        const user: ILoginResponse | null = this.getUser()
        return user ? user.token : null
    }

    private addHeader(): HttpHeaders {
        return new HttpHeaders(this.getHttpHeader())
    }

    private getHttpHeader() {

        const headers: { [key: string]: string } = {
            'Content-Type': 'application/json'
        }

        const authToken: string | null = this.getToken()

        if (authToken) {
            headers['Authorization'] = `Bearer ${authToken}`
        }

        return headers

    }

    private handleError(error: HttpErrorResponse) {
        if ('successful' in error.error) {
            this.messageFlashService.error({message: error.error.message, show: true})
        } else {
            this.messageFlashService.error({message: 'Ocurrió un error', show: true})
        }

        return throwError('Ocurrió un error')
    }


}
