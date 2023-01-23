import styled from 'styled-components'

export const NavList = styled.ul`
    display: flex;
`

export const NavName = styled.li`
color: black;
transition: all 250ms;
    &:hover, &:focus {
        color: yellow;
    }
`