var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_constants_1 = require('./app.constants');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var top_bar_1 = require('./components/top-bar/top-bar');
var home_1 = require('./components/home/home');
var material_1 = require('@angular/material');
var flex_layout_1 = require("@angular/flex-layout");
var landing_page_1 = require('./components/landing-page/landing-page');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_1.HomeComponent }
                ]),
                material_1.MaterialModule.forRoot(),
                flex_layout_1.FlexLayoutModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                top_bar_1.TopBarComponent,
                home_1.HomeComponent,
                landing_page_1.LandingPageComponent
            ],
            providers: [
                { provide: app_constants_1.APP_CONSTANTS, useValue: app_constants_1.AppConstants }
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map