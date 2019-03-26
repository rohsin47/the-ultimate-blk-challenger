import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LeaderboardPageModule } from '../explore/leaderboard/leaderboard.page.module';
import { TriviaPageModule } from '../explore/trivia/trivia.page.module';
import { CharityPageModule } from '../explore/charity/charity.page.module';
import { ExplorePageModule } from '../explore/explore.page.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.page.module#HomePageModule'
          }
        ]
      },
      {
        path: 'my-challenge',
        children: [
          {
            path: '',
            loadChildren: '../my-challenge/my-challenge.page.module#MyChallengePageModule'
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {path: '', loadChildren: () => ExplorePageModule},
          {
             path: 'leaderboard',
             children: [
                   {path: '', loadChildren: () => LeaderboardPageModule}
             ]
           },
           {
              path: 'trivia',
              children: [
                    {path: '', loadChildren: () => TriviaPageModule}
             ]
           },
           {
              path: 'charity',
              children: [
                    {path: '', loadChildren: () => CharityPageModule}
                 ]
            }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
