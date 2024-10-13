// A concrete subclass extending the abstract class and implementing the abstract methods
class Condo<T, OwnerDetails extends { count: number }> extends AbstractBuilding<OwnerDetails> {
    constructor(owners: OwnerDetails) {
        super(owners);
    }

    // Implementing the abstract method
    calculateMaintenanceCosts(): number {
        // Implementation details here. For example, it could be based on the number of owners.
        return this.owners.count * 100; // This is just a dummy calculation.
    }
}