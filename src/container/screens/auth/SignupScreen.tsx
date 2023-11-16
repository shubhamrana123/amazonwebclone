
import { Button, Paper,Stack, TextField, Typography } from '@mui/material'
const SignupScreen = () => {
  return (
   <Stack sx={{
    border:1,
    borderColor:'red',
    height:'100vh',
alignItems:'center',
justifyContent:'center'
   }}>
    <Paper sx={{
      width:'35vw'
    }}>

<Stack rowGap={'10px'}
padding='10px'>
  <Typography variant="h5">Create Account</Typography>
  <Stack rowGap={'20px'}>
    <TextField
     required
    size="small"
    label='Your name'/>
      <TextField
     required
    size="small"
    label='Mobile number or email'/>
      <TextField
     required
    size="small"
    label='Password'/>
        <TextField
     required
    size="small"
    label='Re-enter password'/>
    <Button variant='contained' sx={{borderRadius:'8px'}}>
      Continue
    </Button>
  </Stack>
  <Stack flexDirection={'row'}>
<Typography sx={{
    textTransform: 'none',
    color:'#425466',
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: '12px'
}}>
By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.

</Typography>
<Typography></Typography>
  </Stack>
</Stack>
    </Paper>
   </Stack>
  )
}

export default SignupScreen