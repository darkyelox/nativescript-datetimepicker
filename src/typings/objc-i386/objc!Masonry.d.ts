
declare interface UIView {
	mas_top: any
	mas_right: any
	mas_bottom: any
	mas_left: any
	mas_leading: any
	mas_trailing: any
	mas_width: any
	mas_height: any
	mas_centerX: any
	mas_centerY: any
	mas_baseline: any
	mas_safeAreaLayoutGuide: any
	mas_safeAreaLayoutGuideLeading: any
	mas_safeAreaLayoutGuideTrailing: any
	mas_safeAreaLayoutGuideLeft: any
	mas_safeAreaLayoutGuideRight: any
	mas_safeAreaLayoutGuideTop: any
	mas_safeAreaLayoutGuideBottom: any
	mas_safeAreaLayoutGuideWidth: any
	mas_safeAreaLayoutGuideHeight: any
	mas_safeAreaLayoutGuideCenterX: any
	mas_safeAreaLayoutGuideCenterY: any

	mas_makeConstraints(block: (maker: MASConstraintMaker) => void)
	mas_updateConstraints(block: (maker: MASConstraintMaker) => void)
	mas_remakeConstraints(block: (maker: MASConstraintMaker) => void)
}

declare const enum MASAttribute {

	Left = 2,

	Right = 4,

	Top = 8,

	Bottom = 16,

	Leading = 32,

	Trailing = 64,

	Width = 128,

	Height = 256,

	CenterX = 512,

	CenterY = 1024,

	Baseline = 2048,

	FirstBaseline = 4096,

	LastBaseline = 2048,

	LeftMargin = 8192,

	RightMargin = 16384,

	TopMargin = 32768,

	BottomMargin = 65536,

	LeadingMargin = 131072,

	TrailingMargin = 262144,

	CenterXWithinMargins = 524288,

	CenterYWithinMargins = 1048576
}

declare const enum MASAxisType {

	Horizontal = 0,

	Vertical = 1
}

declare class MASCompositeConstraint extends MASConstraint {

	static alloc(): MASCompositeConstraint; // inherited from NSObject

	static new(): MASCompositeConstraint; // inherited from NSObject

	constructor(o: { children: NSArray<any> | any[]; });

	initWithChildren(children: NSArray<any> | any[]): this;
}

declare class MASConstraint extends NSObject {

	static alloc(): MASConstraint; // inherited from NSObject

	static new(): MASConstraint; // inherited from NSObject

	delegate: MASConstraintDelegate;

	updateExisting: boolean;

	activate(): void;

	addConstraintWithLayoutAttribute(layoutAttribute: NSLayoutAttribute): MASConstraint;

	baseline(): MASConstraint;

	bottom(): MASConstraint;

	bottomMargin(): MASConstraint;

	centerOffset(): (p1: CGPoint) => MASConstraint;

	centerX(): MASConstraint;

	centerXWithinMargins(): MASConstraint;

	centerY(): MASConstraint;

	centerYWithinMargins(): MASConstraint;

	deactivate(): void;

	dividedBy(): (p1: number) => MASConstraint;

	equalTo(): (p1: any) => MASConstraint;

	equalToWithRelation(): (p1: any, p2: NSLayoutRelation) => MASConstraint;

	firstBaseline(): MASConstraint;

	greaterThanOrEqualTo(): (p1: any) => MASConstraint;

	height(): MASConstraint;

	inset(): (p1: number) => MASConstraint;

	insets(): (p1: UIEdgeInsets) => MASConstraint;

	install(): void;

	key(): (p1: any) => MASConstraint;

	lastBaseline(): MASConstraint;

	leading(): MASConstraint;

	leadingMargin(): MASConstraint;

	left(): MASConstraint;

	leftMargin(): MASConstraint;

	lessThanOrEqualTo(): (p1: any) => MASConstraint;

	mas_equalTo(): (p1: any) => MASConstraint;

	mas_greaterThanOrEqualTo(): (p1: any) => MASConstraint;

	mas_lessThanOrEqualTo(): (p1: any) => MASConstraint;

	mas_offset(): (p1: any) => MASConstraint;

	multipliedBy(): (p1: number) => MASConstraint;

	offset(): (p1: number) => MASConstraint;

	priority(): (p1: number) => MASConstraint;

	priorityHigh(): () => MASConstraint;

	priorityLow(): () => MASConstraint;

	priorityMedium(): () => MASConstraint;

	right(): MASConstraint;

	rightMargin(): MASConstraint;

	setCenterOffset(centerOffset: CGPoint): void;

	setInset(inset: number): void;

	setInsets(insets: UIEdgeInsets): void;

	setLayoutConstantWithValue(value: NSValue): void;

	setOffset(offset: number): void;

	setSizeOffset(sizeOffset: CGSize): void;

	sizeOffset(): (p1: CGSize) => MASConstraint;

	top(): MASConstraint;

	topMargin(): MASConstraint;

	trailing(): MASConstraint;

	trailingMargin(): MASConstraint;

	uninstall(): void;

	valueOffset(): (p1: NSValue) => MASConstraint;

	width(): MASConstraint;

	with(): MASConstraint;
}

interface MASConstraintDelegate extends NSObjectProtocol {

	constraintAddConstraintWithLayoutAttribute(constraint: MASConstraint, layoutAttribute: NSLayoutAttribute): MASConstraint;

	constraintShouldBeReplacedWithConstraint(constraint: MASConstraint, replacementConstraint: MASConstraint): void;
}
declare var MASConstraintDelegate: {

	prototype: MASConstraintDelegate;
};

declare class MASConstraintMaker extends NSObject {

	static alloc(): MASConstraintMaker; // inherited from NSObject

	static new(): MASConstraintMaker; // inherited from NSObject

	readonly attributes: (p1: MASAttribute) => MASConstraint;

	readonly baseline: MASConstraint;

	readonly bottom: MASConstraint;

	readonly bottomMargin: MASConstraint;

	readonly center: MASConstraint;

	readonly centerX: MASConstraint;

	readonly centerXWithinMargins: MASConstraint;

	readonly centerY: MASConstraint;

	readonly centerYWithinMargins: MASConstraint;

	readonly edges: MASConstraint;

	readonly firstBaseline: MASConstraint;

	readonly height: MASConstraint;

	readonly lastBaseline: MASConstraint;

	readonly leading: MASConstraint;

	readonly leadingMargin: MASConstraint;

	readonly left: MASConstraint;

	readonly leftMargin: MASConstraint;

	removeExisting: boolean;

	readonly right: MASConstraint;

	readonly rightMargin: MASConstraint;

	readonly size: MASConstraint;

	readonly top: MASConstraint;

	readonly topMargin: MASConstraint;

	readonly trailing: MASConstraint;

	readonly trailingMargin: MASConstraint;

	updateExisting: boolean;

	readonly width: MASConstraint;

	constructor(o: { view: UIView; });

	group(): (p1: () => void) => MASConstraint;

	initWithView(view: UIView): this;

	install(): NSArray<any>;
}

declare class MASLayoutConstraint extends NSLayoutConstraint {

	static alloc(): MASLayoutConstraint; // inherited from NSObject

	static constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(view1: any, attr1: NSLayoutAttribute, relation: NSLayoutRelation, view2: any, attr2: NSLayoutAttribute, multiplier: number, c: number): MASLayoutConstraint; // inherited from NSLayoutConstraint

	static new(): MASLayoutConstraint; // inherited from NSObject

	mas_key: any;
}

declare var MASLayoutPriorityDefaultHigh: number;

declare var MASLayoutPriorityDefaultLow: number;

declare var MASLayoutPriorityDefaultMedium: number;

declare var MASLayoutPriorityFittingSizeLevel: number;

declare var MASLayoutPriorityRequired: number;

declare class MASViewAttribute extends NSObject {

	static alloc(): MASViewAttribute; // inherited from NSObject

	static new(): MASViewAttribute; // inherited from NSObject

	readonly item: any;

	readonly layoutAttribute: NSLayoutAttribute;

	readonly view: UIView;

	constructor(o: { view: UIView; item: any; layoutAttribute: NSLayoutAttribute; });

	constructor(o: { view: UIView; layoutAttribute: NSLayoutAttribute; });

	initWithViewItemLayoutAttribute(view: UIView, item: any, layoutAttribute: NSLayoutAttribute): this;

	initWithViewLayoutAttribute(view: UIView, layoutAttribute: NSLayoutAttribute): this;

	isSizeAttribute(): boolean;
}

declare class MASViewConstraint extends MASConstraint implements NSCopying {

	static alloc(): MASViewConstraint; // inherited from NSObject

	static installedConstraintsForView(view: UIView): NSArray<any>;

	static new(): MASViewConstraint; // inherited from NSObject

	readonly firstViewAttribute: MASViewAttribute;

	readonly secondViewAttribute: MASViewAttribute;

	constructor(o: { firstViewAttribute: MASViewAttribute; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithFirstViewAttribute(firstViewAttribute: MASViewAttribute): this;
}

declare var MasonryVersionNumber: number;

declare var MasonryVersionNumberVar: number;

declare var MasonryVersionString: interop.Reference<number>;

declare var MasonryVersionStringVar: interop.Reference<number>;
