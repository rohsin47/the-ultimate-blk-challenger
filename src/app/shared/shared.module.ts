import {DataStore} from './data-store';
import {ChallengeService} from './service/challenge-service';
import {HealthApiService} from './service/healthapi.service';
import {NgModule} from '@angular/core';

@NgModule({
  providers: [DataStore, ChallengeService, HealthApiService]
})
export class AppSharedModule {}
