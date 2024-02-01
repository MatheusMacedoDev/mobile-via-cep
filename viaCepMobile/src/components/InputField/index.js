import { InputFieldWrapper, InputLabel, Input } from './style';

export default function InputField({ labelText, inputPlaceholder, defaultInputValue, valueHandleFn, valueMaxLength, isNumeric = false, isEditable = false }) {
  return (
    <InputFieldWrapper>
        <InputLabel>{ labelText }</InputLabel>
        <Input
            placeholder={inputPlaceholder}
            defaultValue={defaultInputValue}
            onChangeText={value => valueHandleFn(value)}
            maxLength={valueMaxLength}
            keyboardType={`${isNumeric ? 'numeric' : 'default'}`}
            editable={isEditable}
        />
    </InputFieldWrapper>
  )
}