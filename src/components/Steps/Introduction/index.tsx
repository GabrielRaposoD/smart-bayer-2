// Module Imports
import React from 'react';

// Components Import
import { Logo } from '@components/index';
import { ButtonState, SmartStep } from '@typings/index';
import { Button } from '@components/Button';

const Introduction: SmartStep = () => {
  return (
    <div className='md:px-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-full px-4 pb-10'>
      <div className='md:mt-0 mt-10'>
        <Logo />
      </div>
      <div className='md:mt-0 mt-24'>
        <h1 className='text-shaft xl:text-4xl text-2xl font-bold'>
          Experiência Integrada Bayer
        </h1>
        <h3 className='text-shaft xl:text-2xl md:whitespace-nowrap mt-3 text-sm font-medium'>
          Crie um vídeo customizado para o seu cliente com
        </h3>
        <h3 className='text-shaft xl:text-2xl md:whitespace-nowrap text-sm font-medium'>
          as ações recomendadas no{' '}
          <span className='font-bold'>Fechamento de Safra</span>
        </h3>
        <h3 className='text-shaft xl:text-2xl md:whitespace-nowrap text-sm font-medium'>
          e compartilhe esse material por WhatsApp.
        </h3>
      </div>
      <div className='md:mt-0 w-full mt-24'>
        <h6 className='text-shaft xl:text-base text-xs tracking-wide'>
          Ao clicar em Criar video, toda a informação inserida e criação dos
          materiais é de total responsabilidade do criador.
        </h6>
        <div className='mt-6'>
          <div className='flex justify-start w-full'>
            <Button title='Começar' state={ButtonState.normal} type='submit' />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Introduction };
