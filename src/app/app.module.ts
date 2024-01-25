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
import { FormsModule } from '@angular/forms';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { MarksComponent } from './marks/marks.component';
import { PricePipe } from './price.pipe';
import { StarPipe } from './star.pipe';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
