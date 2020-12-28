import React, { useState } from 'react';
import * as Styled from './styles';
import Layout from 'components/Layout';

interface ContactProps {}

type ExcludesFalse = <T>(x: T | false) => x is T;

const Contact: React.FC<ContactProps> = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [postResponse, setPostResponse] = useState(0);
  const [input, setInput] = useState({ name: '', email: '', message: '' });

  const clearState = () => {
    setPostResponse(0);
    setErrors([]);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    clearState();
    const errors = Object.values(input)
      .map((value, index) => !value && Object.keys(input)[index])
      .filter((Boolean as any) as ExcludesFalse);
    if (errors.length > 0) {
      setErrors(errors);
      return;
    } else {
      setErrors(errors);
    }
    const response = await fetch('/api/mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...input }),
    });
    const { status } = await response;
    setPostResponse(status);
  };

  const renderErrorMessage = () => {
    const errorMessage = 'Please provide your ';
    return errors.reduce((accumulatedErrors: string, currentError, index) => {
      if (index === 0) {
        return `${errorMessage}${currentError}${
          index === errors.length - 1 ? '.' : ''
        }`;
      }
      if (index < errors.length - 1) {
        return `${accumulatedErrors}, ${currentError}`;
      }
      if (index === errors.length - 1) {
        return `${accumulatedErrors} and ${currentError}.`;
      }

      return currentError;
    }, '');
  };

  const changeValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    property: string,
  ) => {
    setInput({
      ...input,
      [property]: event.target.value,
    });
  };

  const renderResponse = () => {
    return (
      <Styled.Response>
        {postResponse === 200 ? (
          <>
            <span>Thanks for reaching out, {input.name}!</span>
            <span>I'll get back to you asap!</span>
          </>
        ) : (
          <>
            <span>Something went wrong, {input.name}. Please try again!</span>
            <span>
              If the problem persists, please contact me via hi@kevin.gent.
            </span>
          </>
        )}
      </Styled.Response>
    );
  };

  return (
    <Layout>
      <Styled.ContactWrapper>
        {renderErrorMessage()}
        {postResponse ? (
          renderResponse()
        ) : (
          <Styled.ContactContainer onSubmit={handleSubmit}>
            <Styled.InputContainer>
              <Styled.Label htmlFor="name">Name</Styled.Label>
              <input
                type="text"
                value={input.name}
                id="name"
                name="name"
                onChange={(event) => {
                  event.persist();
                  changeValue(event, 'name');
                }}
              />
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.Label htmlFor="email">Email</Styled.Label>
              <input
                type="text"
                value={input.email}
                id="email"
                name="email"
                onChange={(event) => {
                  event.persist();
                  changeValue(event, 'email');
                }}
              />
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.Label htmlFor="message">Message</Styled.Label>
              <textarea
                value={input.message}
                id="message"
                name="message"
                onChange={(event) => {
                  event.persist();
                  changeValue(event, 'message');
                }}
              />
            </Styled.InputContainer>
            <Styled.Button type="submit">submit</Styled.Button>
          </Styled.ContactContainer>
        )}
      </Styled.ContactWrapper>
    </Layout>
  );
};

export default Contact;
