
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuggestionsComponent } from './modules/suggestions/suggestions.component';
import { ComplaintsComponent } from './modules/complaints/complaints.component';
import { AskForInfoComponent } from './modules/ask-for-info/ask-for-info.component';
import { InfoComponent } from './modules/info/info.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
    path:'suggestions',
    component: SuggestionsComponent,
    
  },{
    path:'complaints',
    component: ComplaintsComponent,
    
  },
  {
    path:'askForInfo',
    component: AskForInfoComponent,
    
  },{
    path:'info',
    component: InfoComponent,
    
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
