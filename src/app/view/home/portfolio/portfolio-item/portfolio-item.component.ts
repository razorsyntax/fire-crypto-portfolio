import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioItem } from '~/app/shared/interfaces/getservice.interface';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  moduleId: module.id,
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioItemComponent implements OnInit, OnChanges {

  @Input() portfolioCoinItem: PortfolioItem;
  portfolioListItem: PortfolioItem;

  constructor(
    private routerExtensions: RouterExtensions,
    private navigationHistory: NavHistoryProvider,
    private coinDetails: DataStorageProvider
  ) { }

  ngOnInit() {
  }

  ngOnChanges({ portfolioCoinItem }: SimpleChanges) {
    if (portfolioCoinItem.currentValue) {
      this.portfolioListItem = portfolioCoinItem.currentValue;
    }
  }

  loadCoinDetailsPage(event): void {
    this.coinDetails.coinAPIDetails = {
      coin: event
    };
    this.navigationHistory.previousNavigation = 'portfolio';
    this.routerExtensions.navigate(['/coindetails'], {
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

}
