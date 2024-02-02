import { useState } from 'react';
import { FormContainer, InputsWrapper } from './style';

import InputField from '../InputField';
import SplitedLayout from '../SplitedLayout';

import { cepCalculator, maskCep } from '../../Services/CepService';

export default function ViaCepForm() {
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [federalUnit, setFederalUnit] = useState('');

    return (
        <FormContainer contentContainerStyle={{ paddingBottom: 50 }}>
            <InputsWrapper>
                <InputField 
                    labelText='Informar CEP:'
                    inputPlaceholder='Cep...'
                    defaultInputValue={cep}
                    valueHandleFn={async cep => {
                        const maskedCep = maskCep(cep);
                        setCep(maskedCep);

                        const data = await cepCalculator(cep);

                        if (data != null && data != undefined) {
                            setStreet(data.street);
                            setNeighborhood(data.neighborhood);
                            setCity(data.city);
                            setState(data.state)
                            setFederalUnit(data.federalUnit);
                        }
                    }}
                    valueMaxLength={9}
                    isNumeric={true}
                    isEditable={true}
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