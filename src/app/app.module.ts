import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SecurityUpdatesComponent} from './security-updates/security-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityUpdatesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
