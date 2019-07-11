import { IDateTimePicker, Time, IDatePicker, ITimePicker } from './datetimepicker.common';
import * as app from 'tns-core-modules/application';
import { Subject } from 'rxjs';
import { Color } from 'tns-core-modules/color';

declare const android
declare const com
declare const java

const DatePickerDialog = com.wdullaer.materialdatetimepicker.date.DatePickerDialog
const TimePickerDialog = com.wdullaer.materialdatetimepicker.time.TimePickerDialog
const Timepoint = com.wdullaer.materialdatetimepicker.time.Timepoint
const Calendar = java.util.Calendar

export class DatetimePicker implements IDateTimePicker {

    private datePicker
    private timePicker
    private dateSubject: Subject<Date>
    private selectedDate: Date

    constructor() {
        const datePickerListener = new DatePickerDialog.OnDateSetListener({
            onDateSet: (view, year, monthOfYear, dayOfMonth) => {
                this.selectedDate = new Date(year, monthOfYear, dayOfMonth)

                this.timePicker.show(app.android.startActivity.getFragmentManager(), 'TIME_PICKER_DIALOG')
                /* this.dateSubject.next(selectedDate)
                this.dateSubject.complete() */
            }
        })

        const timePickerListener = new TimePickerDialog.OnTimeSetListener({
            onTimeSet: (view, hour, minute, second) => {
                console.log(hour, minute)
                // const selectedTime = new Time(timepoint.getHour(), timepoint.getMinute())
                this.selectedDate.setHours(hour, minute, second)

                this.dateSubject.next(this.selectedDate)
                this.dateSubject.complete()
            }
        })

        this.datePicker = DatePickerDialog.newInstance(datePickerListener)
        this.timePicker = TimePickerDialog.newInstance(timePickerListener, false)
    }

    setColor(color: Color) {
        this.datePicker.setAccentColor(color.android)
        this.timePicker.setAccentColor(color.android)
    }

    setTitlesTextColor(color: Color) {
        // TODO: set for android
    }
    
    setTextColor(color: Color) {
        // TODO: set for android
    }

    setBackgroundColor(color: Color) {
        // TODO: set for android
    }

    showAsPicker(asPicker: boolean) {
        // TODO: show as a simplePicker
    }

    autoDismiss(dismiss: boolean) {
        this.datePicker.autoDismiss(dismiss)
    }

    setThemeDark(isThemeDark: boolean) {
        this.datePicker.setThemeDark(isThemeDark)
        this.timePicker.setThemeDark(isThemeDark)
    }

    setDate(date: Date) {
        // TODO:
    }

    setMinDate(minDate: Date) {
        const calendar = Calendar.getInstance()
        calendar.set(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())

        this.datePicker.setMinDate(calendar)
    }

    setMaxDate(maxData: Date) {
        const calendar = Calendar.getInstance()
        calendar.set(maxData.getFullYear(), maxData.getMonth(), maxData.getDate())

        this.datePicker.setMaxDate(calendar)
    }

    setMinTime(minTime: Time) {
        const timepoint = new Timepoint(minTime.hour, minTime.minute)

        this.timePicker.setMinTime(timepoint)
    }

    setMaxTime(maxTime: Time) {
        const timepoint = new Timepoint(maxTime.hour, maxTime.minute)

        this.timePicker.setMaxTime(timepoint)
    }

    showYearPickerFirst(showYearFirst: boolean) {
        this.datePicker.showYearPickerFirst(showYearFirst)
    }

    public show(date: Date): Promise<Date> {
        this.dateSubject = new Subject()

        this.datePicker.show(app.android.startActivity.getFragmentManager(), 'DATE_PICKER_DIALOG')

        return this.dateSubject
            .toPromise()
    }
}

export class DatePicker implements IDatePicker {
    private datePicker
    private dateSubject: Subject<Date>

    constructor() {
        const datePickerListener = new DatePickerDialog.OnDateSetListener({
            onDateSet: (view, year, monthOfYear, dayOfMonth) => {
                const selectedDate = new Date(year, monthOfYear, dayOfMonth)

                this.dateSubject.next(selectedDate)
                this.dateSubject.complete()
            }
        })

        this.datePicker = DatePickerDialog.newInstance(datePickerListener)
    }

    setColor(color: Color) {
        this.datePicker.setAccentColor(color.android)
    }

    setTitlesTextColor(color: Color) {
        // TODO: set for android
    }
    
    setTextColor(color: Color) {
        // TODO: set for android
    }

    setBackgroundColor(color: Color) {
        // TODO: set for android
    }

    showAsPicker(asPicker: boolean) {
        throw new Error("Method not implemented.");
    }

    autoDismiss(dismiss: boolean) {
        this.datePicker.autoDismiss(dismiss)
    }

    setThemeDark(isThemeDark: boolean) {
        this.datePicker.setThemeDark(isThemeDark)
    }

    setMinDate(minDate: Date) {
        const calendar = Calendar.getInstance()
        calendar.set(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())

        this.datePicker.setMinDate(calendar)
    }

    setMaxDate(maxData: Date) {
        const calendar = Calendar.getInstance()
        calendar.set(maxData.getFullYear(), maxData.getMonth(), maxData.getDate())

        this.datePicker.setMaxDate(calendar)
    }

    showYearPickerFirst(showYearFirst: boolean) {
        this.datePicker.showYearPickerFirst(showYearFirst)
    }


    public show(date: Date): Promise<Date> {
        this.dateSubject = new Subject()

        this.datePicker.show(app.android.startActivity.getFragmentManager(), 'DATE_PICKER_DIALOG')

        return this.dateSubject
            .toPromise()
    }
}

export class TimePicker implements ITimePicker {
    private timePicker
    private timeSubject: Subject<Time>

    constructor() {
        const timePickerListener = new TimePickerDialog.OnTimeSetListener({
            onTimeSet: (view, hour, minute, second) => {
                const selectedTime = new Time(hour, minute)

                this.timeSubject.next(selectedTime)
                this.timeSubject.complete()
            }
        })


        this.timePicker = TimePickerDialog.newInstance(timePickerListener, false)
    }

    setColor(color: Color) {
        this.timePicker.setAccentColor(color.android)
    }

    setTitlesTextColor(color: Color) {
        // TODO: set for android
    }
    
    setTextColor(color: Color) {
        // TODO: set for android
    }

    setBackgroundColor(color: Color) {
        // TODO: set for android
    }

    showAsPicker(asPicker: boolean) {
        // TODO:
    }

    autoDismiss(dismiss: boolean) {
        // TODO:
    }

    setThemeDark(isThemeDark: boolean) {
        this.timePicker.setThemeDark(isThemeDark)
    }

    setMinTime(minTime: Time) {
        const timepoint = new Timepoint(minTime.hour, minTime.minute)

        this.timePicker.setMinTime(timepoint)
    }

    setMaxTime(maxTime: Time) {
        const timepoint = new Timepoint(maxTime.hour, maxTime.minute)

        this.timePicker.setMaxTime(timepoint)
    }

    show(): Promise<Time> {
        this.timeSubject = new Subject()

        this.timePicker.show(app.android.startActivity.getFragmentManager(), 'TIME_PICKER_DIALOG')

        return this.timeSubject
            .toPromise()
    }
}