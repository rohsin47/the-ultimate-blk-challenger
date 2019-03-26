import {Component, OnInit} from '@angular/core';
import userChallengeList from '../../data/user-challenge.json';
import {UserChallenge} from './model/user-challenge';
import {DataStore} from '../shared/data-store';
import {NavController} from '@ionic/angular';
import {NavigationEnd, Router} from '@angular/router';
import {EventService} from '../shared/service/event-service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    userChallenge: UserChallenge;

    constructor(private dataStore: DataStore,
                private navCtrl: NavController,
                private eventService: EventService,
                private router: Router) {
    }

    ngOnInit() {
        this.readUserChallenge();

        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.readUserChallenge();
                }
            });
    }

    readUserChallenge() {
        this.userChallenge = new UserChallenge();
        const loggedInUser = this.dataStore.store.get('USER') ? this.dataStore.store.get('USER') : 'fmarco';

        userChallengeList.filter(userChallenge => {
            if (userChallenge.userName === loggedInUser) {
                this.userChallenge = userChallenge;
            }
        });

        if (this.userChallenge && this.userChallenge.currentChallenge) {
            this.dataStore.store.set('CURRENT_CHALLENGE', this.userChallenge.currentChallenge);
            this.dataStore.store.set('CURRENT_USER_CHALLENGE', this.userChallenge);
        } else {
            this.dataStore.store.set('CURRENT_CHALLENGE', null);
            this.dataStore.store.set('CURRENT_USER_CHALLENGE', this.userChallenge);
        }

        this.eventService.removeListener('REGISTRATION_SUCCESS');
        this.eventService.addListener('REGISTRATION_SUCCESS', (newChallege) => {
            this.userChallenge.currentChallenge = newChallege;
        });
    }

    enrollment() {
        this.navCtrl.navigateForward('tabs/my-challenge', {});
    }

    logout() {
        this.navCtrl.navigateForward('login', {});
    }
}
