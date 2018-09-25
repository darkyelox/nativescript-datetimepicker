import { Observable } from 'tns-core-modules/data/observable';
import { Datetimepicker } from 'nativescript-datetimepicker';

export class HelloWorldModel extends Observable {
  public message: string;
  private datetimepicker: Datetimepicker;

  constructor() {
    super();

    this.datetimepicker = new Datetimepicker();
    this.message = this.datetimepicker.message;
  }
}
