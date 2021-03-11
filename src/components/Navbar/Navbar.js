import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Data } from './Data'
import {
    MenuButtonContainer,
    MenuButton,
    Nav,
    NavbarContainer,
    NavMenu,
    NavItem,
    NavLink

} from './NavbarElements'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
    return (
        <>
            <MenuButtonContainer>
                <MenuButton>
                    <FaBars onClick={showSideBar} />
                </MenuButton>
            </MenuButtonContainer>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLink>
                                <AiOutlineClose />
                            </NavLink>
                        </NavItem>
                        {Data.map((item, index) => {
                            return (
                                <NavItem key={index}>
                                    <NavLink to={item.path}>
                                        {item.icon} {''}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </NavItem>
                            )
                        })}
                    </NavMenu>
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar
