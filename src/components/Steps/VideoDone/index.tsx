// Module Imports
import React, { useState } from 'react';

// Components Import
import { Logo } from '@components/index';
import downloadUrl from '@utils/download-url';
import { sendVideoEmail } from 'service/video.service';
import { SmartStep } from '@typings/index';

const VideoDone: SmartStep = () => {
  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='md:mt-0 mt-6'>
        <Logo />
      </div>
      <div>
        <h1 className='md:text-4xl text-2xl font-bold text-gray-800'>
          Seu vídeo está pronto!
        </h1>
        <h3 className='mt-3 text-base font-medium text-gray-600'>
          Parabéns! Você criou um vídeo e poderá compartilhar com seus clientes.
        </h3>
        <div className='w-full'>
          <div className='mt-6'>
            <button
              className='border-primary bg-primary md:w-2/3 w-full py-2 text-lg font-normal text-white border border-solid rounded-full'
              onClick={() => downloadUrl('placeholder', 'placeholder')}
            >
              Baixar vídeo
            </button>
          </div>
        </div>
      </div>
      <p
        className='text-darkgreen mt-3 text-lg font-medium underline cursor-pointer'
        onClick={() => {}}
      >
        Criar um novo vídeo
      </p>
    </div>
  );
};

export { VideoDone };
