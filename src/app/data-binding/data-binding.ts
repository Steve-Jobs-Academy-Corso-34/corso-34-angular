import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule], // <-- Remember to add CommonModule if you use common directives in your template
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  text = 'testo statico da variabile';

  imgLogo = '/logo.png';

  getText() {
    return 'testo da getText()';
  }

  getDynamicText(text: string) {
    return 'dynamic text: ' + text;
  }

  sum(a: number, b: number) {
    return a + b;
  }

  trackByUserId(_: number, user: any) {
    return user.id;
  }

  get imgLogoSrc() {
    return this.imgLogo;
  }

  set imgLogoSrc(value: string) {
    this.imgLogo = value;
  }

  //imgLogoSrc //Legge
  //imgLogoSrc('/new-logo.png'); //Scrive

  //getImgLogoSrc() //Legge
  //setImgLogoSrc('/new-logo.png') //Scrive

  onClick() {
    this.imgLogo = '/path-inesistente.png';
  }

  onReset() {
    this.imgLogo = '/logo.png';
  }
}
