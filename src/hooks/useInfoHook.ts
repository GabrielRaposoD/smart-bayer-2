// Modules Import
import * as Yup from 'yup';

// Application Import
import { useInfo } from '@store/useInfo';

const validationSchema = Yup.object({
  fullname: Yup.string().required('This field is required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
});

export function useInfoHook() {
  const { firstName, fullName, email, phone } = useInfo();

  async function checkValid(payload: any) {
    try {
      const data = await validationSchema.validate(payload);
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log(err.errors);
    }
  }

  return {
    operations: { checkValid },
  };
}
