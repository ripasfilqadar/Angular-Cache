import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() offset = 0
  @Input() limit = 20
  @Input() totalData = 0
  @Input() currentPage = 1
  @Output() paginationClick = new EventEmitter()
  maxData = 9
  minData = 1
  constructor() { }

  ngOnInit() {
  }

  numbersPage(): number[] {
    const result: number[] = []
    const maxIndex = (this.totalData / this.limit) + 1

    if (this.currentPage > 4) {
      this.maxData = this.currentPage + 4
      this.minData = this.currentPage - 4
    } else {
      this.minData = 1
      this.maxData = 9
    }
    if (maxIndex < this.maxData) {
      this.maxData = maxIndex
    }

    for (let index = this.minData; index < this.maxData; index++) {
      result.push(index)
    }
    return result
  }

  onPaginationClick(page: number) {
    if (page < 1 || page > this.totalPages()) {
      return
    }
    this.currentPage = page
    this.paginationClick.emit(this.currentPage)

  }

  totalPages(): number {
    return Math.ceil(this.totalData / this.limit)
  }
}
