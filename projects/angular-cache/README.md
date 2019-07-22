# Angular Cache

angular cache is a library that help to cache data on client. the purpose is to reduced request count to api from angular application

## How To Install

    npm i angular-cache-rf

### How to Use

use `AngularCacheService` for using this library.

    export class SampleService{
      constructor(private angularCacheService: AngularCacheService){
    }

    cacheThisData(){
    this.angularCacheService.GetCache(Observable, key)
    }

`GetCache` will return data as observable. It has some options

*   ExpiresDate: time to expired
*   Location: place to save cache (localstorage or session storage

#### Expires Date

you can use `DateExtension` class to help you for set value for this option. `DateExtension`have some method

*   AddMinutes
*   Addsecond
*   AddHour
*   AddDay

#### Location

use `AngularCacheSessionType` to choose cache location