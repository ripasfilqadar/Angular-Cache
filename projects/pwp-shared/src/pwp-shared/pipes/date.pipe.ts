import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'dateCustom'
})
export class DatePipeCustom implements PipeTransform {
  longMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  transform(value: string, args: string= ''): any {
    const date = new Date(value)
    if (args === 'short') {
      return `${date.getDate()} ${this.shortMonth[date.getMonth()]}  ${date.getFullYear()}`
    }
    return `${date.getDate()} ${this.longMonth[date.getMonth()]}  ${date.getFullYear()}`
  }

}
