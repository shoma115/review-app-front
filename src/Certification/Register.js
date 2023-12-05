import { FormControl, FormLabel, Input, Button } from '@mui/material';

function Title() {
  return (
    <h1>ユーザー登録</h1>
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
    <Button variant="contained">登録</Button>
  );
}

function Register() {
  return (
    <>
      <Title />
      <InputUserInfo />
      <SubmitButton />
    </>
  );
}

export default Register;