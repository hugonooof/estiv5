import { AccountPageModule } from './../account/account.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      }

    ]
  }];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule { }
