import { Component, Input } from '@angular/core';
import { DetailedActivity } from '../models/activity.model';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

@Component({
  selector: 'app-activity-selection',
  imports: [ActivityCardComponent],
  templateUrl: './activity-selection.component.html',
  styleUrl: './activity-selection.component.css'
})
export class ActivitySelectionComponent {
  @Input() activities: DetailedActivity[] = [];
}
