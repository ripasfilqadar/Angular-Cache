# Pwp Shared Module

> Pwp Shared Module is collections of pipe for help you to build application ongular

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Install

```bash
npm i pwp-shared
```
## Pipes Libraries

### Usage
Import `PwpSharedModule` on your apps module


### List Of Pipe
- **DatePipeCustom**
convert date to string with month on bahasa, ex: `2019-02-03T09:01:32.607` became `03 Februari 2019`  for long date and `03 Feb 2019` for short date
- **TruncatePipe**
truncate your string, default is 150 char
- **StripHtmlPipe**
Remove html tag
- **SafeHtmlPipe**
For safe html(inner html)

## Pagination Module

Pagination component

### Usage
Import `PaginationModule`

### API

| Name        | Descripstion           |
| ------------- |:-------------:|
| @Input() offset(0): number      | Page Number or offset pagination |
| @Input() limit(20): number      | Limit for content pagination |
| @Input() totalData(0): number      | Total of data |
| @Input() currentPage(1): number      | Current Page |
| @Ouput() paginationClick(): void      | Triggered when page changing |


## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master