import { useAuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export const AuthGuard = (props) => {
  const { loginState } = useAuthContext()
  console.log(loginState.current)
  // ログインしている時、つまりloginStateがtrueのとき
  if(loginState.current) {
    return <>{props.component}</>;
  } else {
    return <Navigate to={props.redirect} replace={false} />;
  }

}