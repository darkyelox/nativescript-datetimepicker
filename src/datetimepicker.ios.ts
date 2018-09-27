import { IDateTimePicker, Time, IDatePicker, ITimePicker } from './datetimepicker.common';
import { Color } from 'tns-core-modules/color';

export class DatetimePicker implements IDateTimePicker {
    
    setColor(color: Color) {

    }

    showYearPickerFirst(showYearFirst: boolean){
        
    }

    showAsPicker(asPicker: boolean){
        
    }

    autoDismiss(dismiss: boolean){
        
    }

    setThemeDark(isThemeDark: boolean) {

    }

    setMinDate(minDate: Date){
        
    }

    setMaxDate(maxData: Date){
        
    }

    setMinTime(minTime: Time) {

    }

    setMaxTime(maxTime: Time) {

    }
    
}

export class DatePicker implements IDatePicker {

    setColor(color: Color) {
        
    }

    showAsPicker(asPicker: boolean) {
        
    }

    autoDismiss(dismiss: boolean) {
        
    }

    setThemeDark(isThemeDark: boolean) {
        
    }

    setMinDate(minDate: Date) {
        
    }    
    
    setMaxDate(maxData: Date) {
        
    }

    showYearPickerFirst(showYearFirst: boolean) {
        
    }
    
}

export class TimePicker implements ITimePicker {
    setColor(color: Color) {
        
    }

    showAsPicker(asPicker: boolean) {
        
    }

    autoDismiss(dismiss: boolean) {
        
    }

    setThemeDark(isThemeDark: boolean) {
        
    }

    setMinTime(minTime: Time) {
        
    }
    
    setMaxTime(maxTime: Time) {
        
    }

}