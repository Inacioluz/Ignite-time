import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoTime from '../../assets/time.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTime} alt="Logo Relógio" />
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
