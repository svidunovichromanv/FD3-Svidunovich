import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HostComponent } from './host.component';
import { SpriteComponent } from '../sprite/sprite.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    HostComponent,
    SpriteComponent
  ],
  providers: [],
  bootstrap: [HostComponent]
})
export class AppModule { }
