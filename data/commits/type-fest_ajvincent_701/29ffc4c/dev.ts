class House<OwnerCount extends Census = Census> extends AbstractBuilding<OwnerCount> {}
class CityBlock<BuildingType extends AbstractBuilding<Census>> {