import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

const ErrorContent = styled.div`
  max-width: 600px;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ErrorTitle = styled.h1`
  color: #e53e3e;
  margin-bottom: 1rem;
`;

const ErrorDetails = styled.div`
  margin: 1.5rem 0;
`;

const ErrorMessage = styled.p`
  color: #666;
  margin-top: 0.5rem;
  font-family: monospace;
`;

const BackHomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3182ce;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2c5282;
  }
`;

interface ErrorDetails {
  status?: number;
  statusText?: string;
  message?: string;
}

const Error: React.FC = () => {
  const error = useRouteError() as ErrorDetails;

  const getErrorMessage = (): string => {
    if (!error) {
      return 'An unknown error occurred';
    }

    if (error.status === 404) {
      return "The page you're looking for doesn't exist.";
    }

    if (error.message) {
      return error.message;
    }

    return 'Something went wrong. Please try again later.';
  };

  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorTitle>Oops!</ErrorTitle>
        <ErrorDetails>
          <p>{getErrorMessage()}</p>
          {error?.statusText && (
            <ErrorMessage>{error.statusText}</ErrorMessage>
          )}
        </ErrorDetails>
        <BackHomeLink to="/">Back to Home</BackHomeLink>
      </ErrorContent>
    </ErrorContainer>
  );
};

export default Error;
