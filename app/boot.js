System.register(['angular2/platform/browser', './app.component', "./hero.service", 'angular2/core'], function(exports_1) {
    var browser_1, app_component_1, hero_service_1, core_1;
    var config;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            config = {
                title: 'Tour of heroes'
            };
            browser_1.bootstrap(app_component_1.AppComponent, [hero_service_1.HeroService, core_1.provide('app.config', { useValue: config })]);
        }
    }
});
//# sourceMappingURL=boot.js.map