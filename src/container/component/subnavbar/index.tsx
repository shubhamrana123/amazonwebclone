import { Button, Stack, Typography } from "@mui/material"

const SubNavbar  = () =>{
    return (
        <>
        <Stack id ='container' sx={{
            border:1,borderColor:'blue',
            backgroundColor: "#00453e",
            display:'flex',
            flexDirection:'row',
        }}>
<Stack className="leftSubContainer" direction={'row'} spacing={'10px'} sx={{
    color:'white',
    justifyContent:'center',
    alignItems:'center'
}}>
<Stack>
    <Button>All</Button>
</Stack>
<Typography>Today's Deal</Typography>
<Typography>Registry</Typography>
<Typography>Customer Service</Typography>
<Typography>GiftCards</Typography>
<Typography>Sell</Typography>

</Stack>
{/* <Stack className="rightSubContainer">
<Typography>
    Shop Cyber Monday deals
</Typography>
</Stack> */}
        </Stack>
        </>
    )
}
export default SubNavbar