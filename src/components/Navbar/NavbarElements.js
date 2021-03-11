import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuButtonContainer = styled.div`
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const MenuButton = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`

export const Span = styled.span`
    margin-left: 16px;
`

export const Nav = styled.nav`
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top:0;
    transition: 850ms;

    &:active {
        transition: 350ms;
    }

`

export const CloseButtonContainer = styled.li`
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const CloseButton = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`

export const NavMenu = styled.ul`
    width: 100%;

`

export const NavItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;

`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
        background-color: #1a83ff;
    }
`