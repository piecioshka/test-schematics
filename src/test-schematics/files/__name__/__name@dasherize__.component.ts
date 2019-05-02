import { Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>'
})
export class <%= classify(name) %>Component {

  constructor() {
    console.log('[*] <%= dasherize(name) %>-component created');
  }

}
