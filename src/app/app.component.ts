import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
	// link to the HTML template
  templateUrl: './app.component.html',
	
})
export class AppComponent  { 
	title = 'Angular';
	
	hero: Hero = {
  	id: 1,
  	name: 'Windstorm'
	};
	
}
