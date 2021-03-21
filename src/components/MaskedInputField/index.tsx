// Module Imports
import React, { InputHTMLAttributes } from 'react';
import cs from 'classnames';
import { Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';

interface MaskedInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  mask: any;
}

const MaskedInputField: React.FC<MaskedInputFieldProps> = ({
  id,
  name,
  placeholder,
  mask,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className='flex flex-col'>
          <MaskedInput
            name={name}
            mask={mask}
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

export { MaskedInputField };
