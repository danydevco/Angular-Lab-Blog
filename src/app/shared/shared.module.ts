import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MessageFlashComponent} from "./components/alerts/message-flash/message-flash.component";


@NgModule({
    declarations: [
        NavbarComponent,
        MessageFlashComponent
    ],
    exports:[
      MessageFlashComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule {
}
