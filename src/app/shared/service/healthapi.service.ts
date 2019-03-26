import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs'

import { HealthApiGlobal } from '../../explore/trivia/model/healthapi.global.model';

@Injectable({
    providedIn: 'root',
})
export class HealthApiService {

    private baseUrl: string = 'https://newsapi.org/v2/';
    private source: string = 'top-headlines';
    private apiKey: string = '4b250e6224c7454792afdab5996861bb';

    constructor(private http: Http) {
    }

    public getArticles(): Promise<any> {
        const url = 'https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=4b250e6224c7454792afdab5996861bb';

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as HealthApiGlobal)
        .catch(error => console.log('Unable to find : ' + error))
    }

}