import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1> Inline HTML from Component!</h1>
  // <p> This is a multi line inline template from Component!</p>
  // `,
  styleUrls: ['./app.component.scss']
  // styles: [`h1 {color: blue}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
