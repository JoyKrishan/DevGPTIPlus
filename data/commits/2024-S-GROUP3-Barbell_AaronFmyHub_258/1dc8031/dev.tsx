import FilteredExercises from '~/app/filteredExercises'
import {NavigationContainer} from '@react-navigation/native';
export enum muscleSelectUser {
  Shoulder,
  Chest,
  Arm,
  Core,
  Leg,
  Back,
  NoSelection,
}

//{ 'Shoulder' | 'Chest' | 'Arm' | 'Core' | 'Leg' | 'Back' }
  const [passNext, setPassNext] = useState<muscleSelectUser>(muscleSelectUser.NoSelection)