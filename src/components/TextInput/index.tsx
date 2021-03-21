// Module Imports
import React, { InputHTMLAttributes } from 'react';
import cs from 'classnames';
import { Field, ErrorMessage } from 'formik';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, name, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className='flex flex-col'>
          <input
            name={name}
            type='text'
            className={cs('focus:ring-0 w-full rounded-lg', {
              'border-red-500 hover:border-red-500 focus:border-red-500':
                meta.error,
              'border-shift hover:border-green focus:border-green': !meta.error,
            })}
            placeholder={placeholder}
            {...field}
          />
          <p
            data-testid={`${id}-errorlabel`}
            className={cs('mt-2 text-sm text-red-500')}
          >
            <ErrorMessage name={name} />
          </p>
        </div>
      )}
    </Field>
  );
};

export { TextInput };
