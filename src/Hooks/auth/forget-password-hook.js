import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import actAuthForgetPassword from "../../Redux/auth/act/actAuthForgetPassword";
import notify from "../useNotifaction";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const validationValues = () => {
    let isValid = true;
    if (email === "") {
      notify("Please enter your email", "error");
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      notify("Invalid email address", "error");
      isValid = false;
    }
    return isValid;
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    // Perform validation
    if (!validationValues()) return;
    // Store email in localStorage
    localStorage.setItem("user-email", email);
    try {
      await dispatch(actAuthForgetPassword({ email })).unwrap();
      notify("code has been sent to your email successfully.", "success");
      setTimeout(() => {
        navigate("/user/verify-code");
      }, 2000);
    } catch (e) {
      notify("This account does not exist with us", "error");
    }
  };
  return [onChangeEmail, onSubmitForm, email];
};

export default ForgetPasswordHook;
