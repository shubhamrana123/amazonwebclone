import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Validate_Email } from "../../config/helper-methods";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] =
    useState<any>("");
    console.log("emailValidationMessage",emailValidationMessage);
    
  const styles = {
    flex: 1,
    paperContainer: {},
  };
  const handleEmail = (event: any) => {
    console.log("email", event?.target?.value);

    setEmail(event?.target?.value);
    setEmailValidationMessage(Validate_Email(event?.target?.value));

  };
  return (
    <>
      <Stack
        sx={{
          // border:1,borderColor:'green',
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <Stack>
          <Typography>Amazon</Typography>
        </Stack>
        <Paper
          style={{
            // border:1,borderColor:'blue',
            width: "35vw",
          }}
        >
          <Stack
            flexDirection="column"
            sx={{
              //  border:1,borderColor:'blue',
              rowGap: "10px",
              padding: 2,
            }}
          >
            <Typography variant="h6"> Sign in</Typography>
            <TextField
              required
              size="small"
              label="Email or Phone number"
              error={emailValidationMessage===null}
              helperText={emailValidationMessage===null?"Please enter valid email address":""}
              onChange={(event) => handleEmail(event)}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "yellow",
                borderRadius: "15px",

                color: "black",
              }}
            >
              Continue
            </Button>
            <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#425466",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                By continuing, you agree to Amazon's
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
            <Stack flexDirection={"row"} columnGap={"4px"}>
              <Typography
                sx={{
                  textTransform: "none",
                  color: "blue",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                arrow
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
                {" "}
                Need help?
              </Typography>
            </Stack>
            <Divider />
            <Stack>
              <Typography
                sx={{
                  textTransform: "none",

                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Buying For work
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
                Shop on Amazon Business
              </Typography>
            </Stack>
          </Stack>
        </Paper>
        <Stack rowGap="10px">
          <Typography
            sx={{
              textTransform: "none",
              color: "#425466",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            New to Amazon ?
          </Typography>
          <Paper>
            <Button>Create your Amazon account</Button>
          </Paper>
        </Stack>

        <Stack></Stack>
      </Stack>
    </>
  );
};

export default LoginScreen;
