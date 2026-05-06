import { Component, Input } from '@angular/core';
import { DetailedActivity } from '../models/activity.model';

@Component({
  selector: 'app-activity-card',
  imports: [],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
  @Input() activity!: DetailedActivity;
}
