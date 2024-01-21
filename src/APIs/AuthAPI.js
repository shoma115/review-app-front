import axiosApiSetBaseURL from '../BaseURL';

// ユーザー情報を取得する非同期関数
export const getUsers = async() => {  
  const { user } = await axiosApiSetBaseURL.get('api/user');
  return user;
}

// ユーザー登録を行う際の非同期関数
export const register = async({name, email, password}) => {
  try {
    const { data } = await axiosApiSetBaseURL.post('api/register', {
      name,
      email,
      password,
    })
    return data;
  }
  catch(error) {
    console.log(error);
    throw error;
  }
}

// ログインを行う非同期関数。ユーザー入力のemailとPWを引数にとる。
export const login = async({email, password}) => {
  try {
    const { data } = await axiosApiSetBaseURL.post('api/login', {email, password});
    return data;
  }
  catch(error) {
    console.log(error);
    throw error;
  }
}

// ログアウトを行う非同期関数。
export const logout = () => {
  const { data } = axiosApiSetBaseURL.post('api/logout');
  return data;
}