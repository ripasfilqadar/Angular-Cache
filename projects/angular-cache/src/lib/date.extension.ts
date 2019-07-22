export class DateExtension {
  static AddMinutes(minute: number, time: Date = new Date()): Date {
    let nowDate = time.getTime()
    nowDate += 1000 * 60 * minute
    return new Date(nowDate)
  }

  static AddSecond(second: number, time: Date = new Date()): Date {
    let nowDate = time.getTime()
    nowDate += 1000 * second
    return new Date(nowDate)
  }

  static AddHour(hour: number, time: Date = new Date()): Date {
    let nowDate = time.getTime()
    nowDate += 1000 * 60 * 60 * hour
    return new Date(nowDate)
  }

  static AddDay(day: number, time: Date = new Date()): Date {
    let nowDate = time.getTime()
    nowDate += 1000 * 60 * 60 * 24 * day
    return new Date(nowDate)
  }
}
