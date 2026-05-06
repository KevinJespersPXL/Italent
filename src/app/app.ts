import { Component, signal, inject, OnInit } from '@angular/core';
import { TabType } from './models/activity.model';
import { Activity, DetailedActivity } from './models/activity.model';
import { Profile } from './models/profile.model';
import { PortfolioService } from './services/portfolio.service';
import { HeaderComponent } from './header/header.component';
import { TabsNavComponent } from './tabs-nav/tabs-nav.component';
import { ActivityOverviewComponent } from './activity-overview/activity-overview.component';
import { ActivitySelectionComponent } from './activity-selection/activity-selection.component';
import { ReflectionComponent } from './reflection/reflection.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TabsNavComponent,
    ActivityOverviewComponent,
    ActivitySelectionComponent,
    ReflectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private portfolioService = inject(PortfolioService);
  
  protected readonly activeTab = signal<TabType>('overzicht');
  
  profile!: Profile;
  allActivities: Activity[] = [];
  detailedActivities: DetailedActivity[] = [];

  ngOnInit(): void {
    this.profile = this.portfolioService.getProfile();
    this.allActivities = this.portfolioService.getAllActivities();
    this.detailedActivities = this.portfolioService.getDetailedActivities();
  }

  setTab(tab: TabType): void {
    this.activeTab.set(tab);
  }
}
