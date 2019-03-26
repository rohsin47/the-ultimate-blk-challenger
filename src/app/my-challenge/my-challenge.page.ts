import {Component, OnInit} from '@angular/core';
import {ChallengeMode} from './model/challenge-mode';
import {DataStore} from '../shared/data-store';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-my-challenge',
  templateUrl: 'my-challenge.page.html',
  styleUrls: ['my-challenge.page.scss']
})
export class MyChallengePage implements OnInit {
  challengeModeEnum = ChallengeMode;
  challengeMode: ChallengeMode;

  constructor(private dataStore: DataStore, private router: Router) {
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
      const currentChallenge = this.dataStore.store.get('CURRENT_CHALLENGE');

      if (currentChallenge) {
          this.challengeMode = ChallengeMode.WITH_CHALLENGE;
      } else {
          this.challengeMode = ChallengeMode.NO_CHALLENGE;
      }
  }

  onEnrollNow() {
    this.challengeMode = ChallengeMode.REGISTRATION;
  }

  onRegistrationBack() {
    this.challengeMode = ChallengeMode.NO_CHALLENGE;
  }

  onRegister() {
    this.challengeMode = ChallengeMode.WITH_CHALLENGE;
  }
}
