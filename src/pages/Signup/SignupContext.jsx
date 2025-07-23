import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  return (
    <SignupContext.Provider value={{ gender, setGender, age, setAge }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => useContext(SignupContext);
