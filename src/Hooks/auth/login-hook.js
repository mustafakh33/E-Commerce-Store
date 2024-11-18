import { useEffect, useState } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actAuthLogin from './../../Redux/auth/act/actAuthLogin';

const LoginHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginUser,error } = useSelector((state) => state.authentication);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const validationValues = () => {
    let isValid = true;
    if (email === "") {
        notify("Please enter your email", "error");
        isValid = false;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        notify("Invalid email address", "error");
        isValid = false;
      }
    if (password === "") {
      notify("Please enter your password", "error");
      isValid = false;
    } else if (password.length < 8) {
      notify("Password must be at least 8 characters long", "error");
      isValid = false;
    }
    return isValid;
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    // validationValues  === false (مما يعني أن هناك أخطاء في البيانات)،  !validationValues() = true  فإن التعبير سيكون
    // validationValues  === true (مما يعني أن لا يوجد أخطاء في البيانات)،  !validationValues() = false  فإن التعبير سيكون
    if (!validationValues()) return;

    try {
      await dispatch(
        actAuthLogin({
          email,
          password,
        })
      ).unwrap();
      notify("You have successfully sign in", "success");
      setTimeout(() => {
        window.location.href="/"; // Navigate to the desired route after successful registration
      }, 2000);
    } catch (e) {
      notify(error, "error");
    }
  };

  useEffect(() => {
    if (loginUser && loginUser.token) {
      localStorage.setItem("token", loginUser.token);
      localStorage.setItem("user", JSON.stringify(loginUser));
    } else{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
  }, [loginUser]);


  return [email,password,onChangeEmail,onChangePassword,OnSubmit];
};

export default LoginHook;
