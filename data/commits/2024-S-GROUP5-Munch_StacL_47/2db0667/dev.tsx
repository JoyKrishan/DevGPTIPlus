import { ControllerRenderProps } from 'react-hook-form';
import { useColorScheme } from 'react-native';
import { Input, Label, Text } from 'tamagui';

interface UserInputProps<T> {
  labelID: string;
  placeholder: string;
  useLabel?: boolean;
  field: ControllerRenderProps<T, any>;
  sx?: Record<string, any>;
}

const UserInput = <T extends any>({
  field,
  labelID,
  placeholder,
  useLabel,
  sx,
}: UserInputProps<T>) => {
  const colorScheme = useColorScheme();
  return (
    <>
      {useLabel && (
        <Label htmlFor={labelID} width={'$7'}>
          {labelID}
        </Label>
      )}
      <Input
        {...field}
        // id={labelID}
        pt={'$1'}
        px={'$3'}
        autoCapitalize={'none'}
        autoCorrect={false}
        color={'$accentColor'}
        borderColor={'$accentColor'}
        onChangeText={field.onChange}
        value={field.value as string}
        placeholder={placeholder}
        {...sx}
        unstyled
      />
    </>
  );
};

export default UserInput;