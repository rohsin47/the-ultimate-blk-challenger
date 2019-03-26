import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataStore {
    store: Map<any, any>;

    constructor() {
        this.store = new Map<any, any>();
    }
}
