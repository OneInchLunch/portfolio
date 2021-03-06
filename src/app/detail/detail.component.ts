import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerin = false;
  triggerout = false;

  @HostListener("document:scroll")
  scrollDownFunction(){
    if (document.body.scrollTop > (document.body.clientHeight/5) || document.documentElement.scrollTop > (document.body.clientHeight/5)) {
      this.triggerin = true;
      this.triggerout = false;
    } else {
      this.triggerin = false;
      this.triggerout = true;
    }
  }
}

