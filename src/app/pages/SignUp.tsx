import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthLink, FormContainer, FormError } from './../../lib/form';
import { Heading } from '../../library/typography';
import { Button } from '../../library/components';
import { Input } from '../../library/form';

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

    console.log(e.target);
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
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <Input
            name="lastName"
            type="text"
            placeholder="Last Name"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          name="email"
          type="email"
          placeholder="Enter Email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter Password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Enter Confirm Password"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
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
