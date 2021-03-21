import { useMemo, useState, createContext } from 'react';
import { Formik } from 'formik';
import { StepContext } from 'context/formStepsContext';
import { items } from '@mocks/screenComponents';
import { templates } from '@mocks/templates';
import * as Yup from 'yup';

const emptyYupValidation = Yup.object().shape({});

export const StepsController = ({
  onSubmit,
  children,
  initialValues: customInitialValues,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  // const validationSchema = useMemo(
  //   () => validationSchemas.reduce((prev, current) => prev.concat(current)),
  //   [validationSchemas]
  // )
  const [steps, setSteps] = useState([0, 1]);
  const initialValues = useMemo(() => customInitialValues, [
    customInitialValues,
  ]);

  // const validationSchemasCascading = useMemo(
  //   () =>
  //     validationSchemas.reduce((prev, current) => {
  //       const previousSchema = prev.length === 0 ? null : prev[prev.length - 1]
  //       return prev.concat(
  //         previousSchema ? previousSchema.concat(current) : current
  //       )
  //     }, []),
  //   [validationSchemas]
  // )

  return (
    <Formik
      validationSchema={
        items[steps[currentStep] - 1]?.validation || emptyYupValidation
      }
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        if (currentStep === steps.length - 1 && currentStep > 1) {
          return onSubmit(values, actions);
        }
        if (values.template) {
          const template = templates.find((t) => t.id === values.template?.id);
          setSteps(template.steps);
        }
        setCurrentStep((v) => v + 1);
      }}
    >
      {(formik) => children({ ...formik, currentStep, setCurrentStep })}
    </Formik>
  );
};
