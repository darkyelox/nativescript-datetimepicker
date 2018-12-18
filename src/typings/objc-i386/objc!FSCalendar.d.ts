
declare var CGPointInfinity: CGPoint;

declare var CGSizeAutomatic: CGSize;

declare class FSCalendar extends UIView {

	static alloc(): FSCalendar; // inherited from NSObject

	static appearance(): FSCalendar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendar; // inherited from UIAppearance

	static new(): FSCalendar; // inherited from NSObject

	adjustsBoundingRectWhenChangingMonths: boolean;

	allowsMultipleSelection: boolean;

	allowsSelection: boolean;

	readonly appearance: FSCalendarAppearance;

	readonly bottomBorder: UIView;

	readonly calculator: FSCalendarCalculator;

	calendarHeaderView: FSCalendarHeaderView;

	calendarWeekdayView: FSCalendarWeekdayView;

	readonly collectionView: FSCalendarCollectionView;

	readonly collectionViewLayout: FSCalendarCollectionViewLayout;

	readonly contentView: UIView;

	currentPage: Date;

	dataSource: FSCalendarDataSource;

	readonly daysContainer: UIView;

	delegate: FSCalendarDelegate;

	firstWeekday: number;

	readonly floatingMode: boolean;

	readonly formatter: NSDateFormatter;

	readonly gregorian: NSCalendar;

	headerHeight: number;

	locale: NSLocale;

	readonly maximumDate: Date;

	readonly minimumDate: Date;

	needsAdjustingViewFrame: boolean;

	pagingEnabled: boolean;

	placeholderType: FSCalendarPlaceholderType;

	readonly preferredHeaderHeight: number;

	readonly preferredWeekdayHeight: number;

	rowHeight: number;

	scope: FSCalendarScope;

	readonly scopeGesture: UIPanGestureRecognizer;

	scrollDirection: FSCalendarScrollDirection;

	scrollEnabled: boolean;

	readonly selectedDate: Date;

	readonly selectedDates: NSArray<Date>;

	readonly swipeToChooseGesture: UILongPressGestureRecognizer;

	today: Date;

	readonly transitionCoordinator: FSCalendarTransitionCoordinator;

	readonly visibleStickyHeaders: NSArray<any>;

	weekdayHeight: number;

	adjustMonthPosition(): void;

	cellForDateAtMonthPosition(date: Date, position: FSCalendarMonthPosition): FSCalendarCell;

	configureAppearance(): void;

	dateForCell(cell: FSCalendarCell): Date;

	dequeueReusableCellWithIdentifierForDateAtMonthPosition(identifier: string, date: Date, position: FSCalendarMonthPosition): FSCalendarCell;

	deselectDate(date: Date): void;

	frameForDate(date: Date): CGRect;

	handleScopeGesture(sender: UIPanGestureRecognizer): void;

	invalidateHeaders(): void;

	isDateInRange(date: Date): boolean;

	isPageInRange(page: Date): boolean;

	monthPositionForCell(cell: FSCalendarCell): FSCalendarMonthPosition;

	registerClassForCellReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	reloadData(): void;

	selectDate(date: Date): void;

	selectDateScrollToDate(date: Date, scrollToDate: boolean): void;

	setCurrentPageAnimated(currentPage: Date, animated: boolean): void;

	setScopeAnimated(scope: FSCalendarScope, animated: boolean): void;

	sizeThatFitsScope(size: CGSize, scope: FSCalendarScope): CGSize;

	visibleCells(): NSArray<FSCalendarCell>;
}

declare class FSCalendarAppearance extends NSObject {

	static alloc(): FSCalendarAppearance; // inherited from NSObject

	static new(): FSCalendarAppearance; // inherited from NSObject

	readonly backgroundColors: NSDictionary<any, any>;

	readonly borderColors: NSDictionary<any, any>;

	borderDefaultColor: UIColor;

	borderRadius: number;

	borderSelectionColor: UIColor;

	calendar: FSCalendar;

	caseOptions: FSCalendarCaseOptions;

	eventDefaultColor: UIColor;

	eventOffset: CGPoint;

	eventSelectionColor: UIColor;

	headerDateFormat: string;

	headerMinimumDissolvedAlpha: number;

	headerTitleColor: UIColor;

	headerTitleFont: UIFont;

	imageOffset: CGPoint;

	selectionColor: UIColor;

	separators: FSCalendarSeparators;

	readonly subtitleColors: NSDictionary<any, any>;

	subtitleDefaultColor: UIColor;

	subtitleFont: UIFont;

	subtitleOffset: CGPoint;

	subtitlePlaceholderColor: UIColor;

	subtitleSelectionColor: UIColor;

	subtitleTodayColor: UIColor;

	subtitleWeekendColor: UIColor;

	readonly titleColors: NSDictionary<any, any>;

	titleDefaultColor: UIColor;

	titleFont: UIFont;

	titleOffset: CGPoint;

	titlePlaceholderColor: UIColor;

	titleSelectionColor: UIColor;

	titleTodayColor: UIColor;

	titleWeekendColor: UIColor;

	todayColor: UIColor;

	todaySelectionColor: UIColor;

	weekdayFont: UIFont;

	weekdayTextColor: UIColor;
}

declare var FSCalendarAutomaticDimension: number;

declare class FSCalendarBlankCell extends UICollectionViewCell {

	static alloc(): FSCalendarBlankCell; // inherited from NSObject

	static appearance(): FSCalendarBlankCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarBlankCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarBlankCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarBlankCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarBlankCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarBlankCell; // inherited from UIAppearance

	static new(): FSCalendarBlankCell; // inherited from NSObject

	configureAppearance(): void;
}

declare var FSCalendarBlankCellReuseIdentifier: string;

declare class FSCalendarCalculator extends NSObject {

	static alloc(): FSCalendarCalculator; // inherited from NSObject

	static new(): FSCalendarCalculator; // inherited from NSObject

	calendar: FSCalendar;

	readonly numberOfSections: number;

	constructor(o: { calendar: FSCalendar; });

	coordinateForIndexPath(indexPath: NSIndexPath): FSCalendarCoordinate;

	dateForIndexPath(indexPath: NSIndexPath): Date;

	dateForIndexPathScope(indexPath: NSIndexPath, scope: FSCalendarScope): Date;

	indexPathForDate(date: Date): NSIndexPath;

	indexPathForDateAtMonthPosition(date: Date, position: FSCalendarMonthPosition): NSIndexPath;

	indexPathForDateAtMonthPositionScope(date: Date, position: FSCalendarMonthPosition, scope: FSCalendarScope): NSIndexPath;

	indexPathForDateScope(date: Date, scope: FSCalendarScope): NSIndexPath;

	initWithCalendar(calendar: FSCalendar): this;

	monthForSection(section: number): Date;

	monthHeadForSection(section: number): Date;

	monthPositionForIndexPath(indexPath: NSIndexPath): FSCalendarMonthPosition;

	numberOfHeadPlaceholdersForMonth(month: Date): number;

	numberOfRowsInMonth(month: Date): number;

	numberOfRowsInSection(section: number): number;

	pageForSection(section: number): Date;

	reloadSections(): void;

	safeDateForDate(date: Date): Date;

	weekForSection(section: number): Date;
}

declare const enum FSCalendarCaseOptions {

	HeaderUsesDefaultCase = 0,

	HeaderUsesUpperCase = 1,

	WeekdayUsesDefaultCase = 0,

	WeekdayUsesUpperCase = 16,

	WeekdayUsesSingleUpperCase = 32
}

declare class FSCalendarCell extends UICollectionViewCell {

	static alloc(): FSCalendarCell; // inherited from NSObject

	static appearance(): FSCalendarCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarCell; // inherited from UIAppearance

	static new(): FSCalendarCell; // inherited from NSObject

	appearance: FSCalendarAppearance;

	calendar: FSCalendar;

	dateIsToday: boolean;

	eventIndicator: FSCalendarEventIndicator;

	image: UIImage;

	imageView: UIImageView;

	monthPosition: FSCalendarMonthPosition;

	numberOfEvents: number;

	placeholder: boolean;

	preferredBorderDefaultColor: UIColor;

	preferredBorderRadius: number;

	preferredBorderSelectionColor: UIColor;

	preferredEventDefaultColors: NSArray<UIColor>;

	preferredEventOffset: CGPoint;

	preferredEventSelectionColors: NSArray<UIColor>;

	preferredFillDefaultColor: UIColor;

	preferredFillSelectionColor: UIColor;

	preferredImageOffset: CGPoint;

	preferredSubtitleDefaultColor: UIColor;

	preferredSubtitleOffset: CGPoint;

	preferredSubtitleSelectionColor: UIColor;

	preferredTitleDefaultColor: UIColor;

	preferredTitleOffset: CGPoint;

	preferredTitleSelectionColor: UIColor;

	shapeLayer: CAShapeLayer;

	subtitle: string;

	subtitleLabel: UILabel;

	titleLabel: UILabel;

	weekend: boolean;

	colorForCurrentStateInDictionary(dictionary: NSDictionary<any, any>): UIColor;

	configureAppearance(): void;

	performSelecting(): void;
}

declare const enum FSCalendarCellState {

	Normal = 0,

	Selected = 1,

	Placeholder = 2,

	Disabled = 4,

	Today = 8,

	Weekend = 16,

	TodaySelected = 9
}

declare class FSCalendarCollectionView extends UICollectionView {

	static alloc(): FSCalendarCollectionView; // inherited from NSObject

	static appearance(): FSCalendarCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarCollectionView; // inherited from UIAppearance

	static new(): FSCalendarCollectionView; // inherited from NSObject

	internalDelegate: FSCalendarCollectionViewInternalDelegate;
}

interface FSCalendarCollectionViewInternalDelegate extends UICollectionViewDelegate {

	collectionViewDidFinishLayoutSubviews?(collectionView: FSCalendarCollectionView): void;
}
declare var FSCalendarCollectionViewInternalDelegate: {

	prototype: FSCalendarCollectionViewInternalDelegate;
};

declare class FSCalendarCollectionViewLayout extends UICollectionViewLayout {

	static alloc(): FSCalendarCollectionViewLayout; // inherited from NSObject

	static new(): FSCalendarCollectionViewLayout; // inherited from NSObject

	calendar: FSCalendar;

	readonly estimatedItemSize: CGSize;

	scrollDirection: UICollectionViewScrollDirection;

	sectionInsets: UIEdgeInsets;
}

interface FSCalendarCoordinate {
	row: number;
	column: number;
}
declare var FSCalendarCoordinate: interop.StructType<FSCalendarCoordinate>;

interface FSCalendarDataSource extends NSObjectProtocol {

	calendarCellForDateAtMonthPosition?(calendar: FSCalendar, date: Date, position: FSCalendarMonthPosition): FSCalendarCell;

	calendarImageForDate?(calendar: FSCalendar, date: Date): UIImage;

	calendarNumberOfEventsForDate?(calendar: FSCalendar, date: Date): number;

	calendarSubtitleForDate?(calendar: FSCalendar, date: Date): string;

	calendarTitleForDate?(calendar: FSCalendar, date: Date): string;

	maximumDateForCalendar?(calendar: FSCalendar): Date;

	minimumDateForCalendar?(calendar: FSCalendar): Date;
}
declare var FSCalendarDataSource: {

	prototype: FSCalendarDataSource;
};

declare var FSCalendarDefaultBounceAnimationDuration: number;

declare var FSCalendarDefaultCellReuseIdentifier: string;

declare var FSCalendarDefaultHourComponent: number;

interface FSCalendarDelegate extends NSObjectProtocol {

	calendarBoundingRectWillChangeAnimated?(calendar: FSCalendar, bounds: CGRect, animated: boolean): void;

	calendarCurrentPageDidChange?(calendar: FSCalendar): void;

	calendarDidDeselectDateAtMonthPosition?(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): void;

	calendarDidSelectDateAtMonthPosition?(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): void;

	calendarShouldDeselectDateAtMonthPosition?(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): boolean;

	calendarShouldSelectDateAtMonthPosition?(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): boolean;

	calendarWillDisplayCellForDateAtMonthPosition?(calendar: FSCalendar, cell: FSCalendarCell, date: Date, monthPosition: FSCalendarMonthPosition): void;
}
declare var FSCalendarDelegate: {

	prototype: FSCalendarDelegate;
};

interface FSCalendarDelegateAppearance extends FSCalendarDelegate {

	calendarAppearanceBorderDefaultColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceBorderRadiusForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): number;

	calendarAppearanceBorderSelectionColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceEventDefaultColorsForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): NSArray<UIColor>;

	calendarAppearanceEventOffsetForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceEventSelectionColorsForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): NSArray<UIColor>;

	calendarAppearanceFillDefaultColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceFillSelectionColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceImageOffsetForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceSubtitleDefaultColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceSubtitleOffsetForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceSubtitleSelectionColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceTitleDefaultColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceTitleOffsetForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceTitleSelectionColorForDate?(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;
}
declare var FSCalendarDelegateAppearance: {

	prototype: FSCalendarDelegateAppearance;
};

declare class FSCalendarDelegationFactory extends NSObject {

	static alloc(): FSCalendarDelegationFactory; // inherited from NSObject

	static dataSourceProxy(): FSCalendarDelegationProxy;

	static delegateProxy(): FSCalendarDelegationProxy;

	static new(): FSCalendarDelegationFactory; // inherited from NSObject
}

declare class FSCalendarDelegationProxy extends NSProxy implements FSCalendarDataSource, FSCalendarDelegate, FSCalendarDelegateAppearance {

	static alloc(): FSCalendarDelegationProxy; // inherited from NSProxy

	delegation: any;

	deprecations: NSDictionary<string, string>;

	protocol: any /* Protocol */;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor();

	calendarAppearanceBorderDefaultColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceBorderRadiusForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): number;

	calendarAppearanceBorderSelectionColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceEventDefaultColorsForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): NSArray<UIColor>;

	calendarAppearanceEventOffsetForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceEventSelectionColorsForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): NSArray<UIColor>;

	calendarAppearanceFillDefaultColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceFillSelectionColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceImageOffsetForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceSubtitleDefaultColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceSubtitleOffsetForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceSubtitleSelectionColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceTitleDefaultColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarAppearanceTitleOffsetForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): CGPoint;

	calendarAppearanceTitleSelectionColorForDate(calendar: FSCalendar, appearance: FSCalendarAppearance, date: Date): UIColor;

	calendarBoundingRectWillChangeAnimated(calendar: FSCalendar, bounds: CGRect, animated: boolean): void;

	calendarCellForDateAtMonthPosition(calendar: FSCalendar, date: Date, position: FSCalendarMonthPosition): FSCalendarCell;

	calendarCurrentPageDidChange(calendar: FSCalendar): void;

	calendarDidDeselectDateAtMonthPosition(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): void;

	calendarDidSelectDateAtMonthPosition(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): void;

	calendarImageForDate(calendar: FSCalendar, date: Date): UIImage;

	calendarNumberOfEventsForDate(calendar: FSCalendar, date: Date): number;

	calendarShouldDeselectDateAtMonthPosition(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): boolean;

	calendarShouldSelectDateAtMonthPosition(calendar: FSCalendar, date: Date, monthPosition: FSCalendarMonthPosition): boolean;

	calendarSubtitleForDate(calendar: FSCalendar, date: Date): string;

	calendarTitleForDate(calendar: FSCalendar, date: Date): string;

	calendarWillDisplayCellForDateAtMonthPosition(calendar: FSCalendar, cell: FSCalendarCell, date: Date, monthPosition: FSCalendarMonthPosition): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deprecatedSelectorOfSelector(selector: string): string;

	init(): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumDateForCalendar(calendar: FSCalendar): Date;

	minimumDateForCalendar(calendar: FSCalendar): Date;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FSCalendarEventIndicator extends UIView {

	static alloc(): FSCalendarEventIndicator; // inherited from NSObject

	static appearance(): FSCalendarEventIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarEventIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarEventIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarEventIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarEventIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarEventIndicator; // inherited from UIAppearance

	static new(): FSCalendarEventIndicator; // inherited from NSObject

	color: any;

	numberOfEvents: number;
}

declare class FSCalendarHeaderCell extends UICollectionViewCell {

	static alloc(): FSCalendarHeaderCell; // inherited from NSObject

	static appearance(): FSCalendarHeaderCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarHeaderCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarHeaderCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarHeaderCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarHeaderCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarHeaderCell; // inherited from UIAppearance

	static new(): FSCalendarHeaderCell; // inherited from NSObject

	header: FSCalendarHeaderView;

	titleLabel: UILabel;
}

declare class FSCalendarHeaderLayout extends UICollectionViewFlowLayout {

	static alloc(): FSCalendarHeaderLayout; // inherited from NSObject

	static new(): FSCalendarHeaderLayout; // inherited from NSObject
}

declare class FSCalendarHeaderTouchDeliver extends UIView {

	static alloc(): FSCalendarHeaderTouchDeliver; // inherited from NSObject

	static appearance(): FSCalendarHeaderTouchDeliver; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarHeaderTouchDeliver; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarHeaderTouchDeliver; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarHeaderTouchDeliver; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarHeaderTouchDeliver; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarHeaderTouchDeliver; // inherited from UIAppearance

	static new(): FSCalendarHeaderTouchDeliver; // inherited from NSObject

	calendar: FSCalendar;

	header: FSCalendarHeaderView;
}

declare class FSCalendarHeaderView extends UIView {

	static alloc(): FSCalendarHeaderView; // inherited from NSObject

	static appearance(): FSCalendarHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarHeaderView; // inherited from UIAppearance

	static new(): FSCalendarHeaderView; // inherited from NSObject

	calendar: FSCalendar;

	collectionView: FSCalendarCollectionView;

	collectionViewLayout: FSCalendarHeaderLayout;

	scrollDirection: UICollectionViewScrollDirection;

	scrollEnabled: boolean;

	configureAppearance(): void;

	reloadData(): void;

	setScrollOffset(scrollOffset: number): void;

	setScrollOffsetAnimated(scrollOffset: number, animated: boolean): void;
}

declare var FSCalendarInvalidArgumentsExceptionName: string;

declare var FSCalendarMaximumEventDotDiameter: number;

declare const enum FSCalendarMonthPosition {

	Previous = 0,

	Current = 1,

	Next = 2,

	NotFound = 2147483647
}

declare const enum FSCalendarPlaceholderType {

	None = 0,

	FillHeadTail = 1,

	FillSixRows = 2
}

declare const enum FSCalendarScope {

	Month = 0,

	Week = 1
}

declare const enum FSCalendarScrollDirection {

	Vertical = 0,

	Horizontal = 1
}

declare class FSCalendarSeparatorDecorationView extends UICollectionReusableView {

	static alloc(): FSCalendarSeparatorDecorationView; // inherited from NSObject

	static appearance(): FSCalendarSeparatorDecorationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarSeparatorDecorationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarSeparatorDecorationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarSeparatorDecorationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarSeparatorDecorationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarSeparatorDecorationView; // inherited from UIAppearance

	static new(): FSCalendarSeparatorDecorationView; // inherited from NSObject
}

declare const enum FSCalendarSeparators {

	None = 0,

	InterRows = 1
}

declare var FSCalendarStandardCellDiameter: number;

declare var FSCalendarStandardHeaderHeight: number;

declare var FSCalendarStandardHeaderTextSize: number;

declare var FSCalendarStandardMonthlyPageHeight: number;

declare var FSCalendarStandardRowHeight: number;

declare var FSCalendarStandardSeparatorThickness: number;

declare var FSCalendarStandardSubtitleTextSize: number;

declare var FSCalendarStandardTitleTextSize: number;

declare var FSCalendarStandardWeekdayHeight: number;

declare var FSCalendarStandardWeekdayTextSize: number;

declare var FSCalendarStandardWeeklyPageHeight: number;

declare class FSCalendarStickyHeader extends UICollectionReusableView {

	static alloc(): FSCalendarStickyHeader; // inherited from NSObject

	static appearance(): FSCalendarStickyHeader; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarStickyHeader; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarStickyHeader; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarStickyHeader; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarStickyHeader; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarStickyHeader; // inherited from UIAppearance

	static new(): FSCalendarStickyHeader; // inherited from NSObject

	calendar: FSCalendar;

	month: Date;

	titleLabel: UILabel;

	configureAppearance(): void;
}

declare class FSCalendarTransitionAttributes extends NSObject {

	static alloc(): FSCalendarTransitionAttributes; // inherited from NSObject

	static new(): FSCalendarTransitionAttributes; // inherited from NSObject

	focusedDate: Date;

	focusedRow: number;

	sourceBounds: CGRect;

	sourcePage: Date;

	targetBounds: CGRect;

	targetPage: Date;

	targetScope: FSCalendarScope;

	revert(): void;
}

declare class FSCalendarTransitionCoordinator extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): FSCalendarTransitionCoordinator; // inherited from NSObject

	static new(): FSCalendarTransitionCoordinator; // inherited from NSObject

	cachedMonthSize: CGSize;

	readonly representingScope: FSCalendarScope;

	state: FSCalendarTransitionState;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { calendar: FSCalendar; });

	boundingRectForScopePage(scope: FSCalendarScope, page: Date): CGRect;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	handleScopeGesture(sender: any): void;

	initWithCalendar(calendar: FSCalendar): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performBoundingRectTransitionFromMonthToMonthDuration(fromMonth: Date, toMonth: Date, duration: number): void;

	performScopeTransitionFromScopeToScopeAnimated(fromScope: FSCalendarScope, toScope: FSCalendarScope, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum FSCalendarTransitionState {

	Idle = 0,

	Changing = 1,

	Finishing = 2
}

declare var FSCalendarVersionNumber: number;

declare var FSCalendarVersionNumberVar: number;

declare var FSCalendarVersionString: interop.Reference<number>;

declare var FSCalendarVersionStringVar: interop.Reference<number>;

declare class FSCalendarWeekdayView extends UIView {

	static alloc(): FSCalendarWeekdayView; // inherited from NSObject

	static appearance(): FSCalendarWeekdayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSCalendarWeekdayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSCalendarWeekdayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarWeekdayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSCalendarWeekdayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSCalendarWeekdayView; // inherited from UIAppearance

	static new(): FSCalendarWeekdayView; // inherited from NSObject

	calendar: FSCalendar;

	readonly weekdayLabels: NSArray<UILabel>;

	configureAppearance(): void;
}
