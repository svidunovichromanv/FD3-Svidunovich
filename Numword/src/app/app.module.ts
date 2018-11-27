import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HostComponent } from './host.component';
import { NumwordPipe } from './numword.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    HostComponent,
    NumwordPipe
  ],
  providers: [],
  bootstrap: [HostComponent]
})
export class AppModule { }
