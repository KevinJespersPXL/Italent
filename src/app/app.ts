import { Component, signal } from '@angular/core';

type Tab = 'overzicht' | 'selectie' | 'eindreflectie';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly activeTab = signal<Tab>('overzicht');

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }
}
