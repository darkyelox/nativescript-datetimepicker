
declare class NTMonthYearPicker extends UIControl implements NSCoding {

	static alloc(): NTMonthYearPicker; // inherited from NSObject

	static appearance(): NTMonthYearPicker; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NTMonthYearPicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NTMonthYearPicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NTMonthYearPicker; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NTMonthYearPicker; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NTMonthYearPicker; // inherited from UIAppearance

	static new(): NTMonthYearPicker; // inherited from NSObject

	calendar: NSCalendar;

	date: Date;

	datePickerMode: NTMonthYearPickerMode;

	locale: NSLocale;

	maximumDate: Date;

	minimumDate: Date;

	selectionColor: UIColor
	
	outsideSelectionColor: UIColor

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	setDateAnimated(date: Date, animated: boolean): void;
}

declare const enum NTMonthYearPickerMode {

	MonthAndYear = 0,

	Year = 1
}

declare var NTMonthYearPickerVersionNumber: number;

declare var NTMonthYearPickerVersionString: interop.Reference<number>;
