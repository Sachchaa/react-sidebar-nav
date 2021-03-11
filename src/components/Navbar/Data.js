import React from 'react';
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io'

export const Data = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIosPaper />
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople />
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaEnvelopeOpenText />
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle />
    },
]