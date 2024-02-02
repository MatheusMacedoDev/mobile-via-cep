import axios from 'axios';

export async function cepCalculator(cep) {
    if (cep.length < 9) 
        return;

    try {
        const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;
        const viaCepResponse = (await axios.get(viaCepUrl)).data;

        const ibgeUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${viaCepResponse.uf}`;
        const ibgeResponse = (await axios.get(ibgeUrl)).data;

        return {
            street: viaCepResponse.logradouro,
            neighborhood: viaCepResponse.bairro,
            city: viaCepResponse.localidade,
            state: ibgeResponse.nome,
            federalUnit: viaCepResponse.uf,
        };
    } catch (error) {
        console.log(error);
    }
}

export function maskCep(onlyNumbersCep) {
    return onlyNumbersCep.replace(/(\d{5})(\d)/, '$1-$2');
}