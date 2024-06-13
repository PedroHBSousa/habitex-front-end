// src/components/HamburgerMenu.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: #000000;
  padding: 50px 10px;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

const MenuItem = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  padding: 15px 0;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #f1f1f1;
  }
`;

const Burger = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  div {
    width: 30px;
    height: 4px;
    background: #ffffff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <Menu open={open}>
        <MenuItem href="#QuemSomos" onClick={() => setOpen(false)}>Quem Somos</MenuItem>
        <MenuItem href="#Imóveis e Lotes" onClick={() => setOpen(false)}>Imóveis e Lotes</MenuItem>
        <MenuItem href="https://api.whatsapp.com/send/?phone=5511977377113&text=Bom+dia%2C+poderiam+me+apresentar+alguns+im%C3%B3veis%3F&type=phone_number&app_absent=0" onClick={() => setOpen(false)}>Fale Conosco</MenuItem>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
