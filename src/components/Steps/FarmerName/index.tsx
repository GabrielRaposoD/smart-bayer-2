// Module Imports
import React from 'react';
import * as Yup from 'yup';

// Components Import
import { Logo, Stepper } from '@components/index';
import { TextInput } from '@components/TextInput';

import { SmartStep } from '@typings/index';

const FarmerName: SmartStep = ({ currentStep, setCurrentStep }) => {
  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10'>
        <div className='flex flex-col'>
          <div className='md:mt-0 mt-6'>
            <Logo />
          </div>
          <div className='mt-16'>
            <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
              Qual o primeiro nome do agricultor?
            </h1>
            <h3 className='mt-3 text-base font-medium text-gray-600'>
              O nome aparecerá no material final renderizado.
            </h3>
            <div className='2xl:mt-10 mt-8 text-base font-medium text-gray-600'>
              <TextInput name='farmerName' placeholder='Digite' />
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

FarmerName.validation = Yup.object({
  farmerName: Yup.string()
    .max(17, 'O Nome não pode passar de 17 caracteres')
    .required('Insira o primeiro nome do agricultor'),
});

export { FarmerName };
