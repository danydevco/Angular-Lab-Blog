import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    constructor(private router: Router) {}

    cerrarSesion() {
        localStorage.clear();
        this.router.navigate(['auth', 'login'])
    }
}
