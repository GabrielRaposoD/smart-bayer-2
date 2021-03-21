// Module Imports
import React, { InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';
import cs from 'classnames';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const RadioInput: React.FC<RadioInputProps> = ({ id, name, value }) => {
  return (
    <Field name={name} type='radio' value={value}>
      {({ field, meta }) => (
        <div className='flex flex-col'>
          <input
            name={name}
            type='radio'
            value={value}
            className={cs(' ', {
              'border-red-500 hover:border-red-500 focus:border-red-500':
                meta.error,
              'border-shift hover:border-green focus:border-green': !meta.error,
            })}
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

export { RadioInput };
