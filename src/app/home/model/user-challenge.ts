import {ChallengeDetails} from './challenge-details';

export class UserChallenge {
    userName: string;
    firstName: string;
    lastName: string;
    employeeId: number;
    stepsCountToday: number;
    totalAmountToRetirement: number;
    totalAmountDonated: number;

    currentChallenge: ChallengeDetails;
    pastChallenges: Array<ChallengeDetails>;
}
