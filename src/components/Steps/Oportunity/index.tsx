// Module Imports
import React from 'react';
import { oportunities } from '@mocks/oportunities';

// Components Import
import { Logo, Stepper } from '@components/index';
import { SelectInput } from '@components/SelectInput';
import { Option, ButtonState, SmartStep } from '@typings/index';
import { Field, useFormikContext } from 'formik';

const Oportunity: SmartStep = () => {
  const formik = useFormikContext<any>();

  const mappedOportunity: Option[] = oportunities.map((o) => {
    return { value: o, label: o };
  });

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='mt-16'>
          <h1 className='text-shaft md:text-4xl text-2xl font-bold leading-snug'>
            Quais são as informações do seu vídeo?
          </h1>
          <h3 className='text-shaft md:text-2xl mt-3 text-base font-medium'>
            Insira as informações abaixo para criarmos seu anúncio. Elas
            aparecerão no material finalizado.
          </h3>
          <div className='mt-6 space-y-1 text-base font-medium text-gray-600'>
            <label>Qual a oportunidade?</label>
            <Field
              name='oportunity'
              options={mappedOportunity}
              component={SelectInput}
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper
          buttonState={
            formik.values.template ? ButtonState.normal : ButtonState.disabled
          }
        />
      </div>
    </div>
  );
};

export { Oportunity };
