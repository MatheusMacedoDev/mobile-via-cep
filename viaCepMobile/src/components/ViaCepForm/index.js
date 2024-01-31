import { FormContainer, InputsWrapper } from './style';

import InputField from '../InputField';
import SplitedLayout from '../SplitedLayout';
import { useState } from 'react';

export default function ViaCepForm() {
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [federalUnit, setFederalUnit] = useState('');

    return (
        <FormContainer>
            <InputsWrapper>
                <InputField 
                    labelText='Informar CEP:'
                    inputPlaceholder='Cep...'
                    defaultInputValue={cep}
                    valueHandleFn={setCep}
                    onBlur={console.log('blurrrrr')}
                />
                <InputField 
                    labelText='Logradouro:'
                    inputPlaceholder='Logradouro...'
                    defaultInputValue={street}
                    valueHandleFn={setStreet}
                />
                <InputField 
                    labelText='Bairro:'
                    inputPlaceholder='Bairro...'
                    defaultInputValue={neighborhood}
                    valueHandleFn={setNeighborhood}
                />
                <InputField 
                    labelText='Cidade:'
                    inputPlaceholder='Cidade...'
                    defaultInputValue={city}
                    valueHandleFn={setCity}
                />
                <SplitedLayout>
                    <InputField 
                        labelText='Estado:'
                        inputPlaceholder='Estado...'
                        defaultInputValue={state}
                        valueHandleFn={setState}
                    />
                    <InputField 
                        labelText='UF:'
                        inputPlaceholder='UF...'
                        defaultInputValue={federalUnit}
                        valueHandleFn={setFederalUnit}
                    />
                </SplitedLayout>
            </InputsWrapper>
        </FormContainer>
    )
}