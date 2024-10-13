import {expectError, expectAssignable, expectNotAssignable, expectType} from 'tsd';
import type {AbstractConstructor, AbstractClass, IsAny} from '../index';

// Prototype test with type parameter
abstract class AbstractBuilding<T = unknown> {
	owners: T;
	constructor(buildingOwners: T) {
		this.owners = buildingOwners;
	}
}

class Building<T> extends AbstractBuilding<T> {}

type Census = {
	count: number;
};

class House<OwnerCount extends Census = Census> extends Building<OwnerCount> {}

class CityBlock<BuildingType extends Building<Census>> {
	residence: BuildingType;

	constructor(HousingType: AbstractClass<BuildingType, [Census]>) {
		class Building extends HousingType {}
		this.residence = new Building({count: 2});
	}
}

const Family = (new CityBlock(House)).residence.owners;
expectType<IsAny<typeof Family>>(false);
expectAssignable<number>(Family.count);
// /Prototype test with type parameter