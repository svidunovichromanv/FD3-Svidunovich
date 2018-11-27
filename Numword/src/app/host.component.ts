import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'host',
  templateUrl: 'host.component.html'
})
export class HostComponent {

  public apples:number;
  constructor (){
    this.apples=0;
  }
}
