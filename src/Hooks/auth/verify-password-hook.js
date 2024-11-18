import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";
import actAuthVerifyPassword from "../../Redux/auth/act/actAuthVerifyPassword";

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };
  const validationValues = () => {
    let isValid = true;
    if (code === "") {
      notify("Please enter your code", "error");
      isValid = false;
    }
    return isValid;
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    // Perform validation
    // validationValues  === false (مما يعني أن هناك أخطاء في البيانات)،  !validationValues() = true  فإن التعبير سيكون
    // validationValues  === true (مما يعني أن لا يوجد أخطاء في البيانات)،  !validationValues() = false  فإن التعبير سيكون
    if (!validationValues()) return;
    try {
      await dispatch(actAuthVerifyPassword({ resetCode: code })).unwrap();
      notify("Activation code is correct", "success");
      setTimeout(() => {
        navigate("/user/reset-password");
      }, 2000);
    } catch (e) {
      notify("The code is invalid or expired.", "error");
    }
  };
  return [onChangeCode, onSubmitForm, code];
};
export default VerifyPasswordHook;
