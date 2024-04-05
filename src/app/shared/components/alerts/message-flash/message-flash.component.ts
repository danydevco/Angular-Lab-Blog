import {Component, OnInit} from '@angular/core';
import {IMessageFlash} from './message-flash.interface';
import {MessageFlashService} from './message-flash.service';

@Component({
    selector: 'app-message-flash',
    templateUrl: './message-flash.component.html',
    styleUrls: ['./message-flash.component.scss'],
    // animations: [AnimationService.fadeInDown]
})
export class MessageFlashComponent implements OnInit {

    messageFlash: IMessageFlash = {message: '', show: false};
    constructor(private messageFlashService: MessageFlashService) {
    }

    ngOnInit(): void {
        this.messageFlashService.data$.subscribe(data => {
            console.log(data)
            this.messageFlash = data;
            this.messageFlash.closable = true;
        });
    }

    close(): void {
        this.messageFlashService.toggleAlert({message: '', show: false});
    }

}
