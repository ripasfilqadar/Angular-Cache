import { AngularCacheSessionType } from './angular-cache.model'
import { DateExtension } from './date.extension'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CacheModel, CacheOptions } from './cache.model'
import { isNullOrUndefined } from 'util'

const _AngularCacheKeyDefault = 'angular-cache-default-key'


@Injectable({
  providedIn: 'root'
})
export class AngularCacheService {

  private cacheOnLocalStorage: { [key: string]: CacheModel<any> } = {}
  private cacheOnSessionStorage: { [key: string]: CacheModel<any> } = {}
  private keyValue: string
  private options: CacheOptions

  constructor() {
    this.cacheOnLocalStorage = JSON.parse(localStorage.getItem(_AngularCacheKeyDefault)) || {}
    this.cacheOnSessionStorage = JSON.parse(sessionStorage.getItem(_AngularCacheKeyDefault)) || {}
  }

  GetCache<T>(dataObs: Observable<T>, keyValue: string, options: CacheOptions = {}): Observable<T> {
    this.keyValue = keyValue
    this.options = options
    if (isNullOrUndefined(this.options.ExpiresDate)) {
      this.options.ExpiresDate = DateExtension.AddHour(1)
    }
    if (isNullOrUndefined(this.options.Location)) {
      this.options.Location = AngularCacheSessionType.SessionStorage
    }

    return new Observable((obs) => {
      const oldData = this.getData<T>()
      if (isNullOrUndefined(oldData)) {
        dataObs.subscribe((resp) => {
          this.SetData(resp)
          obs.next(resp)
          obs.complete()
        })

      } else {
        if (this.isExpired(oldData.ExpiredTime)) {
          dataObs.subscribe((resp) => {
            this.SetData(resp)
            obs.next(resp)
            obs.complete()
          })
        } else {
          const fixData: T = oldData.Data
          obs.next(fixData)
          obs.complete()
        }
      }
    })
  }

  Set<T>(data: T, keyValue: string, options: CacheOptions): boolean {
    try {
      this.keyValue = keyValue
      this.options = options
      this.SetData<T>(data)
      return true
    } catch (error) {

    }
  }

  isExpired(date: Date): boolean {
    if (typeof (date) === 'string') {
      date = new Date(date)
    }
    return Date.now() > date.getTime()
  }

  deleteAllCache() {
    this.cacheOnLocalStorage = {}
    this.cacheOnSessionStorage = {}
    sessionStorage.removeItem(_AngularCacheKeyDefault)
    localStorage.removeItem(_AngularCacheKeyDefault)
  }



  private SetData<T>(Data: T) {
    const cacheModel: CacheModel<T> = {
      Data: Data,
      ExpiredTime: this.options.ExpiresDate || DateExtension.AddHour(1)
    }
    if (this.options.Location === AngularCacheSessionType.LocalStorage) {
      this.cacheOnLocalStorage[this.keyValue] = cacheModel
      localStorage.setItem(_AngularCacheKeyDefault, JSON.stringify(this.cacheOnLocalStorage))
    } else {
      this.cacheOnLocalStorage[this.keyValue] = cacheModel
      sessionStorage.setItem(_AngularCacheKeyDefault, JSON.stringify(this.cacheOnSessionStorage))
    }

  }

  private getData<T>(): CacheModel<T> {
    if (this.options.Location === AngularCacheSessionType.LocalStorage) {
      return this.cacheOnLocalStorage[this.keyValue]
    } else {
      return this.cacheOnSessionStorage[this.keyValue]
    }
  }
}
