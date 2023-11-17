import { Button, Stack, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
const NavigationBar = () => {
  const [age, setAge] = useState("");
  const [categoryList, setCategorylist] = useState(null);
  const categoryLists = [{}];
  return (
    <>
      <Stack
        className="nav-container"
        flexDirection={"row"}
        sx={{
          border: 1,
          borderColor: "green",
          height: "10vh",
          columnGap: "8px",
          backgroundColor: "#00453e",
          color: "white",
          fontWeight: "bolder",
          alignItems: "center",
        }}
      >
        <Typography sx={{ border: 1, borderColor: "brown" }}>Amazon</Typography>
        <Stack sx={{ border: 1, borderColor: "red" }}>
          <Typography>Deliver to</Typography>
          <Typography>India</Typography>
        </Stack>

        <Stack
          className="search-bar"
          flexDirection={"row"}
          sx={{
            backgroundColor: "white",
            alignItems: "center",
            border: 1,
            borderColor: "blue",
            height: "8vh",
            width: "50vw",
          }}
        >
          <Stack className="nav-search-left">
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 70, color: "white" }}
            >
              <InputLabel id="demo-simple-select-filled-label">All</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={categoryList}
                //   onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Arts and crafts</MenuItem>
                <MenuItem value={20}>Beauty and personal care</MenuItem>
                <MenuItem value={30}>books</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack className="nav-search-mid">
            <TextField
              placeholder="Search Amazon"
              size="small"
              sx={{ width: 500 }}
            />
          </Stack>
          <Stack className="nav-search-right">
            <Button>Search</Button>
          </Stack>
        </Stack>
        <Stack className="language">
        <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 70, color: "white" ,backgroundColor:'white'}}
            >
              <InputLabel id="demo-simple-select-filled-label">En</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={categoryList}
                //   onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Arts and crafts</MenuItem>
                <MenuItem value={20}>Beauty and personal care</MenuItem>
                <MenuItem value={30}>books</MenuItem>
              </Select>
            </FormControl>
        </Stack>
        <Stack className="signin">
            <Typography fontWeight={'bold'}>Accounts and list</Typography>
        </Stack>
        <Stack className="signin">
            <Typography fontWeight={'bold'}>Return an orders</Typography>
        </Stack>
        <Stack className="signin">
            <Typography fontWeight={'bold'}>Cart</Typography>
        </Stack>
      </Stack>
    </>
  );
};
export default NavigationBar;
