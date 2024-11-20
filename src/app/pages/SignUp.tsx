import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  AuthLink,
  FormButton,
  FormContainer,
  FormError,
  FormInput,
  PasswordInput,
} from './../../library/form';

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
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        SignUp Form
      </h2>
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

        <FormButton type="submit">Sign Up</FormButton>
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
