import {Charity} from '../../my-challenge/registration/model/charity';
import {DailyStepRecord} from '../../my-challenge/with-challenge/model/daily-step-record';

export class ChallengeDetails {
    startDate: string;
    endDate: string;
    daysOf10000: number;
    daysSinceStart: number;
    capital: number;
    gain: number;
    donated: number;
    retirement: number;
    charity: Charity;
    dailyStepRecord: Array<DailyStepRecord>;
}
