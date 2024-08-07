// Page: HomePage.tsx
import React from 'react';
import FormTemplate from '../template/FormTemplate';

const HomePage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <FormTemplate
      formTitle="Contact Us"
      inputLabel="Your Name"
      buttonText="Submit"
      onSubmit={handleSubmit}
    />
  );
};

export default HomePage;
