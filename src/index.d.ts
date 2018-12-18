import { IDatePicker, Time, ITimePicker, IDateTimePicker } from './datetimepicker.common';
import { Color } from 'tns-core-modules/color';

export declare class DatetimePicker implements IDateTimePicker {
  setColor(color: Color): void;
  setTitlesTextColor(color: Color)
  setTextColor(color: Color)
  setBackgroundColor(color: Color)
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

export declare class DatePicker implements IDatePicker {
  setColor(color: Color): void;
  setTitlesTextColor(color: Color)
  setTextColor(color: Color)
  setBackgroundColor(color: Color)
  showAsPicker(asPicker: boolean): void;
  autoDismiss(dismiss: boolean): void;
  setThemeDark(isThemeDark: boolean): void;
  setMinDate(minDate: Date): void;
  setMaxDate(maxData: Date): void;
  showYearPickerFirst(showYearFirst: boolean): void;
  show(): Promise<Date>
}

export declare class TimePicker implements ITimePicker {
  setColor(color: Color): void;
  setTitlesTextColor(color: Color)
  setTextColor(color: Color)
  setBackgroundColor(color: Color)
  showAsPicker(asPicker: boolean): void;
  autoDismiss(dismiss: boolean): void;
  setThemeDark(isThemeDark: boolean): void;
  setMinTime(minTime: Time): void;
  setMaxTime(maxTime: Time): void;
  show(): Promise<Time>
}