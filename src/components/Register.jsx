import { useRef, useState, useEffect, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import Link from "@mui/material/Link";

const LOGIN_URL = "/api/register";

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  // focuses on user input
  useEffect(() => {});

  // remove error messages as user changes inputs in password field
  useEffect(() => {});

  const { setAuth } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setlastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  };

  const phoneRegexExp = /^\d-\d{3}-\d{4}$/;

  const userValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .matches(phoneRegexExp, "Please use a valid phone number")
      .required("*"),
    lastName: yup.string().required("*"),
    email: yup.string().email("Invalid email").required("*"),
    address: yup.string().required("*"),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const preventDefault = (event) => event.preventDefault();

  const handleFormSubmit = async ({ firstName, lastName, email, address }) => {
    preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ firstName, lastName, email, address }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setFirstName(" ");
      setlastName(" ");
      setEmail(" ");
      setAddress(" ");
      setSuccess(true);
      const accessToken = response?.data.accessToken();
      const isAdmin = response?.data.isAdmin;
      setAuth({ firstName, password, isAdmin, accessToken });
    } catch (error) {
      setError("error: " + error);
    }
  };

  return (
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
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
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
              label="Address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
              name="address"
              error={!!touched.address && !!errors.address}
              helperText={touched.address && errors.address}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box mt="20px" display="flex" sx={{ justifyContent: "space-around" }}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ backgroundColor: "#4a90e2" }}
            >
              Register
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ backgroundColor: "#4a90e2" }}
            >
              Login
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
  );
};

export default Register;
