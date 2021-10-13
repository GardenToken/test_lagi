import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="limit-nav-link" to="/limit" as={Link}>
        <TranslatedText translationId={8}>Limit Order</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="Stop-nav-link" to="/Stop" as={Link}>
        <TranslatedText translationId={74}>Stop loss</TranslatedText>
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
