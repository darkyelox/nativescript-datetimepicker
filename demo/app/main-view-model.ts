import { Observable } from 'tns-core-modules/data/observable';
import { DatetimePicker } from 'nativescript-datetimepicker';

export class HelloWorldModel extends Observable {
  // public message: string;
  private datetimepicker: DatetimePicker;

  constructor() {
    super();

    this.datetimepicker = new DatetimePicker();
    // this.message = this.datetimepicker.message;
  }
}
