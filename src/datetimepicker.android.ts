import { IDateTimePicker, Time } from './datetimepicker.common';
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
                // const selectedTime = new Time(timepoint.getHour(), timepoint.getMinute())
                this.selectedDate.setUTCHours(hour, minute, second)

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

    setMinDate(minDate: Date) {
        const calendar = new Calendar()
        calendar.set(minDate.getUTCFullYear(), minDate.getUTCMonth(), minDate.getUTCDay())

        this.datePicker.setMinDate(calendar)
    }

    setMaxDate(maxData: Date) {
        const calendar = new Calendar()
        calendar.set(maxData.getUTCFullYear(), maxData.getUTCMonth(), maxData.getUTCDay())

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

    public show(): Promise<Date> {
        this.dateSubject = new Subject()

        this.datePicker.show(app.android.startActivity.getFragmentManager(), 'DATE_PICKER_DIALOG')

        return this.dateSubject
            .toPromise()
    }
}
