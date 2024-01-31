import { InputFieldWrapper, InputLabel, Input } from './style';

export default function InputField({ labelText, inputPlaceholder, defaultInputValue, valueHandleFn, onBlur = null }) {
  return (
    <InputFieldWrapper>
        <InputLabel>{ labelText }</InputLabel>
        <Input
            onBlur={onBlur}
            placeholder={inputPlaceholder}
            defaultValue={defaultInputValue}
            onChangeText={value => valueHandleFn(value)}
        />
    </InputFieldWrapper>
  )
}