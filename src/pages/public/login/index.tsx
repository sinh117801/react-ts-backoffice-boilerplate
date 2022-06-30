import { lazy } from 'react';
import { Stack } from "react-bootstrap";

const FormLogin = lazy(() => import('components/FormLogin'));

export default function Login() {
  return (
    <Stack bsPrefix="hstack" className="vh-100">
      <main id="login-page" className="w-25 m-auto">
        <FormLogin />
      </main>
    </Stack>
  );
}
