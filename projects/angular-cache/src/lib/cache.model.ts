import { AngularCacheSessionType } from './angular-cache.model'
export class CacheModel<T> {
  Data: T
  ExpiredTime: Date
}


export class CacheOptions {
  ExpiresDate?: Date
  Location?: AngularCacheSessionType
}


