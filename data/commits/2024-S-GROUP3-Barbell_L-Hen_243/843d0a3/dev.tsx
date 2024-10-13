interface EquipmentFilterProps {
  setEquipment: any
}

export default function EquipmentFilter({ setEquipment }: EquipmentFilterProps) {
  const selectToggle = (equipmentName: string) => {
      [equipmentName]: !prevState[equipmentName],