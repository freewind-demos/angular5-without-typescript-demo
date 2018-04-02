var HelloApp = ng.core
    .Component({
        selector: 'hello-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    .Class({
        constructor: function () {
        },
        title : 'Angular Hello World Demo'
    });

document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(HelloApp);
});