import styled from 'styled-components';

interface StyledDropdownProps {
    positionRight: number | string;
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
    position: fixed;
    top: 72px;
    right: ${({ positionRight }) => positionRight};
    color: #aaa;
    background-color: #464646;
    width: 290px;
    max-height: calc(100% - 152px);
    padding: 1rem;
    overflow-y: auto;
    z-index: 200;
    transition: all 0.4s ease 0s;
`;

export const DropdownButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;
    width: 100%;
    height: 35px;
    padding: 15px;
    border-radius: 5px;
    transition: background-color 0.4s;

    &:hover {
        background-color: #2c2c2c;
    }
`;

export const ButtonText = styled.span`
    padding-left: 10px;
`;
