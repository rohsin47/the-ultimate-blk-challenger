import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyChallengePage } from './my-challenge.page';
import {NoChallengePage} from './no-challenge/no-challenge.page';
import {RegistrationPage} from './registration/registration.page';
import {WithChallengePage} from './with-challenge/with-challenge.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyChallengePage }])
  ],
  declarations: [MyChallengePage, NoChallengePage, RegistrationPage, WithChallengePage]
})
export class MyChallengePageModule {}
