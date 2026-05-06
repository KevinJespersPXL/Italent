import { Component, Input } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() profile!: Profile;
}
