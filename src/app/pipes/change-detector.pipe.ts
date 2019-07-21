import { Pipe, PipeTransform } from '@angular/core';
// The pipe is commeneted from Appcomponent html file. just uncommeent to test.
@Pipe({
  name: 'changeDetector',
  pure: false
})
export class ChangeDetectorPipe implements PipeTransform {
  count = 0;
  transform(value: any, args?: any): any {
    this.count++;
    console.log(`Component change detection executed ${this.count} times`);
    return value;
  }
}
