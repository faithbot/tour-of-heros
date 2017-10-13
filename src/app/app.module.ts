import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NgModel is part of FormsModel
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
		// Angular imports
		BrowserModule,
		FormsModule
								],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
