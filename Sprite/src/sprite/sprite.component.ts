import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',/*
  styleUrls: ['src/sprite/sprite.component.css']*/
})
export class SpriteComponent {

  @Input("url")
  url:string;

  @Input("offsetX")
  offsetX:number;

  @Input("offsetY")
  offsetY:number;

  @Input("width")
  width:number;

  @Input("height")
  height:number;

  @Output("slide")
  public slide:EventEmitter<void>=new EventEmitter<void>();

}
