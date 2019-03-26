import { Component, EventEmitter, Output} from '@angular/core';
import { NavController } from '@ionic/angular';
import { HealthApiGlobal } from './model/healthapi.global.model';
import { HealthApiService } from '../../shared/service/healthapi.service';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from '../../shared/service/loading.service';

@Component({
  selector: 'app-explore-trivia',
  templateUrl: 'trivia.page.html',
  styleUrls: ['trivia.page.scss']
})

export class TriviaPage {
    news : HealthApiGlobal = new HealthApiGlobal();

    constructor(public navCtrl: NavController, private healthApiService : HealthApiService, public loading: LoadingService) {
        this.loading.present();
        this.getData();
        this.loading.dismiss();
    }
    
    doRefresh(event) {
       this.getData();
       setTimeout(() => {
           console.log('Data is Refreshed');
           event.target.complete();
       }, 2000);
    }
    
    getData() {
        this.healthApiService.getArticles()
        .then(newsFetched => {this.news = newsFetched;
        console.log(this.news);
        });
    }

}