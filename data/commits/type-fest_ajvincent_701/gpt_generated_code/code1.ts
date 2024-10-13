// Define an abstract class
abstract class AbstractBuilding<T = unknown> {
    owners: T;

    constructor(buildingOwners: T) {
        this.owners = buildingOwners;
    }

    // An example abstract method that must be implemented by subclasses
    abstract calculateMaintenanceCosts(): number;
}