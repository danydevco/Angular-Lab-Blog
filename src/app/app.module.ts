import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AdminModule} from "./admin/admin.module";
import {BlogModule} from "./blog/blog.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BlogModule,
        /*
        AdminModule,
        BlogModule,
        SharedModule,
        CoreModule*/
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
