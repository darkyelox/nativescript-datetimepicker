import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import { DatetimePicker } from 'nativescript-datetimepicker';
import { Color } from 'tns-core-modules/color';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    // page.bindingContext = new HelloWorldModel();
}

export function onDateTap() {
    const dateTimePicker = new DatetimePicker()
    dateTimePicker.showYearPickerFirst(true)
    dateTimePicker.setThemeDark(true)
    dateTimePicker.setColor(new Color('red'))
    dateTimePicker.autoDismiss(true)

    dateTimePicker.show().then(selectedDate => console.log('you selected the date: ', selectedDate.toUTCString()))
}
