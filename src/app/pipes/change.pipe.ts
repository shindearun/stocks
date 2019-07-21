import { Pipe, PipeTransform } from '@angular/core';

import { StockInterface } from '../services/stocks.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Pipe({
  name: 'changePipe'
})
export class ChangePipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe, private percentPipe: PercentPipe) { }

  transform(stock: StockInterface, showPercent: boolean = true): any {
    let value = `${this.currencyPipe.transform(stock.change, 'USD', 'symbol', '.2')}`;
    if (showPercent) {
      value += ` (${this.percentPipe.transform(stock.changeInPercent, '.2')})`;
    }
    return value;
  }
}
