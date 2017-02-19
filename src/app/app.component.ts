import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
//import { AdditionCalculateWindow, AdditionCalculateWindowData } from './hero-search.component';
//import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

/*
  constructor(vcRef: ViewContainerRef, public modal: Modal) {
    modal.defaultViewContainer = vcRef;
  }

  onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }

  openCustom() {
    this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3));
  }
  */
}
