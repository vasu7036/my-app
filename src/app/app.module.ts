import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { MarksComponent } from './marks/marks.component';
import { PricePipe } from './price.pipe';
import { StarPipe } from './star.pipe';
import { EventsComponent } from './events/events.component';
import { VechileComponent } from './vechile/vechile.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    CalculatorComponent,
    CircleComponent,
    DirectivesComponent,
    TableComponent,
    MarksComponent,
    PricePipe,
    StarPipe,
    EventsComponent,
    VechileComponent,
    AccountComponent,
    FlipkartComponent,
    MailComponent,
    EmployeeComponent,
    CreateVechileComponent,
    CreateAccountsComponent,
    StudentsComponent,
    CreateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
