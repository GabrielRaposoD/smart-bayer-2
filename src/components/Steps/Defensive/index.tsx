// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper, SelectInput } from '@components/index';
import { SmartStep, ButtonState } from '@typings/index';
import { Field, useFormikContext } from 'formik';
import { defensive } from '@mocks/defensive';

const Defensive: SmartStep = () => {
  const formik = useFormikContext<any>();

  const mappedDefensives = defensive.map((d) => {
    return { value: d, label: d.name };
  });

  return (
    <div className='md:px-0 md:min-h-0 flex flex-col items-start justify-between h-full min-h-screen px-6'>
      <div className='md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10'>
        <div className='flex flex-col'>
          <div className='md:mt-0 mt-6'>
            <Logo />
          </div>
          <div className='mt-16'>
            <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
              Quais são as informações do seu <br />
              anúncio?
            </h1>
            <h3 className='mt-3 text-base font-medium text-gray-600'>
              Insira as informações abaixo para criarmos seu anúncio. Elas
              aparecerão no material final renderizado.
            </h3>
            <div className='mt-6 space-y-1 text-base font-medium text-gray-600'>
              <label> Qual a marca do milho?</label>
              <Field
                name='defensive'
                options={mappedDefensives}
                component={SelectInput}
              />
            </div>
            <div className='mt-6 space-y-1 text-base font-medium text-gray-600'>
              <label> Qual o produto?</label>
              <Field
                name='defensiveProduct'
                disabled={!formik.values.defensive}
                options={
                  formik.values.defensive
                    ? formik.values.defensive.products.map((p) => {
                        return { value: p, label: p.name };
                      })
                    : null
                }
                component={SelectInput}
              />
            </div>
          </div>
        </div>
        <div className='w-full mt-6'>
          <Stepper
            buttonState={
              formik.values.product && formik.values.company
                ? ButtonState.normal
                : ButtonState.disabled
            }
          />
        </div>
      </div>
    </div>
  );
};

export { Defensive };
