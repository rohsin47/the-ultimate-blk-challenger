import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ChallengeMode} from '../model/challenge-mode';
import {RegistrationForm} from './model/registration-form';
import {User} from './model/user';
import {CardPayment} from './model/card-payment';
import {SalaryPayment} from './model/salary-payment';
import {Charity} from './model/charity';
import {PaymentMode} from './model/payment-mode';
import {DataStore} from '../../shared/data-store';
import {IonSlides} from '@ionic/angular';
import {EventService} from '../../shared/service/event-service';
import {NavigationEnd, Router} from '@angular/router';
import {ChallengeDetails} from '../../home/model/challenge-details';
import {UserChallenge} from '../../home/model/user-challenge';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss']
})
export class RegistrationPage implements OnInit {
    @Output() back = new EventEmitter<any>();
    @Output() register = new EventEmitter<any>();

    @ViewChild(IonSlides) slides: IonSlides;

    registrationForm: RegistrationForm;
    charities: Charity[];
    paymentModes = PaymentMode;
    startDateStr: string;

    constructor(private dataStore: DataStore,
                private router: Router) {

    }

    ngOnInit() {
        this.startDateStr = new Date().toISOString();

        this.initRegistrationForm();
        this.mockCharities();

        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.initRegistrationForm();
                }
            });
    }

    initRegistrationForm() {
        this.registrationForm = new RegistrationForm();
        this.registrationForm.user = new User();

        const currentUserChallenge: UserChallenge = this.dataStore.store.get('CURRENT_USER_CHALLENGE');

        if (currentUserChallenge) {
            this.registrationForm.user.employeeNo = currentUserChallenge.employeeId;
            this.registrationForm.user.firstName = currentUserChallenge.firstName;
            this.registrationForm.user.lastName = currentUserChallenge.lastName;
            this.registrationForm.paymentMode = PaymentMode.MANUAL;
            this.registrationForm.cardPayment = new CardPayment();
            this.registrationForm.salaryPayment = new SalaryPayment();
        }
    }

    mockCharities() {
        const charity1 = new Charity(1223114, 'REACH Youth Service', 'REACH Youth Service comprises of a team of passionate and dedicated change agents who desire to spark transformation in youths.');
        const charity2 = new Charity(1223126, 'FRIENDS OF YOUTH', 'With 67 years of experience, national accreditation, 26 program sites, and services in 18 cities, Friends of Youth annually serves more than 6,500 children, youth, young adults, and their families');
        const charity3 = new Charity(1223136, 'Ensure Children and Youth Succeed', 'Unfortunately, not all children have a level playing field. Children in families that struggle with poverty can be left behind or miss out on key opportunities to get an adequate education');
        const charity4 = new Charity(1223146, 'AVENUES FOR HOMELESS YOUTH', 'Wilder Research estimates that, on any night in the state of Minnesota, 6,000+ youth and young adults are homeless and unaccompanied by an adult');
        const charity5 = new Charity(1223256, 'YOUTH EASTSIDE SERVICES', 'Through intervention, outreach and prevention, YES builds confidence and responsibility, strengthens family relationships and advocates for a safer community that cares for its youth');
        this.charities = new Array();
        this.charities.push(charity1);
        this.charities.push(charity2);
        this.charities.push(charity3);
        this.charities.push(charity4);
        this.charities.push(charity5);
    }

    backClicked() {
      this.back.emit();
    }

    registerClicked() {
        this.slides.getActiveIndex().then(index => {
            const chosenCharity = this.charities[index];
            this.registrationForm.charity = chosenCharity;
            this.registrationForm.startDate = new Date(this.startDateStr);
            this.registrationForm.startDateStr = this.startDateStr;
            this.dataStore.store.set('REGISTRATION', this.registrationForm);
            this.register.emit();
        });
    }

    paymentModeSelected(selectedPaymentMode: PaymentMode) {
        this.registrationForm.paymentMode = selectedPaymentMode;
    }

    calculateGainForRetirement() {
        const capital = this.registrationForm.capital;
        if (capital) {
           return capital * .03;
        } else {
            return 0.00;
        }
    }

    calculateGainForCharity() {
        const capital = this.registrationForm.capital;
        if (capital) {
            return capital * .02;
        } else {
            return 0.00;
        }
    }
}
