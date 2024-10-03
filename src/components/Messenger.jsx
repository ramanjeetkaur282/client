
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from '@mui/material';

const Messanger=()=>{

    const Component=styled(Box)`
        height:100vh;
        background: #DCDCDC;
    `

    const Header=styled(AppBar)`
        height:200px;
        background-color:#00bfa5;
        box-shadow:none;
    `

    return (
        <Component>
        <Header>
            <Toolbar/>
        </Header>
        <LoginDialog/>
        </Component>
    )
}

export default Messanger;