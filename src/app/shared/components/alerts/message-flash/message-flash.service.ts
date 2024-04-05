import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMessageFlash} from './message-flash.interface';

@Injectable({
    providedIn: 'root'
})
export class MessageFlashService {
    // BehaviorSubject es un tipo de Observable que almacena el último valor emitido y emite ese valor inmediatamente a
    // los nuevos suscriptores.
    private data = new BehaviorSubject<IMessageFlash>({message: '', show: false});

    // data$ es un Observable que los componentes pueden suscribirse para recibir actualizaciones sobre el estado
    // de visibilidad de las alertas.
    data$: Observable<IMessageFlash> = this.data.asObservable();

    // Establecer una duración predeterminada en milisegundos (por ejemplo, 5000 ms o 5 segundos).
    private delay = 5000;

    toggleAlert(iMessageFlash: IMessageFlash): void {

        if (iMessageFlash.delay) {
            this.delay = iMessageFlash.delay;
        } else {
            iMessageFlash.delay = this.delay;
        }

        // next es un método de BehaviorSubject que emite un nuevo valor a los suscriptores.
        this.data.next(iMessageFlash);

        if (iMessageFlash.show) {
            setTimeout(() => {
                this.close();
            }, iMessageFlash.delay);
        }
    }

    error(iMessageFlash: IMessageFlash): void {
        iMessageFlash.bgColor = 'bg-danger';
        iMessageFlash.textColor = 'text-white';
        iMessageFlash.icon = 'm-exclamation-octagon';

        this.toggleAlert(iMessageFlash);
    }

    success(iMessageFlash: IMessageFlash): void {
        iMessageFlash.bgColor = 'bg-success';
        iMessageFlash.textColor = 'text-white';
        iMessageFlash.icon = 'm-check2-all';

        this.toggleAlert(iMessageFlash);
    }

    warning(iMessageFlash: IMessageFlash): void {
        iMessageFlash.bgColor = 'bg-orange-100';
        iMessageFlash.textColor = 'text-orange-400';
        iMessageFlash.icon = 'fas fa-exclamation-triangle';

        this.toggleAlert(iMessageFlash);
    }

    info(iMessageFlash: IMessageFlash): void {
        iMessageFlash.bgColor = 'bg-blue-100';
        iMessageFlash.textColor = 'text-blue-400';
        iMessageFlash.icon = 'fas fa-info-circle';

        this.toggleAlert(iMessageFlash);
    }

    light(iMessageFlash: IMessageFlash): void {
        iMessageFlash.bgColor = 'bg-white';
        iMessageFlash.textColor = 'text-gray-400';
        iMessageFlash.icon = 'fas fa-info-circle';

        this.toggleAlert(iMessageFlash);
    }

    private close(): void {
        this.data.next({message: '', show: false});
    }


}
