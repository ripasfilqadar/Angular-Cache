export class AngularCacheOptions {
  CacheType: AngularCacheSessionType
}

export enum AngularCacheSessionType {
  SessionStorage = 'session-storage',
  LocalStorage = 'local-storage'
}

