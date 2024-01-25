import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'circle',component:CircleComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'marks',component:MarksComponent},
    {path:'table',component:TableComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**' ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
