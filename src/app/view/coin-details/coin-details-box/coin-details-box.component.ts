import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GetService } from '~/app/services/Get.service';
import { RouterExtensions } from '@nativescript/angular';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { CoinDetails } from '~/app/shared/interfaces/coin.interface';

// import * as utils from "tns-core-modules/utils/utils";

interface TransitionOptions {
  name?: string;
  duration?: number;
  curve?: string;
}

@Component({
  selector: 'app-coin-details-box',
  templateUrl: './coin-details-box.component.html',
  styleUrls: ['./coin-details-box.component.scss']
})
export class CoinDetailsBoxComponent implements OnInit, OnChanges {
  @Input() public coinData: CoinDetails;

  public gridCol: string = '';
  public description: string = '';

  public coinlinks: string[];

  public tags: Array<{ text: string; value: string; }>;

  constructor(
    private getService: GetService,
    private routerExtensions: RouterExtensions,
    private navigationHistory: NavHistoryProvider
  ) { }

  ngOnInit() { }

  ngOnChanges({ coinData }: SimpleChanges) {
    if (coinData && coinData.currentValue !== null) {
      const id: string = coinData.currentValue.id;
      this.getService.getCoinById(id).then((res) => {
        const resTemp = res.content.toJSON();
        this.description = resTemp.description;
        this.tags = resTemp.tags.map(tag => ({ text: tag.name, value: tag.id }));
        this.coinlinks = this.setSocialLinks(resTemp.links);
      });
    }
  }

  public tagSelected(tag): void {
    // navigate to tags list page
    this.navigateRoute('/tagsearch', 'slideBottom', 300, 'easeOut', tag);
  }

  public navigateRoute(route: string, name: string, duration: number, curve: string, tag: string): void {
    this.routerExtensions.navigate([route], {
      transition: this.transitionOptions(name, duration, curve),
      queryParams: {
        tag: tag
      }
    });
  }

  public transitionOptions(name: string, duration: number, curve: string): TransitionOptions {
    return {
      name: name,
      duration: duration,
      curve: curve
    };
  }

  private setSocialLinks(links): string[] {
    const keys: string[] = Object.keys(links);
    this.gridCol = this.generateColValues(keys.length, 'auto');
    if (keys.length === 0) {
      return;
    }

    const linkArr = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const linkList = links[key];

      if (linkList.length > 0) {
        linkArr.push({
          icon: this.linkTypes(key),
          url: linkList[0],
          type: key
        });
      }
    }
    return linkArr;
  }

  private linkTypes(type: string): string {
    switch (type) {
      case 'explorer':
        return String.fromCharCode(0xf1b3);
      case 'facebook':
        return String.fromCharCode(0xf09a);
      case 'reddit':
        return String.fromCharCode(0xf281);
      case 'source_code':
        return String.fromCharCode(0xf121);
      case 'website':
        return String.fromCharCode(0xf015);
      case 'youtube':
        return String.fromCharCode(0xf16a);
      case 'medium':
        console.log('medium');
        return String.fromCharCode(0xf23a);
      default:
        console.log('One should never see the cheese');
        return String.fromCharCode(0xf7ef);
    }
  }

  public checkLink(link: string) {
    if (link.search('youtube.com') === -1) {
       // This utility asks to open in mobile app, if not installed will open default browser
      // utils.openUrl(link);
    } else {
      this.goToUrl(link);
    }
  }

  private goToUrl(url: string): void {
    this.navigationHistory.previousNavigation = 'coindetails';
    this.routerExtensions.navigate(['/webview'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      },
      queryParams: { path: url }
    });
  }

  private generateColValues(numCols: number, colType: '*' | 'auto'): string {
    const colValueArr: string[] = [];
    if (numCols > 0) {
      let i = 0;
      while (i < numCols) {
        colValueArr.push(colType);
        i++;
      }
      return colValueArr.join(',');
    } else {
      return '';
    }
  }

}
