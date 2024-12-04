import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  AuthLink,
  FormContainer,
  FormError,
  FormInput,
  PasswordInput,
} from './../../lib/form';
import { Heading } from '../../library/typography';
import { Button } from '../../library/components';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const { signup } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      signup(userDetails);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    }
  };

  return (
    <FormContainer>
      <Heading className="mb-6">SignUp Form</Heading>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <FormInput
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormInput
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <FormInput
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />

        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />

        <FormError error={error} />

        <Button type="submit" fullWidth>
          Sign Up
        </Button>
      </form>

      <AuthLink
        text="Already have an account?"
        linkText="Sign In"
        to="/auth/signin"
      />
    </FormContainer>
  );
};

export default SignUp;
