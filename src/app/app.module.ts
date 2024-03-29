import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    NavbarComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
