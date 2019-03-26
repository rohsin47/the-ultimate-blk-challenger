import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStore} from '../../shared/data-store';
import {ChallengeService} from '../../shared/service/challenge-service';
import {ChallengeDetails} from '../../home/model/challenge-details';
import {EventService} from '../../shared/service/event-service';
import {NavigationEnd, Router} from '@angular/router';
import {ChallengeMode} from '../model/challenge-mode';

@Component({
  selector: 'app-with-challenge',
  templateUrl: 'with-challenge.page.html',
  styleUrls: ['with-challenge.page.scss']
})
export class WithChallengePage implements OnInit {

  challenge: ChallengeDetails;

  constructor(private dataStore: DataStore,
              private challengeService: ChallengeService,
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
        const challengeFromRegistration = this.dataStore.store.get('REGISTRATION');
        const currentChallenge = this.dataStore.store.get('CURRENT_CHALLENGE');

        if (challengeFromRegistration) {
            this.challenge = this.challengeService.createFromRegistrationForm(challengeFromRegistration);
            this.dataStore.store.set('REGISTRATION', null);
            this.eventService.fireEvent('REGISTRATION_SUCCESS', this.challenge); /// yuck why is this here
        } else if (currentChallenge) {
            this.challenge = currentChallenge;
        }
    }
}
