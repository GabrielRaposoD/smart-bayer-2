// Module Imports
import React from 'react';

// Application Import
import { MainLayout } from '@layout/index';

// Components Import
import { StepsController } from '@components/StepsController';
import { items as StepItems } from 'mocks/screenComponents';
import { Form, useFormikContext } from 'formik';
import { StepContext } from 'context/formStepsContext';

import { templates } from '@mocks/templates';
import { createVideo } from 'service/video.service';

const initialValues = {
  template: null,
  company: null,
  product: null,
  oportunity: null,
  service: null,
  experience: null,
  defensive: null,
  defensiveProduct: null,
  foto1: null,
  foto2: null,
  farmerName: '',
  phone: '',
  name: '',
  email: '',
  video: { id: '' },
};

const IndexPage: React.FC = () => {
  async function handleSubmit(values, { setFieldValue }) {
    const data = await createVideo({ ...values });
    return setFieldValue('video', data);
  }

  return (
    <StepsController initialValues={initialValues} onSubmit={handleSubmit}>
      {({ currentStep: formStep, setCurrentStep, values }) => {
        const template = templates.find(
          (t) => t.id === values.template?.id
        ) || { steps: [1, 2, 3] };
        const currentStep = template.steps[formStep] || 0;
        const item = StepItems[formStep > 0 ? currentStep - 1 : formStep];

        return (
          <StepContext.Provider
            value={{ currentStep: formStep, setCurrentStep }}
          >
            {template.steps[formStep] === 11 ? (
              <Form className='h-full'>
                <item.Component
                  currentStep={formStep}
                  setCurrentStep={setCurrentStep}
                />
              </Form>
            ) : (
              <MainLayout
                img={item?.img}
                isCover={item?.isCover}
                hasCard={item?.hasCard}
                cardImg={values?.video.thumbnail_url || item?.cardImg}
                hasMobileImg={item?.hasMobileImg}
                cardWide={item?.cardWide}
              >
                <Form className='h-full'>
                  <item.Component
                    currentStep={formStep}
                    setCurrentStep={setCurrentStep}
                  />
                </Form>
              </MainLayout>
            )}
          </StepContext.Provider>
        );
      }}
    </StepsController>
  );
};

export { IndexPage };
