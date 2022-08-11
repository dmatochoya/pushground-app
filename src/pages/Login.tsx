import React, { useEffect, useState, type FormEvent } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';
import { useLazyLogInUserQuery } from '../app/services/pushgroundApi';
import {
  SectionWrapper, Container, Title, Form, FormLabel,
  InputErrorMessage, InputErrorContainer, Input, Button,
} from '../components/styles/Login.styled';

function Login() {
  const [inputValue, setInputValue] = useState('');
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const [logInUser, { isFetching, isSuccess }] = useLazyLogInUserQuery();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (/^[a-zA-Z]+$/.test(inputValue)) {
      logInUser({ userName: inputValue, email: 'demo@demo.com', password: 'demo1234' });
    } else {
      setIsInputInvalid(true);
    }
  };

  const handleChange = ({ target: { value } }: { target: { value: string } }) => {
    setInputValue(value);

    if (isInputInvalid) {
      setIsInputInvalid(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/dashboard', { replace: true });
    }
  }, [isSuccess]);

  return (
    <SectionWrapper>
      <Container>
        {isFetching
          ? <ClipLoader color="#ff0000" size={100} />
          : (
            <>
              <Title>Welcome to Pushground.</Title>
              <Form onSubmit={handleSubmit}>
                <FormLabel>Log in</FormLabel>
                <InputErrorContainer isInputInvalid={isInputInvalid}>
                  <InputErrorMessage>The name must only contain letters</InputErrorMessage>
                </InputErrorContainer>
                <Input type="text" value={inputValue} onChange={handleChange} placeholder="Enter a name" required />
                <Button type="submit">Log in</Button>
              </Form>
            </>
          )}
      </Container>
    </SectionWrapper>
  );
}

export default Login;
