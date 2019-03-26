import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EventService {

    eventHandlers = [];

    addListener(eventName: string, handler: Function) {
        this.eventHandlers.push({eventName: eventName, handler: handler});
    }

    removeListener(eventName: string) {
        for (let i = 0; i < this.eventHandlers.length; i++){
            if ( this.eventHandlers[i].eventName === eventName) {
                this.eventHandlers.splice(i, 1);
            }
        }
    }

    fireEvent(eventName: string, arg: any) {
        this.eventHandlers.forEach(handle => {
            if (handle.eventName === eventName) {
                handle.handler(arg);
            }
        });
    }
}
