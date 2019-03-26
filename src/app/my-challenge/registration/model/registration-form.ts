import {User} from './user';
import {CardPayment} from './card-payment';
import {SalaryPayment} from './salary-payment';
import {Charity} from './charity';
import {PaymentMode} from './payment-mode';

export class RegistrationForm {
    user: User;
    capital: number;
    paymentMode: PaymentMode;
    cardPayment: CardPayment;
    salaryPayment: SalaryPayment;
    charity: Charity;
    startDate: Date;
    startDateStr: string;
}
