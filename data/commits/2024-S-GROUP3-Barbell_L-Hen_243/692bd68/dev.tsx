  setEquipmentList: any
  equipmentList: string[]
export default function EquipmentFilter({ setEquipmentList, equipmentList }: EquipmentFilterProps) {
  const handleEquipmentList = (equipment: string) => {
    if (!equipmentList.includes(equipment)) {
      // add the equipment to the list if it's not already present
      setEquipmentList([...equipmentList, equipment])
    } else {
      // remove the equipment from the list if it's already present
      const updatedList = equipmentList.filter((item) => item !== equipment)
      setEquipmentList(updatedList)
    }
          style={{ backgroundColor: equipmentList.includes(equipment) ? '#303030' : '#1E1E1E' }}
          onPress={() => handleEquipmentList(equipment)}