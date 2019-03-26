import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LeaderboardPage } from './leaderboard/leaderboard.page';
import { CharityPage } from './charity/charity.page';
import { TriviaPage } from './trivia/Trivia.page';
import { Items } from './charity/model/items';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
    exploreType: string

    constructor(public navCtrl: NavController) {}

    loadLeaders() {
        this.exploreType = 'Leaderboard';
        this.navCtrl.navigateForward('tabs/explore/leaderboard', {});
    }

    loadTrivia() {
        this.exploreType = 'Trivia';
        this.navCtrl.navigateForward('tabs/explore/trivia', {});
    }

    loadCharityOptions() {
        this.exploreType = 'Charity';
        this.navCtrl.navigateForward('tabs/explore/charity', {});
        new CharityPage(this.navCtrl, new Items());
    }

}
