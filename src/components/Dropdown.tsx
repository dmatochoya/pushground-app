import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { resetSliceState } from '../app/slices/mainSlice';
import { resetApiState } from '../app/services/pushgroundApi';
import { StyledDropdown, DropdownButton, ButtonText } from './styles/Dropdown.styled';

function Dropdown({ positionRight }: { positionRight: number | string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(resetSliceState());
    dispatch(resetApiState());
    navigate('/login', { replace: true });
  };

  return (
    <StyledDropdown positionRight={positionRight}>
      <DropdownButton type="button" onClick={logOut}>
        <FaSignOutAlt size={17} />
        <ButtonText>Logout</ButtonText>
      </DropdownButton>
    </StyledDropdown>
  );
}

export default Dropdown;
