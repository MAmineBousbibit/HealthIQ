import {Component, ElementRef, Input} from '@angular/core';
import {User} from "../_models/user";

@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.css']
})
export class PdfTemplateComponent {

  // @ts-ignore
  @Input() user: User;
  constructor(public elementRef: ElementRef) {}


}
