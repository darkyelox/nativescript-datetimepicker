import { IDatePicker, Time } from './datetimepicker.common';
import { Color } from 'tns-core-modules/color';
export declare class DatetimePicker implements IDatePicker {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  setColor(color: Color): void;
  showAsPicker(asPicker: boolean): void;
  autoDismiss(dismiss: boolean): void;
  setThemeDark(isThemeDark: boolean): void;
  setMinDate(minDate: Date): void;
  setMaxDate(maxData: Date): void;
  setMinTime(minTime: Time): void;
  setMaxTime(maxTime: Time): void;
  showYearPickerFirst(showYearFirst: boolean): void;
  show(): Promise<Date>
}
