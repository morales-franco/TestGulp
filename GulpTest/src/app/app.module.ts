import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.index.component';
import { PersonaIndexComponent } from './components/persona/persona.index.component';

//Rutas 
import { APP_ROUTING } from './app.routes';

@NgModule({
    imports: [BrowserModule, APP_ROUTING ],
  declarations: [AppComponent, HomeComponent, PersonaIndexComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
