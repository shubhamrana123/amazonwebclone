import {
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Validate_Email, Validate_Password } from "../../config/helper-methods";
const SignupScreen = () => {
  const [email,setEmail] = useState("")
  const [emailValidationMessage,setEmailValidationMessage] = useState<any>("")
  const [password,setPassword] = useState<any>("")
  const [isPasswordError,setIsPasswordError] = useState<any>(false)
  console.log('passwordError',setIsPasswordError);
  
  const handleEmail = (event:any) =>{
    setEmail(event?.target?.value)
    setEmailValidationMessage(Validate_Email(event?.target?.value))
  }
  const handlePassword = (event:any) =>{
setPassword(event?.target?.value)
setIsPasswordError(Validate_Password(event?.target?.value))
  }
  return (
    <Stack
      sx={{
        border: 1,
        borderColor: "red",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {" "}
      <Typography>Amazon</Typography>
      <Paper
        sx={{
          width: "35vw",
        }}
      >
        <Stack rowGap={"20px"} padding="10px">
          <Typography variant="h5">Create Account</Typography>
          <Stack rowGap={"20px"}>
            <TextField required size="small" label="Your name" />
            <TextField required size="small" label="Mobile number or email"  
            error={emailValidationMessage===null}
            helperText={emailValidationMessage===null?"Please enter valid email address":""}
            onChange= {(event)=>handleEmail(event)}/>
            <TextField required size="small" label="Password" onChange={(event)=>handlePassword(event)}/>
            <TextField required size="small" label="Re-enter password" />
            <Button variant="contained" sx={{ borderRadius: "8px" }}>
              Continue
            </Button>
          </Stack>
          <Stack flexDirection={"row"} columnGap="5px">
            <Typography
              sx={{
                textTransform: "none",
                color: "#425466",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              By creating an account, you agree to Amazon's
            </Typography>
            <Typography
              sx={{
                textTransform: "none",
                color: "blue",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Conditions of Use
            </Typography>
            <Typography
              sx={{
                textTransform: "none",
                color: "#425466",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              and
            </Typography>
            <Typography
              sx={{
                textTransform: "none",
                color: "blue",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Privacy Notice.
            </Typography>
          </Stack>
          <Divider />
          <Paper>
            <Typography
              sx={{
                textTransform: "none",

                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              Buying for work?
            </Typography>
            <Typography
              sx={{
                textTransform: "none",
                color: "blue",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Create a free business account
            </Typography>
          </Paper>
          <Stack flexDirection={"row"} columnGap={"5px"}>
            <Typography
              sx={{
                textTransform: "none",

                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              Already have an account?{" "}
            </Typography>
            <Typography
              sx={{
                textTransform: "none",
                color: "blue",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
              }}
            >
              Sign in
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default SignupScreen;
