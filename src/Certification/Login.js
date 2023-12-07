import { FormControl, FormLabel, Input, Button } from '@mui/material';

function Title() {
  return (
    <h1>ログイン</h1>
  );
}

function InputUserInfo({promptValue}) {
  return (
    <>
      <FormLabel>{promptValue}</FormLabel>
      <Input></Input>
    </>
  );
}

function SubmitButton() {
  return (
    <Button variant="contained">ログイン</Button>
  );
}

function Login() {
  return (
    <>
      <Title />
      <InputUserInfo />
      <SubmitButton />
    </>
  );
}

export default Login;