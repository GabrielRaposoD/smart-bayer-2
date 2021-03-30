// Module Imports
import React from 'react';
import { useFormikContext } from 'formik';
import { MdCameraAlt } from 'react-icons/md';
import * as Yup from 'yup';

// Applications import
import { ButtonState, SmartStep } from '@typings/index';

// Components Import
import { Logo, Stepper } from '@components/index';

const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg'];
const FILE_SIZE = 16000000;

const PictureInput = ({ name, label }: { name: string; label: string }) => {
  const formik = useFormikContext<any>();

  function updateFile(name, file: File) {
    if (!file) return null;
    if (file.size > FILE_SIZE) {
      formik.setFieldValue(name, null);
      formik.setFieldError(name, 'Foto com mais de 16Mb');
    } else {
      formik.setFieldValue(name, file);
      formik.setFieldError(name, null);
    }
  }

  return (
    <div className='max-h-80'>
      <input
        type='file'
        id={`${name}-input`}
        name={`${name}-input`}
        className='hidden'
        accept='image/png, image/jpeg, image/jpg'
        onChange={(e) => {
          updateFile(name, e.target.files[0]);
          e.currentTarget.value = null;
        }}
      />
      <div className='relative bg-gray-100 rounded-lg max-h-80 h-80 flex flex-col items-center justify-center max-w-[145px]'>
        {formik.values[name] ? (
          <>
            <button
              className='absolute -mr-1 -mt-1 top-0 right-0 bg-red-500 flex flex-col items-center justify-center font-light text-xs rounded-full text-white w-[19px] h-[19px]'
              onClick={() => {
                formik.setFieldValue(name, null);
              }}
            >
              x
            </button>
            <img
              src={URL.createObjectURL(formik.values[name])}
              alt='Company Logo'
              className='w-40'
            />
          </>
        ) : (
          <label
            className='flex flex-col items-center justify-center p-4 space-y-4 text-center text-gray-500'
            htmlFor={`${name}-input`}
          >
            <div className='bg-opacity-20 w-min p-4 bg-gray-400 rounded-full'>
              <MdCameraAlt className='text-xl text-gray-400' />
            </div>
            <p className='text-xs'>Clique aqui para carregar a {label}</p>
          </label>
        )}
      </div>
      {formik.errors[name] && (
        <div className='rounded-xl bg-red w-full px-4 py-3 mt-10 text-base font-thin leading-relaxed tracking-wider text-white'>
          Sua imagem não está nos requisitos necessários. Tente novamente.
        </div>
      )}
    </div>
  );
};

export const LogoUpload: SmartStep = () => {
  const formik = useFormikContext<any>();

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='w-full mt-16'>
          <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
            Insira 2 fotos do seu acompanhamento com os agricultores*
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            *Solicite que seu cliente assine o Termo de Uso de Imagem.
          </h3>
          <div className=' mt-4 text-base font-medium text-gray-800'>
            <p>Para melhor aproveitamento, recomendamos:</p>
            <ul className='mt-2 space-y-1 list-inside'>
              <li>- Formato PNG ou JPG</li>
              <li>- Formato vertical</li>
              <li>- Peso máximo de 16MB</li>
            </ul>
          </div>
          <div className='flex flex-row mt-4 space-x-4'>
            <PictureInput label='foto 1' name='foto1' />
            <PictureInput label='foto 2' name='foto2' />
          </div>
        </div>
      </div>

      <div className='w-full mt-6'>
        <Stepper
          buttonState={
            formik.values?.foto1 && formik.values?.foto2
              ? ButtonState.normal
              : ButtonState.disabled
          }
        />
      </div>
    </div>
  );
};

LogoUpload.validation = Yup.object().shape({
  foto1: Yup.mixed()
    .test(
      'fileSize',
      'File Size is too large',
      (value) => value?.size <= FILE_SIZE
    )
    .test('fileType', 'Unsupported File Format', (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    ),
  foto2: Yup.mixed()
    .test(
      'fileSize',
      'File Size is too large',
      (value) => value?.size <= FILE_SIZE
    )
    .test('fileType', 'Unsupported File Format', (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    ),
});
