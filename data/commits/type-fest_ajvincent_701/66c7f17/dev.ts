
// Prototype test with type parameter
class Building<T = unknown> {
	owners: T;
	constructor(buildingOwners: T) {
		this.owners = buildingOwners;
	}
}

type Census = {
	count: number;
};

class House<OwnerCount extends Census = Census> extends Building<OwnerCount> {}

class CityBlock<BuildingType extends Building> {
	residence: BuildingType;

	constructor(HousingType: Class<BuildingType, [Census]>) {
		this.residence = new HousingType({count: 2});
	}
}

const Family = (new CityBlock(House)).residence.owners;
expectType<IsAny<typeof Family>>(false);
expectAssignable<number>(Family.count);
// /Prototype test with type parameter