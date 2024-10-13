
// Test array
declare const variation5: Writable<readonly string[]>;
expectType<string[]>(variation5);

// Test tuple
declare const variation8: Writable<readonly [string, number]>;
expectType<[string, number]>(variation8);

// Test tuple with spread
declare const variation6: Writable<readonly [...string[], number]>;
expectType<[...string[], number]>(variation6);
declare const variation7: Writable<readonly [string, ...number[]]>;
expectType<[string, ...number[]]>(variation7);

// Test readonly set
declare const variation9: Writable<ReadonlySet<string>>;
expectType<Set<string>>(variation9);

// Test readonly map
declare const variation10: Writable<ReadonlyMap<string, number>>;
expectType<Map<string, number>>(variation10);