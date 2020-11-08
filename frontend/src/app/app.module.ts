import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanningComponent } from './planning/planning.component';
import { RedirectComponent } from './redirect/redirect.component'

import { PlanningService } from "./services/planning.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanningComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PlanningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
