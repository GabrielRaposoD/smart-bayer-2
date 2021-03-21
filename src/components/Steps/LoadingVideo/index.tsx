// Module Imports
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// Components Import
import { Logo } from '@components/index';

// Applications Import
import { BiLoaderAlt } from 'react-icons/bi';
import { SmartStep } from '@typings/index';

const queryClient = new QueryClient();

const LoadingVideo: SmartStep = ({ currentStep, setCurrentStep }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingVideoComponent
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </QueryClientProvider>
  );
};

const LoadingVideoComponent: SmartStep = ({ setCurrentStep, currentStep }) => {
  const myHeaders = new Headers();
  myHeaders.append('external-id', 'e5e16966-0218-46ad-a042-04241db0a9de');
  myHeaders.append('token', 'fe96c4647e55a2496cc3fade6e95b873');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

  const { data } = useQuery(
    'repoData',
    () =>
      fetch(
        `https://api.chiligumvideos.com/api/videos/${video.id}`,
        requestOptions
      ).then((res) => res.json()),
    {
      refetchInterval: 5000,
      enabled: Boolean(video.id),
      cacheTime: 0,
      keepPreviousData: false,
      refetchOnMount: true,
      initialData: null,
    }
  );

  useEffect(() => {
    if (data && data.processed) {
      setCurrentStep(currentStep + 1);
    }
  }, [data]);

  return (
    <div className='md:px-0 flex flex-col items-start min-h-screen px-6'>
      <div className='md:px-40 md:items-start flex flex-col items-center w-full py-20'>
        <Logo />
      </div>
      <div className='flex flex-col items-center self-center justify-center mt-40'>
        <BiLoaderAlt className='text-9xl animate-spin text-green' />
        <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
          Aguarde, estamos criando seu vídeo
        </h1>
        <h3 className='md:text-xl mt-3 text-base font-medium text-gray-600'>
          Assim que o vídeo estiver pronto, enviaremos o link de download para o
          seu e-mail.
        </h3>
      </div>
    </div>
  );
};

export { LoadingVideo };
