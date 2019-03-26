import {RegistrationForm} from '../../my-challenge/registration/model/registration-form';
import {Injectable} from '@angular/core';
import {ChallengeDetails} from '../../home/model/challenge-details';

@Injectable({
    providedIn: 'root',
})
export class ChallengeService {
    createFromRegistrationForm(form: RegistrationForm): ChallengeDetails {
        const challenge = new ChallengeDetails();
        challenge.capital = form.capital;
        challenge.startDate = this.formatDate(form.startDate);
        challenge.charity = form.charity;
        challenge.daysOf10000 = 0;
        challenge.daysSinceStart = 0;

        return challenge;
    }

    formatDate(date: Date): string {
        const monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return  monthNames[monthIndex] + ' ' + day + ', ' + year;
    }
}
