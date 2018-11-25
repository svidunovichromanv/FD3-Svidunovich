import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'host',
  templateUrl: 'host.component.html'
})
export class HostComponent {

  private url:string="http://fe.it-academy.by/Examples/cards2.png";

  private width:number=145;

  private height:number=195;

  private offsetX:number=0;

  private offsetY:number=0;

  getURL():string {
    return this.url;
  }

  getWidth():number {
    return this.width;
  }

  getHeight():number {
    return this.height;
  }

  getOffsetX():number {
    return this.offsetX;
  }

  getOffsetY():number {
    return this.offsetY;
  }

  slide():void {
    this.offsetX=this.offsetX-143.5;
    this.offsetY=this.offsetY-193.7;
  }
}
