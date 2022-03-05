import { Container, InputSearchContainer } from './styles'

import logo from '../../assets/images/logo.svg'

export function Header () {
  return (
    <Container>
      <img src={logo} alt="MyContacts logo" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder='Pesquise pelo nome'/>
      </InputSearchContainer>
    </Container>
  )
}
