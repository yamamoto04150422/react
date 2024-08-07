// Molecule: FormInput.tsx
import React from 'react';
import Button from '../atoms/Button';

interface FormInputProps {
  label: string;
  buttonText: string;
  onButtonClick: () => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, buttonText, onButtonClick }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" />
      <Button label={buttonText} onClick={onButtonClick} />
    </div>
  );
};

export default FormInput;
