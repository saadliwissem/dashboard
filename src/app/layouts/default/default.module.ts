import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from './../../modules/dashboard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import{MatPaginatorModule} from '@angular/material/paginator'
import{MatTableModule} from '@angular/material/table'
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxStepperModule,IgxIconModule,IgxButtonModule} from "igniteui-angular";
import {  MatChipsModule } from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import { SuggestionsComponent } from 'src/app/modules/suggestions/suggestions.component';
import { ComplaintsComponent } from 'src/app/modules/complaints/complaints.component';
import { CcardComponent } from 'src/app/modules/ccard/ccard.component';
import { AskForInfoComponent } from 'src/app/modules/ask-for-info/ask-for-info.component';
import { InfoComponent } from 'src/app/modules/info/info.component';
import {MatListModule} from '@angular/material/list';
import { InfopComponent } from 'src/app/modules/infop/infop.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
   
    SuggestionsComponent,
    InfopComponent,
    ComplaintsComponent,
    CcardComponent,
    AskForInfoComponent,
    InfoComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxStepperModule,
    IgxIconModule,
    IgxButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    MatTreeModule,
    MatListModule,
    
    

    
    
    

   
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
