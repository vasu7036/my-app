import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { TableComponent } from './table/table.component';
import { EventsComponent } from './events/events.component';
import { VechileComponent } from './vechile/vechile.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { CreateAccountService } from './create-account.service';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentsComponent } from './students/students.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'circle',component:CircleComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'marks',component:MarksComponent},
    {path:'table',component:TableComponent},
    {path:'events',component:EventsComponent},
    {path:'vechile',component:VechileComponent},
    {path:'account',component:AccountComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'createvechile',component:CreateVechileComponent},
    {path:'createaccount',component:CreateAccountsComponent},
    {path:'students',component:StudentsComponent},
    {path:'createuser',component:CreateUserComponent}
    
  ]},
  {path:'', component:LoginComponent},
  {path:'**' ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
