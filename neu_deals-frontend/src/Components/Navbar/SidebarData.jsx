import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiOutlineLogin />,
    cName: 'nav-text'
  },
  {
    title: 'Categories',
    path: '/categories',
    icon: <FaIcons.FaLayerGroup /> ,
    cName: 'nav-text'
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FaIcons.FaShoppingCart  />,
    cName: 'nav-text'
  },
  {
    title: 'Wishlist',
    path: '/wishList',
    icon: <FaIcons.FaHeart  />,
    cName: 'nav-text'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];