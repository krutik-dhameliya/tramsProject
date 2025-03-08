import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headerFormatter'
})
export class HeaderFormatterPipe implements PipeTransform {

  transform(column: string): string {
    const headers: { [key: string]: string } = {
      'destination': 'Final Destination',
      'scheduled': 'Scheduled Time',
      'expected': 'Expected Time',
      'state': 'State',
      'display': 'Time'
    };
    return headers[column] || column;
  }

}
