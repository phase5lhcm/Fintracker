import { useRef, useState, useEffect, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import Link from "@mui/material/Link";

const REGISTER_URL = "/api/register";
const LOGIN_URL = "/api/login";

const Register = () => {
  const { setAuth } = useContext(AuthContext);
  // TODO - refector code and remove unnecessary code (commented code)
  const [userDetails, setUserDetails] = useState({
    firstName: " ",
    lastName: " ",
    username: " ",
    email: "",
    password: "",
    error: "",
    loading: false,
    redirect: false,
    success: false,
  });
  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
    error: false,
    success: false,
  });
  const [loginInstructions, setLoginInstructions] = useState(false);
  const [disableTextField, setDisableTextField] = useState(false);
  // const [firstName, setFirstName] = useState(" ");
  // const [username, setUsername] = useState(" ");
  // const [lastName, setlastName] = useState(" ");
  // const [email, setEmail] = useState(" ");
  // const [address, setAddress] = useState(" ");
  // const [password, setPassword] = useState(" ");
  // const [error, setError] = useState(" ");
  // const [success, setSuccess] = useState(" ");
  const initialValues = {
    firstName: " ",
    lastName: " ",
    username: " ",
    email: "",
    password: "",
  };

  // const phoneRegexExp = /^\d-\d{3}-\d{4}$/;

  const userValidationSchema = yup.object().shape({
    firstName: yup.string().required("*"),
    lastName: yup.string().required("*"),
    username: yup.string().required("*"),
    email: yup.string().email("Invalid email").required("*"),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Formik handles the form's default reloading so no need to prevent default behavior per event triggered
  // i.e e.preventDefault() is unnecessary
  const handleRegisterFormSubmit = async (values, { setSubmitting }) => {
    const { username, firstName, lastName, email, password } = values;
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ firstName, lastName, username, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setUserDetails({ ...userDetails, error: false });
      setAuth({ username, email, password, isAdmin, accessToken });
      const accessToken = response?.data.accessToken();
      const isAdmin = response?.data.isAdmin;
    } catch (error) {
      console.log("error: " + error);
      setUserDetails({ ...userDetails, error, success: false });
    } finally {
      setSubmitting(false);
    }
  };

  //login details
  const handleFormSubmit = async (values, { setSubmitting }) => {
    const { username, password } = values;
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data.accessToken();
      const isAdmin = response?.data.isAdmin;
      setUserDetails({ ...userLoginDetails, error: false });
      setAuth({ username, password, isAdmin, accessToken });
    } catch (error) {
      console.log("error: " + error);
      setUserDetails({ ...userLoginDetails, error, success: false });
    } finally {
      setSubmitting(false);
    }
  };

  const isLoginClicked = () => {
    setLoginInstructions(!loginInstructions);
  };

  const errorMessage = () => (
    <div
      className="alert alert-danger"
      style={{ display: userDetails.error ? "" : "none" }}
    >
      Sign up error
    </div>
  );
  const successMessage = () => (
    <div
      className="alert alert-info"
      style={{ display: userDetails.success ? "" : "none" }}
    >
      Account created. Please Login.
    </div>
  );

  const userLoginInstructions = () => {
    return <div>Enter email address to sign in</div>;
  };

  const disableBtn = () => {
    setDisableTextField(!disableTextField);
  };

  return (
    <>
      {errorMessage()}
      {successMessage()}
      {loginInstructions && userLoginInstructions()}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                disabled={disableTextField}
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="firstname"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                disabled={disableTextField}
                fullWidth
                variant="filled"
                type="text"
                label="Surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                disabled={disableTextField}
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box
              mt="20px"
              display="flex"
              sx={{ justifyContent: "space-around" }}
            >
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ backgroundColor: "#4a90e2" }}
                disabled={isSubmitting}
              >
                Register
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={isLoginClicked}
                sx={{ backgroundColor: "#4a90e2" }}
                disabled={isSubmitting}
              >
                {disableTextField ? "Enable" : "Disable"} Fields
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ paddingLeft: "3em", paddingTop: "3em" }}
            >
              <Link href="#" color="#ffffff">
                Forgot username?
              </Link>
              <Link href="#" color="#ffffff">
                Forgot password?
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Register;
