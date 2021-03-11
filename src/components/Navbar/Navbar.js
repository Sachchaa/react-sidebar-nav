import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Data } from './Data'
import { IconContext } from 'react-icons'
import {
    MenuButtonContainer,
    MenuButton,
    CloseButtonContainer,
    CloseButton,
    Nav,
    NavMenu,
    NavItem,
    NavLink,
    Span

} from './NavbarElements'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#ffffff' }}>
                <MenuButtonContainer>
                    <MenuButton>
                        <FaBars onClick={showSideBar} />
                    </MenuButton>
                </MenuButtonContainer>
                {sidebar &&
                    <Nav>
                        <NavMenu>
                            <CloseButtonContainer>
                                <CloseButton>
                                    <AiOutlineClose onClick={showSideBar} />
                                </CloseButton>
                            </CloseButtonContainer>
                            {Data.map((item, index) => {
                                return (
                                    <NavItem key={index}>
                                        <NavLink to={item.path}>
                                            {item.icon} {''}
                                            <Span>{item.title}</Span>
                                        </NavLink>
                                    </NavItem>
                                )
                            })}
                        </NavMenu>
                    </Nav>
                }

            </IconContext.Provider>
        </>
    )
}

export default Navbar
