// Module Imports
import React from 'react';

// Application Import
import { ButtonState } from '@typings/index';
import { useFormikContext } from 'formik';

// Components Import
import { Button } from '@components/index';
import { useSteps } from 'context/formStepsContext';
interface StepperProps {
  buttonState?: ButtonState;
}

const Stepper: React.FC<StepperProps> = ({ buttonState }) => {
  const formik = useFormikContext();
  const steps = useSteps();

  return (
    <div className='flex justify-start w-full space-x-4'>
      <div className='w-1/2'>
        <Button
          title='Voltar'
          state={ButtonState.inverse}
          onClick={() => steps.setCurrentStep(steps.currentStep - 1)}
        />
      </div>
      <div className='w-1/2'>
        <Button
          type='submit'
          title={steps.currentStep === 9 ? 'Criar Vídeo' : 'Continuar'}
          state={
            buttonState
              ? buttonState
              : Object.keys(formik.errors).length === 0 && formik.dirty
              ? ButtonState.normal
              : ButtonState.disabled
          }
        />
      </div>
    </div>
  );
};

export { Stepper };
