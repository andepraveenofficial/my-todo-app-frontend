import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AxiosError } from 'axios';
import {
  AuthLink,
  FormContainer,
  FormError,
  FormInput,
  PasswordInput,
} from './../../lib/form';
import Button from '../../library/components/Button';
import Heading from '../../library/typography/Heading';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signin(email, password);
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to sign in');
      }
    }
  };

  return (
    <FormContainer>
      <Heading className="mb-6">SignIn Form</Heading>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <FormError error={error} />
        <Button type="submit" size="lg" fullWidth>
          Sign In
        </Button>
      </form>

      <AuthLink
        text="Do not have an account?"
        linkText="Sign Up"
        to="/auth/signup"
      />
    </FormContainer>
  );
};

export default SignIn;
