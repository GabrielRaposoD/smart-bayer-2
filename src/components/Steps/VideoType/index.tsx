// Module Imports
import React from 'react';
import { templates } from '@mocks/templates';

// Components Import
import { Logo, Stepper } from '@components/index';
import { SelectInput } from '@components/SelectInput';
import { Option, ButtonState, SmartStep } from '@typings/index';
import { Field, useFormikContext } from 'formik';

const VideoType: SmartStep = () => {
  const formik = useFormikContext<any>();

  const mappedTemplates: Option[] = templates.map((template) => {
    return { value: template, label: template.type };
  });

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='mt-16'>
          <h1 className='text-shaft md:text-4xl text-2xl font-bold leading-snug'>
            Que tipo de vídeo você gostaria de criar?
          </h1>
          <h3 className='text-shaft md:text-2xl mt-3 text-base font-medium'>
            Escolha nas opções abaixo o que melhor te atende.
          </h3>
          <div className='mt-4'>
            <Field
              name='template'
              options={mappedTemplates}
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

// VideoType.validation = Yup.object().shape({})

export { VideoType };
