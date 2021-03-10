import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavMobile,
    NavMenu,
    NavItem,
    NavLink

} from './NavbarElements'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMobile>
                        <FaBars onClick={showSideBar} />
                    </NavMobile>
                    <NavMenu>
                        <NavItem>
                            <NavLink> </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink> </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink> </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar
