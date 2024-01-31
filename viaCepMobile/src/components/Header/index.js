import { SafeAreaView } from 'react-native';

import { HeaderBox, HeaderTitle } from './style';

export default function Header() {
    return (
        <HeaderBox>
            <SafeAreaView>
                <HeaderTitle>Consumo da API ViaCep</HeaderTitle>
            </SafeAreaView>
        </HeaderBox>
    )
}