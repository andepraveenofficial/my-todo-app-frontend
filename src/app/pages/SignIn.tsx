import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AxiosError } from 'axios';
import { AuthLink, FormContainer, FormError } from './../../lib/form';
import { Button } from '../../library/components';
import { Heading } from '../../library/typography';
import { Input } from '../../library/form';

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
        <Input
          type="email"
          placeholder="Email : admin@example.com"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password : password123"
          fullWidth
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
