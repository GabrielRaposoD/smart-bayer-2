// Module Imports
import React from 'react';
import * as Yup from 'yup';

// Components Import
import { Logo, Stepper, TextInput, MaskedInputField } from '@components/index';

import { SmartStep } from '@typings/index';

const InfoPersonal: SmartStep = ({ currentStep, setCurrentStep }) => {
  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10'>
        <div className='flex flex-col'>
          <div className='md:mt-0 mt-6'>
            <Logo />
          </div>
          <div className='mt-16'>
            <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
              Insira suas informações pessoais
            </h1>
            <h3 className='mt-3 text-base font-medium text-gray-600'>
              Além de poder baixar, você também receberá o arquivo final por
              email.
            </h3>
            <div className='mt-6 space-y-1 text-base font-medium text-gray-600'>
              <label>Seu primeiro nome</label>
              <TextInput name='name' placeholder='Digite' />
            </div>
            <div className='mt-6 space-y-1 text-base font-medium text-gray-600'>
              <label>Seu e-mail </label>
              <TextInput name='email' placeholder='Digite' />
            </div>
            <div className='mt-6 space-y-1 text-base font-medium text-gray-600'>
              <label>Seu telefone </label>
              <MaskedInputField
                mask={[
                  '(',
                  /\d/,
                  /\d/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                name='phone'
                type='phone'
                placeholder='(11) 99999-9999'
              />
            </div>
          </div>
        </div>
        <div className='w-full mt-6'>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

InfoPersonal.validation = Yup.object({
  name: Yup.string()
    .max(17, 'O Nome não pode passar de 17 caracteres')
    .required('Insira seu nome completo'),
  email: Yup.string()
    .email('E-mail incorreto')
    .required('Insira seu e-mail completo'),
});

export { InfoPersonal };
