import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useAppSelector } from '../app/hooks';
import {
  StyledHeader, ToggleDropdownButton, UserNameContainer, Caret,
} from './styles/DashboardHeaderAndMain.styled';
import Dropdown from './Dropdown';

function Header() {
  const userName = useAppSelector(({ mainSlice: { userName } }) => userName);

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <StyledHeader>
      <img src="/assets/logo.png" alt="Pushground logo" />
      <ToggleDropdownButton type="button" onClick={toggleDropdown}>
        <FaUserCircle size={30} />
        <UserNameContainer>{userName}</UserNameContainer>
        <Caret size={22} transform={showDropdown ? 'rotate(0)' : 'rotate(180)'} />
      </ToggleDropdownButton>
      <Dropdown positionRight={showDropdown ? 0 : '-300px'} />
    </StyledHeader>
  );
}

export default Header;
