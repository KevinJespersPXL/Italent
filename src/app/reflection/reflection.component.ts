import { Component, inject, OnInit } from '@angular/core';
import { PXLFactor } from '../models/profile.model';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-reflection',
  imports: [],
  templateUrl: './reflection.component.html',
  styleUrl: './reflection.component.css'
})
export class ReflectionComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  
  reflectionData: any;
  pxlFactors: PXLFactor[] = [];

  ngOnInit(): void {
    this.reflectionData = this.portfolioService.getReflectionSections();
    this.pxlFactors = this.portfolioService.getPXLFactors();
  }
}
