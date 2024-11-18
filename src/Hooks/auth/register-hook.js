import { useEffect, useState } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import actAuthRegister from "../../Redux/auth/act/actAuthRegister";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createUser } = useSelector((state) => state.authentication);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const validationValues = () => {
    let isValid = true;
    if (name === "") {
      notify("Please enter your username", "error");
      isValid = false;
    } else if (name.length < 2) {
      notify("Name must be at least 2 characters long", "error");
      isValid = false;
    }
    if (email === "") {
      notify("Please enter your email", "error");
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      notify("Invalid email address", "error");
      isValid = false;
    }
    if (phone === "") {
      notify("Please enter your phone number", "error");
      isValid = false;
    } else if (!/^[0-9]+$/.test(phone) || phone.length < 10) {
      notify("Phone number must be at least 10 digits", "error");
      isValid = false;
    }
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

  const OnSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    // validationValues  === false (مما يعني أن هناك أخطاء في البيانات)،  !validationValues() = true  فإن التعبير سيكون
    // validationValues  === true (مما يعني أن لا يوجد أخطاء في البيانات)،  !validationValues() = false  فإن التعبير سيكون
    if (!validationValues()) return;

    try {
      await dispatch(
        actAuthRegister({
          name,
          email,
          password,
          rePassword: confirmPassword,
          phone,
        })
      ).unwrap();
      notify("Registration successful!", "success");
      setTimeout(() => {
        navigate("/login"); // Navigate to the desired route after successful registration
      }, 2000);
    } catch (error) {
      notify(error.message || "Email and password already exist", "error");
    }
  };

  useEffect(() => {
    if (createUser && createUser.token) {
      localStorage.setItem("token", createUser.token);
    }
  }, [createUser]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
};

export default RegisterHook;
