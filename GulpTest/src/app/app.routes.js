"use strict";
var router_1 = require("@angular/router");
var home_index_component_1 = require("./components/home/home.index.component");
var persona_index_component_1 = require("./components/persona/persona.index.component");
var APP_ROUTES = [
    { path: 'home', component: home_index_component_1.HomeComponent },
    { path: 'personas', component: persona_index_component_1.PersonaIndexComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map