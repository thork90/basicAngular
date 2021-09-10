import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlmaComponent } from './alma/alma.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { ListDemoComponent } from './listdemo/listdemo.component';
import { AzenpipomPipe } from './listdemo/azenpipom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlmaComponent,
    EventComponent,
    ListDemoComponent,
    AzenpipomPipe
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
