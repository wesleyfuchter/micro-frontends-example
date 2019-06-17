import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [PeopleComponent, AboutComponent, PersonComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
