import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'


const Appbar = styled(AppBar)`
background-color: #080808;
height:9vh
`
const ToolBar = styled(Toolbar)`
display: flex;
align-items: center;
gap: 45vw;
padding: .5vh 1.2vw;
`
const Header = () => {
    const logo = `https://cdn-icons-png.flaticon.com/512/876/876019.png`;
  return (
    <div>
      <Appbar position='staic'>
        <ToolBar>
        <img src={logo} alt="logo" style={{width: 40}}/>
        <h3><code>Online Code Editor</code></h3>
        </ToolBar>
      </Appbar>
      
    </div>
  )
}

export default Header
