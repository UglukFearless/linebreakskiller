import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'Line breaks killer';
    text = '';

    textOnChange(newValue: string): void {
        this.text = newValue.replace(/\r|\n/g, ' ').replace(/ {2,}/g, ' ');
    }

    onKeydown(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }
}
