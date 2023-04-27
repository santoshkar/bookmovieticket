import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordMaskPipe } from './passwordmask.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedService } from './shared.service';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { HighlightDirective } from './highlight.directive';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieScreeningComponent } from './movie-screening/movie-screening.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordMaskPipe,
    LogInComponent,
    RegisterComponent,
    LandingPageComponent,
    CustomerHomeComponent,
    HighlightDirective,
    MovieListComponent,
    MovieScreeningComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
