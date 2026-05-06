import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TabType } from '../models/activity.model';

@Component({
  selector: 'app-tabs-nav',
  imports: [],
  templateUrl: './tabs-nav.component.html',
  styleUrl: './tabs-nav.component.css'
})
export class TabsNavComponent {
  @Input() activeTab!: TabType;
  @Output() tabChange = new EventEmitter<TabType>();

  onTabClick(tab: TabType): void {
    this.tabChange.emit(tab);
  }
}
