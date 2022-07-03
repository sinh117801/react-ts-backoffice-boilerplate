import { lazy } from 'react';
import { Form } from 'react-bootstrap';
import { DefaultValues, useForm } from 'react-hook-form';

const InputText = lazy(() => import('components/share/InputText'));

type TFormLogin = {
  email: string;
  password : string;
}

export default function FormLogin() {
  const defaultValues: DefaultValues<TFormLogin>= {
    email: '',
    password: ''
  };

  const { control } = useForm<TFormLogin>({
    defaultValues
  });

  return (
    <Form>
      <InputText id="email" control={control} name="email" />
    </Form>
  );
}
