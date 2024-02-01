import axios from 'axios';

import { useState } from 'react';
import { FormContainer, InputsWrapper } from './style';

import InputField from '../InputField';
import SplitedLayout from '../SplitedLayout';


export default function ViaCepForm() {
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [federalUnit, setFederalUnit] = useState('');

    async function cepCalculator(cep) {
        if (cep.length < 9) 
            return;
    
        try {
            const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;
            const viaCepResponse = (await axios.get(viaCepUrl)).data;

            const ibgeUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${viaCepResponse.uf}`;
            const ibgeResponse = (await axios.get(ibgeUrl)).data;

            const mapped = {
                street: viaCepResponse.logradouro,
                neighborhood: viaCepResponse.bairro,
                city: viaCepResponse.localidade,
                state: ibgeResponse.nome,
                federalUnit: viaCepResponse.uf,
            };

            setStreet(mapped.street);
            setNeighborhood(mapped.neighborhood);
            setCity(mapped.city);
            setState(mapped.state)
            setFederalUnit(mapped.federalUnit);
        } catch (error) {
            console.log(error);
        }
    }

    function maskCep(onlyNumbersCep) {
        return onlyNumbersCep.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return (
        <FormContainer contentContainerStyle={{ paddingBottom: 50 }}>
            <InputsWrapper>
                <InputField 
                    labelText='Informar CEP:'
                    inputPlaceholder='Cep...'
                    defaultInputValue={cep}
                    valueHandleFn={cep => {
                        const maskedCep = maskCep(cep);
                        setCep(maskedCep);

                        cepCalculator(cep);
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