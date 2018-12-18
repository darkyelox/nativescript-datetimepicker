import { IDateTimePicker, Time, IDatePicker, ITimePicker } from './datetimepicker.common';
import { Color } from 'tns-core-modules/color';
import { topmost } from 'tns-core-modules/ui/frame';
import { Subject } from 'rxjs';
import { compareAsc, compareDesc, isSameMonth } from 'date-fns';

let dateSubject: Subject<Date>

export class DatetimePicker implements IDateTimePicker {

    private appViewController: UINavigationController

    constructor() {
        this.appViewController = (<UINavigationController>topmost().ios.controller)
    }

    setColor(color: Color) {

    }

    setTitlesTextColor(color: Color) {

    }

    setTextColor(color: Color) {

    }

    setBackgroundColor(color: Color) {

    }

    showYearPickerFirst(showYearFirst: boolean) {

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

    setMinTime(minTime: Time) {

    }

    setMaxTime(maxTime: Time) {

    }

}

export class DatePicker implements IDatePicker {

    private appViewController: UINavigationController
    private datePickerViewController: DatePickerModalViewController

    private dateSubject: Subject<Date>

    constructor() {
        this.appViewController = (<UINavigationController>topmost().ios.controller)
        this.datePickerViewController = (DatePickerModalViewController.alloc() as DatePickerModalViewController).initPicker()
    }

    setColor(color: Color) {
        this.datePickerViewController.setColor(color)
    }

    setTitlesTextColor(color: Color) {
        this.datePickerViewController.setTitlesTextColor(color)
    }

    setTextColor(color: Color) {
        this.datePickerViewController.setTextColor(color)
    }

    setBackgroundColor(color: Color) {
        this.datePickerViewController.setBackgroundColor(color)
    }

    showAsPicker(asPicker: boolean) {
        this.datePickerViewController.showAsPicker(asPicker)
    }

    autoDismiss(dismiss: boolean) {
        this.datePickerViewController.autoDismiss(dismiss)
    }

    setThemeDark(isThemeDark: boolean) {
        this.datePickerViewController.setThemeDark(isThemeDark)
    }

    setMinDate(minDate: Date) {
        this.datePickerViewController.setMinDate(minDate)
    }

    setMaxDate(maxData: Date) {
        this.datePickerViewController.setMaxDate(maxData)
    }

    showYearPickerFirst(showYearFirst: boolean) {
        this.datePickerViewController.showYearPickerFirst(showYearFirst)
    }

    public show(): Promise<Date> {
        dateSubject = new Subject()

        this.appViewController.presentModalViewControllerAnimated(this.datePickerViewController, true)

        return dateSubject
            .toPromise()
    }

}

export class TimePicker implements ITimePicker {
    setColor(color: Color) {

    }

    setTitlesTextColor(color: Color) {

    }

    setTextColor(color: Color) {

    }

    setBackgroundColor(color: Color) {

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

declare const UIEdgeInsetsMake

class DatePickerModalViewController extends UIViewController implements FSCalendarDataSource, FSCalendarDelegate, FSCalendarDelegateAppearance, MonthYearPickerViewDelegate {
    private calendar: FSCalendar
    private toggleMonthYearPickerView: UIView
    private doneButton: UIButton

    public embedController: EmbedController
    public monthYearPickerViewController: MonthYearPickerViewController

    private color: Color
    private titlesTextColor: Color
    private textColor: Color
    private backgroundColor: Color
    private _showAsPicker: boolean
    private _autoDismiss: boolean
    private darkTheme: boolean
    private minDate: Date
    private maxDate: Date
    private yearPickerFirst: boolean

    setColor(color: Color) {
        this.color = color
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    setTitlesTextColor(color: Color) {
        this.titlesTextColor = color
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    setTextColor(color: Color) {
        this.textColor = color
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    setBackgroundColor(color: Color) {
        this.backgroundColor = color
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    showAsPicker(asPicker: boolean) {
        this._showAsPicker = asPicker
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    autoDismiss(dismiss: boolean) {
        this._autoDismiss = dismiss
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    setThemeDark(isThemeDark: boolean) {
        this.darkTheme = isThemeDark
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    setMinDate(minDate: Date) {
        this.minDate = minDate
        this.calendar.reloadData()
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    setMaxDate(maxDate: Date) {
        this.maxDate = maxDate
        this.calendar.reloadData()
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    showYearPickerFirst(showYearFirst: boolean) {
        this.yearPickerFirst = showYearFirst
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    initPicker() {
        const self = super.init() as DatePickerModalViewController
        self.color = new Color('orange')
        self.textColor = new Color('black')
        self.titlesTextColor = new Color('cyan')
        self.backgroundColor = new Color('white')

        return self
    }

    loadView() {
        super.loadView()

        this.embedController = (EmbedController.new() as EmbedController).initWithRoot(this)

        const toggleMonthYearPickerTap = UITapGestureRecognizer.alloc().initWithTargetAction(this, 'onToggleMonthYearPickerView')

        const view: UIView = UIView.alloc().initWithFrame(UIScreen.mainScreen.bounds)
        view.backgroundColor = this.backgroundColor.ios
        this.view = view

        const calendar = FSCalendar.alloc().init()
        calendar.dataSource = this
        calendar.delegate = this
        calendar.appearance.headerTitleColor = this.titlesTextColor.ios
        calendar.appearance.weekdayTextColor = this.titlesTextColor.ios
        calendar.appearance.todaySelectionColor = this.color.ios
        calendar.appearance.selectionColor = this.color.ios
        calendar.appearance.titleSelectionColor = this.textColor.ios
        calendar.appearance.todayColor = this.color.ios
        view.addSubview(calendar);

        calendar.updateConstraints()

        const toggleMonthYearPickerView: UIView = UIView.alloc().init()
        toggleMonthYearPickerView.addGestureRecognizer(toggleMonthYearPickerTap)
        this.view.addSubview(toggleMonthYearPickerView)

        const doneButton = UIButton.alloc().init()
        doneButton.setTitleForState('ok', UIControlState.Normal)
        doneButton.setTitleColorForState(this.titlesTextColor.ios, UIControlState.Normal)
        doneButton.addTargetActionForControlEvents(this, 'onDone', UIControlEvents.TouchUpInside)
        this.view.addSubview(doneButton)

        this.calendar = calendar
        this.toggleMonthYearPickerView = toggleMonthYearPickerView
        this.doneButton = doneButton

        this.view.setNeedsUpdateConstraints()
    }

    viewDidLoad() {
        super.viewDidLoad()
    }

    viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()

        this.calendar.selectDate(new Date())
        this.calendar.appearance.headerTitleColor = this.titlesTextColor.ios
        this.calendar.appearance.weekdayTextColor = this.titlesTextColor.ios
        this.calendar.appearance.todaySelectionColor = this.color.ios
        this.calendar.appearance.selectionColor = this.color.ios
        this.calendar.appearance.titleSelectionColor = this.textColor.ios
        this.calendar.appearance.todayColor = this.color.ios

        this.doneButton.setTitleColorForState(this.titlesTextColor.ios, UIControlState.Normal)

        this.view.backgroundColor = this.backgroundColor.ios
    }

    viewDidAppear(animated: boolean) {
        super.viewDidAppear(animated)

        if (this.yearPickerFirst) {
            this.onToggleMonthYearPickerView(null)
        }
    }

    updateViewConstraints() {
        const padding = UIEdgeInsetsMake(10, 10, 10, 10);
        const viewSize = this.view.frame.size

        this.doneButton.mas_updateConstraints((maker: MASConstraintMaker) => {
            maker.width.equalTo()(50)
            maker.height.equalTo()(50)
            maker.bottom.equalTo()(this.view.mas_bottom)
            maker.right.equalTo()(this.view.mas_right)
        })

        if (this.monthYearPickerViewController != null) {
            const pickerSize = this.monthYearPickerViewController.view.frame.size

            this.calendar.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.top.equalTo()(pickerSize.height)
                maker.height.equalTo()(viewSize.height - pickerSize.height)
            })

            let height = (viewSize.height - pickerSize.height) - (this.calendar.preferredHeaderHeight + this.calendar.preferredWeekdayHeight)

            this.calendar.contentView.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.edges.equalTo()(this.calendar)
            })
            this.calendar.daysContainer.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.top.equalTo()(this.calendar.preferredHeaderHeight + this.calendar.preferredWeekdayHeight)
                maker.width.equalTo()(this.calendar.mas_width)
                maker.height.equalTo()(height)
            })
            this.calendar.collectionView.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.edges.equalTo()(this.calendar.daysContainer)
            })
            this.calendar.collectionViewLayout.invalidateLayout()
        } else {
            this.calendar.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.top.equalTo()(this.view.mas_top)
                maker.right.equalTo()(this.view.mas_right)
                maker.left.equalTo()(this.view.mas_left)
                maker.bottom.equalTo()(this.doneButton.mas_top)
            })

            let height = viewSize.height - (this.calendar.preferredHeaderHeight + this.calendar.preferredWeekdayHeight)

            this.calendar.contentView.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.edges.equalTo()(this.calendar)
            })

            this.calendar.daysContainer.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.top.equalTo()(Math.max(this.calendar.preferredHeaderHeight + this.calendar.preferredWeekdayHeight, 112.55))
                maker.width.equalTo()(this.calendar.mas_width)
                maker.height.equalTo()(height)
            })
            this.calendar.collectionView.mas_updateConstraints((maker: MASConstraintMaker) => {
                maker.edges.equalTo()(this.calendar.daysContainer)
            })
            this.calendar.collectionViewLayout.invalidateLayout()
        }

        this.toggleMonthYearPickerView.mas_updateConstraints((maker: MASConstraintMaker) => {
            maker.top.equalTo()(this.calendar.mas_top)
            maker.centerX.equalTo()(this.calendar.mas_centerX)
            maker.width.equalTo()(this.calendar.mas_width)
            maker.height.equalTo()(50)
        })

        super.updateViewConstraints()
    }

    public onToggleMonthYearPickerView(tapGesture: UITapGestureRecognizer) {
        if (!this.embedController.contains(this.monthYearPickerViewController)) {
            const controller = (MonthYearPickerViewController.new() as MonthYearPickerViewController)
            controller.setColor(this.color)
            controller.setTitlesTextColor(this.titlesTextColor)
            controller.setTextColor(this.textColor)
            controller.setBackgroundColor(this.backgroundColor)
            controller.setMinDate(this.minDate)
            controller.setMaxDate(this.maxDate)
            controller.delegate = this
            this.embedController.append(controller)
            this.monthYearPickerViewController = controller
        } else {
            this.removeMonthYearPickerView()
        }
        this.view.setNeedsLayout()
        this.view.setNeedsUpdateConstraints()
    }

    public onDone(tapGesture: UITapGestureRecognizer) {
        dateSubject.next(this.calendar.selectedDate)
        dateSubject.complete()

        this.dismissModalViewControllerAnimated(true)
    }

    public removeMonthYearPickerView() {
        this.embedController.remove(this.monthYearPickerViewController)
        this.monthYearPickerViewController = null
        this.view.setNeedsUpdateConstraints()
    }

    calendarDidSelectDateAtMonthPosition(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition) {
        if (this.autoDismiss) {
            this.onDone(null)
        }
    }

    calendarCurrentPageDidChange(calendar: FSCalendar) {
        calendar.reloadData()
    }

    calendarAppearanceTitleDefaultColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor {
        if(isSameMonth(calendar.currentPage, date)) {
            return this.textColor.ios as UIColor
        } else {
            return UIColor.grayColor
        }
    }

    minimumDateForCalendar(calendar: FSCalendar): Date {
        return this.minDate
    }

    maximumDateForCalendar(calendar: FSCalendar): Date {
        return this.maxDate
    }

    monthYearSelected(selectedDate: Date) {
        const currentDate = this.calendar.selectedDate
        if (currentDate) {
            selectedDate.setDate(currentDate.getDate())
        }
        
        let setDate = true
        if (this.minDate != undefined  && compareAsc(selectedDate, this.minDate) != 1) {
            setDate = false
        }

        if(setDate && this.maxDate != undefined && compareDesc(selectedDate, this.maxDate) != 1) {
            setDate = false
        }

        if (setDate) {
            this.calendar.selectDateScrollToDate(selectedDate, true)
        }
    }

    public static ObjCProtocols = [FSCalendarDelegate, FSCalendarDelegateAppearance, FSCalendarDataSource]

    public static ObjCExposedMethods = {
        onToggleMonthYearPickerView: { returns: interop.types.void, params: [UITapGestureRecognizer] },
        onDone: { returns: interop.types.void, params: [UITapGestureRecognizer] },
    }
}

interface MonthYearPickerViewDelegate extends NSObjectProtocol {
    monthYearSelected?(date: Date): void
}

class MonthYearPickerViewController extends UIViewController {
    private monthYearPicker: NTMonthYearPicker
    private doneButton: UIButton
    public delegate: MonthYearPickerViewDelegate

    private color: Color
    private titlesTextColor: Color
    private textColor: Color
    private backgroundColor: Color
    private minDate: Date
    private maxDate: Date

    public setColor(color: Color) {
        this.color = color
    }

    setTitlesTextColor(color: Color) {
        this.titlesTextColor = color
    }
    setTextColor(color: Color) {
        this.textColor = color
    }

    setBackgroundColor(color: Color) {
        this.backgroundColor = color
    }

    public setMinDate(date: Date) {
        this.minDate = date
    }

    public setMaxDate(date: Date) {
        this.maxDate = date
    }

    loadView() {
        const monthYearPicker = NTMonthYearPicker.alloc().init()
        const doneButton = UIButton.alloc().init()

        const monthYearPickerSize = monthYearPicker.sizeThatFits(CGSizeZero)

        const view: UIView = UIView.alloc().initWithFrame(CGRectMake(0, 0, UIScreen.mainScreen.bounds.size.width, monthYearPickerSize.height + 50))
        if (this.backgroundColor != undefined) {
            view.backgroundColor = this.backgroundColor.ios
        }
        this.view = view

        monthYearPicker.addTargetActionForControlEvents(this, 'onMonthYearPicked', UIControlEvents.ValueChanged)
        if (this.textColor != undefined) {
            // monthYearPicker.tintColor = this.textColor.ios
            monthYearPicker.selectionColor = this.textColor.ios
            // TODO: change the color of picker, need to do a fork of repository and add a color property
        }
        monthYearPicker.datePickerMode = NTMonthYearPickerMode.MonthAndYear;
        this.view.addSubview(monthYearPicker)

        doneButton.setTitleForState('ok', UIControlState.Normal)
        if (this.titlesTextColor != undefined) {
            doneButton.setTitleColorForState(this.titlesTextColor.ios, UIControlState.Normal)
        }
        doneButton.addTargetActionForControlEvents(this, 'onDone', UIControlEvents.TouchUpInside)
        this.view.addSubview(doneButton)

        this.monthYearPicker = monthYearPicker
        this.doneButton = doneButton

        this.view.setNeedsUpdateConstraints()
    }

    viewDidAppear(animated: boolean) {
        super.viewDidAppear(animated)

        this.monthYearPicker.minimumDate = this.minDate
        this.monthYearPicker.maximumDate = this.maxDate
        this.monthYearPicker.selectionColor = this.textColor.ios
    }

    updateViewConstraints() {
        const monthYearPickerSize = this.monthYearPicker.sizeThatFits(CGSizeZero)

        this.view.mas_updateConstraints((maker: MASConstraintMaker) => {
            maker.width.equalTo()(UIScreen.mainScreen.bounds.size.width)
            maker.height.equalTo()(monthYearPickerSize.height + 50)
        })

        this.doneButton.mas_updateConstraints((maker: MASConstraintMaker) => {
            maker.width.equalTo()(50)
            maker.height.equalTo()(50)
            maker.top.equalTo()(this.view.mas_top)
            maker.right.equalTo()(this.view.mas_right)
        })

        this.monthYearPicker.mas_updateConstraints((maker: MASConstraintMaker) => {
            maker.width.equalTo()(monthYearPickerSize.width)
            maker.height.equalTo()(monthYearPickerSize.height)
            maker.centerX.equalTo()(this.view.mas_centerX)
            maker.top.equalTo()(this.doneButton.mas_bottom)
        })

        super.updateViewConstraints()
    }

    public onMonthYearPicked(tapGesture: UITapGestureRecognizer) {
        if (this.delegate != null || this.delegate != undefined) {
            this.delegate.monthYearSelected(this.monthYearPicker.date)
        }
    }

    public onDone(tapGesture: UITapGestureRecognizer) {
        (this.parentViewController as DatePickerModalViewController).removeMonthYearPickerView()

    }

    public static ObjCExposedMethods = {
        onMonthYearPicked: { returns: interop.types.void, params: [UITapGestureRecognizer] },
        onDone: { returns: interop.types.void, params: [UITapGestureRecognizer] },
    }
}

class EmbedController extends UIViewController {
    private rootViewController: UIViewController
    private controllers: NSMutableArray<UIViewController>

    initWithRoot(root: UIViewController): EmbedController {
        const self = super.init()

        self.rootViewController = root
        self.controllers = NSMutableArray.alloc<UIViewController>().init()

        return self
    }

    append(controller: UIViewController) {
        if (!this.controllers.containsObject(controller)) {
            this.controllers.addObject(controller)
            this.rootViewController.addChildViewController(controller)
            this.rootViewController.view.addSubview(controller.view)
        }
    }

    remove(controller: UIViewController) {
        if (this.controllers.containsObject(controller)) {
            controller.view.removeFromSuperview()
            controller.removeFromParentViewController()
            this.controllers.removeObject(controller)
        }
    }

    contains(controller: UIViewController): boolean {
        return this.controllers.containsObject(controller)
    }

    deinit() {
        if (this.rootViewController != null) {

            for (let i = 0; i < this.controllers.count; i++) {
                const controller = this.controllers[i]
                controller.view.removeFromSuperview()
                controller.removeFromParentViewController()
            }
            this.controllers.removeAllObjects()
            this.rootViewController = null
        }
    }
}