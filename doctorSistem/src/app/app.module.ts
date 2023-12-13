import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
// import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
   MatButtonModule,
   MatMenuModule,
MatIconModule,
MatCardModule,
MatTabsModule,
MatSidenavModule,
MatListModule,
MatToolbarModule,
MatInputModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,
MatProgressSpinnerModule,
MatStepperModule,
MatDialogModule,
// AppRoutingModule,
MatSelectModule,
MatCheckboxModule,
MatRadioModule,
MatSliderModule,
MatDatepickerModule,
// MatNativeDateModule,
// ReactiveFormsModule,


  ],
  providers: [


  ],
  bootstrap: [

    // AppComponent  
  ]




})
export class AppModuleModule { }
