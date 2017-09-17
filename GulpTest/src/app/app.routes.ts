import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.index.component'
import { PersonaIndexComponent } from './components/persona/persona.index.component'

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'personas', component: PersonaIndexComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


