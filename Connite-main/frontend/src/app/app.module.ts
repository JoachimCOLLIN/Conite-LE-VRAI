import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {ExamsApiService} from './exams/exams-api.service';
import {ExamFormComponent} from './exams/exam-form.component';
import {ExamsComponent} from './exams/exams.component';
import {AuthApiService} from './auth/auth-api.service';
import {LoginComponent} from './auth/login.component';
import {RegisterComponent} from './auth/register.component';
import {CallbackComponent} from './callback.component';
<<<<<<< Updated upstream
import * as Auth0 from 'auth0-web';
import { InformationsComponent } from './exams/informations.component';

=======

import { InformationsComponent } from './informationchantier/informations.component';
import { ChantierComponent } from './chantiers/chantier.component';
import {ListeOuvrierComponent} from './ouvriers/listeouvrier.component';
import { OuvrierFormComponent } from './ouvriers/ouvrier-form.component';
import { PointageApiService } from './pointage/pointage-api.serivce';
import { PointageComponent } from './pointage/pointage.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PrimesComponent } from './primes/primes.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdateOuvrierComponent } from './update-ouvrier/update-ouvrier.component';
>>>>>>> Stashed changes

const appRoutes: Routes = [
    {path: '', component: ExamsComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'new-exam', component: ExamFormComponent},
    {path: 'about', component: AboutComponent},
    {path: 'callback', component: CallbackComponent },
    {path: 'chantier/:id', component: InformationsComponent},
];


@NgModule({
  declarations: [
      AppComponent,
      ExamFormComponent,
      ExamsComponent,
      AboutComponent,
      LoginComponent,
      RegisterComponent,
      CallbackComponent,
      InformationsComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes, {enableTracing: true}),
      NoopAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatIconModule,
  ],
    providers: [
<<<<<<< Updated upstream
        ExamsApiService,
        AuthApiService
=======
        ChantiersApiService,
        AuthApiService,
        OuvriersApiService,
        InformationsApiService,
        PointageApiService,
        DatePipe,
>>>>>>> Stashed changes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        Auth0.configure({
          domain: 'dev-65v3zaee.us.auth0.com',
          audience: 'https://online-exam.digituz.com.br',
          clientID: 'TnsKt1kKB9xbKnHFJHvwE8AENEICnLDS',
          redirectUri: 'http://localhost:4200/callback',
          scope: 'openid profile manage:exams'
        });
      }
 }
