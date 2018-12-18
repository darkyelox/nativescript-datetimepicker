import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { DateTimeModel } from './main-view-model';
import { DatetimePicker, DatePicker, TimePicker } from 'nativescript-datetimepicker';
import { Color } from 'tns-core-modules/color';
import { View } from 'tns-core-modules/ui/core/view';
import { Time } from 'nativescript-datetimepicker/datetimepicker.common';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new DateTimeModel();
}

export function onDatetimeTap(args) {
    const model = (<View>args.object).page.bindingContext as DateTimeModel

    const dateTimePicker = new DatetimePicker()
    dateTimePicker.showYearPickerFirst(true)
    dateTimePicker.setThemeDark(true)
    dateTimePicker.setColor(new Color('green'))
    dateTimePicker.autoDismiss(true)

    dateTimePicker.show().then(selectedDate => {
        model.dateTime = selectedDate
        model.notifyPropertyChange('dateTime', selectedDate)
    })
}

export function onDateTap(args) {
    const model = (<View>args.object).page.bindingContext as DateTimeModel

    const datePicker = new DatePicker()
    datePicker.showYearPickerFirst(true)
    datePicker.setThemeDark(true)
    datePicker.setColor(new Color('blue'))
    datePicker.setTitlesTextColor(new Color('white'))
    datePicker.setTextColor(new Color('white'))
    datePicker.setBackgroundColor(new Color('cyan'))
    datePicker.autoDismiss(true)

    datePicker.show().then(selectedDate => {
        console.log(selectedDate)
        model.date = selectedDate
        model.notifyPropertyChange('date', selectedDate)
    })
}

export function onTimeTap(args) {
    const model = (<View>args.object).page.bindingContext as DateTimeModel

    const timePicker = new TimePicker()
    timePicker.setThemeDark(true)
    timePicker.setColor(new Color('cyan'))

    timePicker.show().then(selectedTime => {
        model.time = selectedTime
        model.notifyPropertyChange('time', selectedTime)
    })
}

export function onDatetimeMinMaxTap(args) {
    const model = (<View>args.object).page.bindingContext as DateTimeModel

    const dateTimePicker = new DatetimePicker()
    dateTimePicker.showYearPickerFirst(true)
    dateTimePicker.setThemeDark(true)
    dateTimePicker.setColor(new Color('green'))
    dateTimePicker.autoDismiss(true)

    dateTimePicker.setMinDate(new Date(2018, 6, 15))
    dateTimePicker.setMaxDate(new Date(2020, 6, 15))

    dateTimePicker.setMinTime(new Time(10,30))
    dateTimePicker.setMaxTime(new Time(22,30))

    dateTimePicker.show().then(selectedDate => {
        model.dateTimeMinMax = selectedDate
        model.notifyPropertyChange('dateTimeMinMax', selectedDate)
    })
}

export function onDateMinMaxTap(args) {
    const model = (<View>args.object).page.bindingContext as DateTimeModel

    const datePicker = new DatePicker()
    datePicker.showYearPickerFirst(true)
    datePicker.setThemeDark(true)
    datePicker.setColor(new Color('green'))
    datePicker.autoDismiss(true)

    datePicker.setMinDate(new Date(2018, 6, 15))
    datePicker.setMaxDate(new Date(2020, 6, 15))

    datePicker.show().then(selectedDate => {
        model.date = selectedDate
        model.notifyPropertyChange('dateMinMax', selectedDate)
    })
}

export function onTimeMinMaxTap(args) {
    const model = (<View>args.object).page.bindingContext as DateTimeModel

    const timePicker = new TimePicker()
    timePicker.setThemeDark(true)
    timePicker.setColor(new Color('cyan'))

    timePicker.setMinTime(new Time(10,30))
    timePicker.setMaxTime(new Time(22,30))

    timePicker.show().then(selectedTime => {
        model.time = selectedTime
        model.notifyPropertyChange('timeMinMax', selectedTime)
    })
}