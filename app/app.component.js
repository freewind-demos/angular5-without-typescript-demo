const AppComponent = function () {
    this.title = 'Angular Hello World Demo'
};

AppComponent.annotations = [new ng.core.Component({
    selector: 'hello-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})];