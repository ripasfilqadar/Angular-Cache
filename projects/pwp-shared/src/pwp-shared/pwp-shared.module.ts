import { SafeHtmlPipe } from './pipes/safe-html.pipe'
import { DatePipeCustom } from './pipes/date.pipe'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StriphtmlPipe } from './pipes/strip-html.pipe'
import { TruncatePipe } from './pipes/truncate.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatePipeCustom, SafeHtmlPipe, StriphtmlPipe, TruncatePipe],
  exports: [DatePipeCustom, SafeHtmlPipe, StriphtmlPipe, TruncatePipe],
})
export class PwpSharedModule { }
