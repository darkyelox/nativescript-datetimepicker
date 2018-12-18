import { Observable } from 'tns-core-modules/data/observable';
import { Color } from 'tns-core-modules/color';

export interface ICommon {
  setColor(color: Color)
  setTitlesTextColor(color: Color)
  setTextColor(color: Color)
  setBackgroundColor(color: Color)
  showAsPicker(asPicker: boolean)
  autoDismiss(dismiss: boolean)
  setThemeDark(isThemeDark: boolean)
}

export interface IDatePicker extends ICommon {
  setMinDate(minDate: Date)
  setMaxDate(maxData: Date)
  showYearPickerFirst(showYearFirst: boolean)
}

export interface ITimePicker extends ICommon {
  setMinTime(minTime: Time)
  setMaxTime(maxTime: Time)
}

export interface IDateTimePicker extends IDatePicker, ITimePicker {

}

export class Time {
  constructor(public hour: number, public minute: number) {

  }

  public isAM() {
    return this.hour < 12;
  }

  public isPM() {
    return !this.isAM();
  }

  public asAM() {
    return this.hour < 12 ? this.hour % 12 : this.hour
  }

  public asPM() {
    return this.hour >= 12 ? (this.hour + 12) % 24 : this.hour
  }

  toDate(): Date {
    const date = new Date()
    date.setUTCHours(this.hour, this.minute)

    return date
  }

  private leadingZero(number: number) {
    return ("00" + number).substr(-2,2)
  }

  toString(): string {
    return `${this.isAM() ? this.leadingZero(this.asAM()) : this.leadingZero(this.asPM()) }:${this.leadingZero(this.minute)} ${ this.isAM() ? 'AM' : 'PM'}`
  }
}