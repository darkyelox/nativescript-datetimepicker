import { Observable } from 'tns-core-modules/data/observable';
import { DatetimePicker } from 'nativescript-datetimepicker';
import { Time } from 'nativescript-datetimepicker/datetimepicker.common';

export class DateTimeModel extends Observable {
  public dateTime: Date
  public date: Date
  public time: Time
  public dateTimeMinMax: Date
  public dateMinMax: Date
  public timeMinMax: Time

  constructor() {
    super();
  }
}
