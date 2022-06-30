import { lazy } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const InputText = lazy(() => import('components/share/InputText'));

type TFormLogin = {
  email: string;
  password : string;
}

export default function FormLogin() {
  const { control } = useForm<TFormLogin>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <Form>
      <InputText id="email" control={control} name="email" />
    </Form>
  );
}
