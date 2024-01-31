import { ContainerBox } from './style';

export default function Container({ children }) {
  return (
    <ContainerBox>
        { children }
    </ContainerBox>
  )
}