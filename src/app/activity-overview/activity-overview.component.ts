import { Component, Input } from '@angular/core';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'app-activity-overview',
  imports: [],
  templateUrl: './activity-overview.component.html',
  styleUrl: './activity-overview.component.css'
})
export class ActivityOverviewComponent {
  @Input() activities: Activity[] = [];
}
