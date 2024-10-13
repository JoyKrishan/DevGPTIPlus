// Define a function that expects an abstract class type
function createBuildingInstance<T, Args extends unknown[]>(
    BuildingClass: AbstractClass<T, Args>,
    ...args: Args
): T {
    // Since we can't instantiate an abstract class directly, 
    // the passed "BuildingClass" should be a concrete class extending an abstract class.
    return new BuildingClass(...args);
}

// Creating an instance of 'Condo' using the 'createBuildingInstance' function.
const myCondo = createBuildingInstance(Condo, { count: 5 });

// Now, myCondo would be an instance of Condo, and you should be able to do:
console.log(myCondo.calculateMaintenanceCosts()); // Should output 500 if we follow the dummy calculation logic.