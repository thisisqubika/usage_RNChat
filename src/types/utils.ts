export type NoInfer<T> = [T][T extends unknown ? 0 : never];

/**
 * Adapted from type-fest's PartialDeep
 */
export type PartialDeep<T> = T extends (...args: unknown[]) => unknown
	? PartialDeepObject<T> | undefined
	: T extends object
	? T extends ReadonlyArray<infer ItemType> // Test for arrays/tuples, per https://github.com/microsoft/TypeScript/issues/35156
		? ItemType[] extends T // Test for arrays (non-tuples) specifically
			? readonly ItemType[] extends T // Differentiate readonly and mutable arrays
				? ReadonlyArray<PartialDeep<ItemType | undefined>>
				: Array<PartialDeep<ItemType | undefined>>
			: PartialDeepObject<T> // Tuples behave properly
		: PartialDeepObject<T>
	: T;

export type PartialDeepObject<ObjectType extends object> = {
	[KeyType in keyof ObjectType]?: PartialDeep<ObjectType[KeyType]>;
};

export const partial = <T>(mock: PartialDeep<NoInfer<T>>): T => {
	return mock as T;
};
