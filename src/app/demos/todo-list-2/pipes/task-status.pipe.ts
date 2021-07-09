import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskstatus',
})
export class TaskStatusPipe implements PipeTransform {
  transform(status = ''): string {
    return status.split('_').reduce((text: string, word: string) => `${text} ${this.capitalize(word)}`, '').trim();
  }

  private capitalize(text: string): string {
    return text ? `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}` : '';
  }
}
