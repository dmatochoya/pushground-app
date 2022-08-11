import styled from 'styled-components';

export const SectionWrapper = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    padding: 70px 30px 40px;
    margin: 0px auto;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
    line-height: 1.2;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: 500;
    margin: 45px 0 10px; 
`;

export const Input = styled.input`
    font-size: 16px;
    color: #495057;
    height: 38px;
    padding: 6px 12px;
    border: 1px solid #ced4da;
    border-radius: 10px;
    margin-bottom: 15px;

    &:focus {
        border-color: rgb(128, 189, 255);
    }
`;

interface InputErrorContainerProps {
    isInputInvalid: boolean
}

export const InputErrorContainer = styled.div<InputErrorContainerProps>`
    transition: height 0.5s;
    height: ${({ isInputInvalid }) => (isInputInvalid ? '45px' : 0)};
`;

export const InputErrorMessage = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #721c24;
    background-color: #f8d7da;
    padding: 5px 10px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    background-color: #ff0000;
    height: 38px;
    padding: 0.4rem 1.25rem;
    border-radius: 10px;
    transition: all 0.4s ease 0s;

    &:hover {
        background-color: #e02020;
    }
`;
