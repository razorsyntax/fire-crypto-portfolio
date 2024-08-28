import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoinHeaderDetails } from '~/app/shared/interfaces/coin.interface';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';

@Component({
  moduleId: module.id,
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormHeaderComponent implements OnInit {

  @Input() coinHeaderDetails: CoinHeaderDetails;
  iconPath: string;

  constructor(private utilities: UtilitiesProvider) { }

  ngOnInit() {
    if (this.coinHeaderDetails) {
      this.createIconFilePath(this.coinHeaderDetails.coinSymbol);
    } else {
      this.coinHeaderDetails = {
        coinName: 'Failed To Load Coin',
        coinPrice: '0',
        coinSymbol: 'ERR'
      };
      this.createIconFilePath('---');
    }
  }

  createIconFilePath(symbol: string): void {
    this.iconPath = this.utilities.setCryptoIconPath(symbol);
  }

}
