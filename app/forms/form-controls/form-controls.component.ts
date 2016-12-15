import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';
import { Theme } from '../shared/theme.model';

@Component({
  selector: 'form-controls',
  templateUrl: 'app/forms/form-controls/form-controls.component.html',
  styleUrls: ['app/forms/form-controls/form-controls.component.css']
})

export class FormControlsComponent implements OnInit{
  public user: User;

  // settings form
  public genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' }
  ];

  public roles = [
      { value: 'admin', display: 'Administrator' },
      { value: 'guest', display: 'Guest' },
      { value: 'custom', display: 'Custom' }
  ];

  public themes: Theme[] = [
      { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
      { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
      { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
  ];

  public topics = [
      { value: 'game', display: 'Gaming' },
      { value: 'tech', display: 'Technology' },
      { value: 'life', display: 'Lifestyle' },
  ];

  public toggles = [
      { value: 'toggled', display: 'Toggled' },
      { value: 'untoggled', display: 'UnToggled' },
  ];

  // these settings will work when you initialize the component
  ngOnInit() {
    this.user = {
      name: '',
      gender: this.genders[0].value,
      role: null,
      theme: this.themes[0],
      isActive: false,
      toggle: this.toggles[1].value,
      topics: [this.topics[1].value]
    }
  }

  public save(isValid: boolean, f: User) {

  }
}