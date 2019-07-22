import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from '@angular/core'
@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  sanitized: DomSanitizer
  constructor(_sanitized: DomSanitizer) {
    this.sanitized = _sanitized
  }
  transform(value: any): any {
    return this.sanitized.bypassSecurityTrustHtml(value)
  }
}
