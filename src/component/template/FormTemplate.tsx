// Template: FormTemplate.tsx
import React from 'react';
import FormInput from '../molecule/FormInput';

interface FormTemplateProps {
  formTitle: string;
  inputLabel: string;
  buttonText: string;
  onSubmit: () => void;
}

const FormTemplate: React.FC<FormTemplateProps> = ({ formTitle, inputLabel, buttonText, onSubmit }) => {
  return (
    <div>
      <h1>{formTitle}</h1>
      <FormInput label={inputLabel} buttonText={buttonText} onButtonClick={onSubmit} />
    </div>
  );
};

export default FormTemplate;
