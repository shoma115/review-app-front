import { 
  FormControl, 
  FormLabel, 
  Input, 
  InputLabel, 
  Button 
} from '@mui/material';
import { useState } from 'react';
import { useLogin } from '../Querys/AuthQuery';

const LoginPage = () => {
  const login = useLogin();
  const [ email, setEmail ] = useState("test@example.com");
  const [ password, setPassword ] = useState("shoma1030");
  const handleLogin = (event) => {
    // ブラウザのデフォルトの動作（リクエストを作成し、リロードを行う）をキャンセルし、設定したログイン動作を行う。
    event.preventDefault();
    login.mutate({email: email, password: password});
    console.log(email)
    console.log(password)
  }

  return (
    <>    
      <form onSubmit={handleLogin}>
        <FormLabel>ログイン</FormLabel>
        <FormControl>  
          <InputLabel>メール</InputLabel>
          <Input></Input>
        </FormControl>
        <FormControl> 
          <InputLabel>パスワード</InputLabel>
          <Input></Input>
        </FormControl>
        <Button variant="contained" type="submit" >ログイン</Button>
      </form>
    </>
  )
} 

export default LoginPage;