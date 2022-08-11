import styled from 'styled-components';
import { FaCaretUp } from 'react-icons/fa';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    background-color: #2c2c2c;
    padding: 20px 15px;
    box-shadow: #000 0px 0px 5px;
    z-index: 101;
    transition: top 0.6s ease 0s;
`;

export const ToggleDropdownButton = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
`;
export const UserNameContainer = styled.span`
    font-size: 16px;
    color: #fff;
    padding: 0 6px 0 10px;
`;

export const Caret = styled(FaCaretUp)`
    transition: transform 0.4s;
    transform: ${({ transform }) => transform};
`;

export const StyledMain = styled.div`
    position: relative;
    top: 72px;
    padding: 20px;
`;
