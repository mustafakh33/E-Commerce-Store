import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actAuthResetPassword from "./../../Redux/auth/act/actAuthResetPassword";
import notify from "../useNotifaction";

const ResetPasswordHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const validationValues = () => {
    let isValid = true;
    if (password === "") {
      notify("Please enter your password", "error");
      isValid = false;
    } else if (password.length < 8) {
      notify("Password must be at least 8 characters long", "error");
      isValid = false;
    }
    if (confirmPassword === "") {
      notify("Please confirm your password", "error");
      isValid = false;
    } else if (password !== confirmPassword) {
      notify("Passwords do not match", "error");
      isValid = false;
    }

    return isValid;
  };
  const [email,setEmail]= useState()
  useEffect(()=>{
    setEmail(localStorage.getItem("user-email"));
  },[])

  const OnSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    if (!validationValues()) return;
    try {
      await dispatch(
        actAuthResetPassword({
          "email": email,
          "newPassword": confirmPassword,
        })
      ).unwrap();
      notify("Password has been activated successfully.", "success");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      if (error && error.message) {
        notify(error.message, "error");
      } else {
        notify("Please request a new code.", "error");
      }
    }
  };
  return [password,confirmPassword,onChangePassword,onChangeConfirmPassword,OnSubmit];
};

export default ResetPasswordHook;
