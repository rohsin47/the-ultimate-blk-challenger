import {Component, EventEmitter, Output} from '@angular/core';
import {ChallengeMode} from '../model/challenge-mode';

@Component({
  selector: 'app-no-challenge',
  templateUrl: 'no-challenge.page.html',
  styleUrls: ['no-challenge.page.scss']
})
export class NoChallengePage {
    @Output() enrollNow = new EventEmitter<any>();

    enrollNowClicked() {
      this.enrollNow.emit(ChallengeMode.REGISTRATION);
    }
}
