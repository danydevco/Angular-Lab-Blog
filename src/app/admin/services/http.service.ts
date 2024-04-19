import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {MessageFlashService} from "../../shared/components/alerts/message-flash/message-flash.service";
import {catchError, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ILoginResponse} from "../../core/interfaces/auth.interface";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient, private messageFlashService: MessageFlashService) { }

    get<T>(url: string) {

        const headers = this.addHeader()

        return this.http.get(url, {headers}).pipe(
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
