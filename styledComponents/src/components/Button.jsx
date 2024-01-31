import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 15px;
    background-color: ${props => props.color}
`;

export const GreenButton = styled(Button)`
    background-color: green;
`;

export const RedButton = styled(Button)`
    background-color: red;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: 700;
`;