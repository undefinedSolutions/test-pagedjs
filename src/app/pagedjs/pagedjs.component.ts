import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Previewer } from "pagedjs";

@Component({
  selector: 'app-pagedjs',
  templateUrl: './pagedjs.component.html',
  styleUrls: ['./pagedjs.component.scss']
})
export class PagedjsComponent implements AfterViewInit {
  @ViewChild('content') content: ElementRef;
  @ViewChild('pdf') pdf: ElementRef;

  constructor() { }

  ngAfterViewInit() {
      console.log(this.content.nativeElement.innerHTML);
  }

  createPDF(): void {
    const previewer = new Previewer();
    previewer
      .preview(
        this.content.nativeElement.innerHTML,
        [],
        this.pdf.nativeElement
      )
      .then(flow => {
        console.log("preview rendered, total pages", flow.total, { flow });
      });
  }

}
