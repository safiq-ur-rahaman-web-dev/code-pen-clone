import React from 'react'
import {Box, styled} from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../App.css'

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 8px 8px;
`
const Heading = styled(Box)`
display: flex;
background-color: #1d1e22;
padding: 9px 12px;
`
const Header = styled(Box)`
    display: flex;
    background-color: #060606;
    color: #aaaebc;
    justify-content: space-between;
    font-weight: 700;
`
const Editor = (props) => {
    const [open, setOpen] = useState(true)
    const handleChange = (editor, data, value) => {
        props.onChange(value)
    }
  return (
    // This is the main container Box for code editor
    <Container style={open ? null : {flexGrow: 0}}>
        {/* This upper box is for the upper part of the editor when language name and other buttons exist */}
        <Header>
            <Heading>
                <Box component="span" style={{backgroundColor: props.color , color: "#fff", display: "flex", placeContent:'center', height: 20, width: 20, borderRadius: 5, marginRight: 5, paddingBottom: 2}}>
                    {props.icon}
                </Box>
                {props.language}
            </Heading>
            <CloseFullscreenIcon
                fontSize='small'
                style={{alignSelf: 'center'}}
                onClick={() => setOpen(prevState => !prevState)}
            />
        </Header>

        {/* This lower box is for writing the code */}
        <ControlledEditor 
        value={props.value}
        onBeforeChange={handleChange}
        className='controlled-editor'
        options={{
            theme: "material",
            lineNumbers: true
        }}
        />
    </Container>
  )
}

export default Editor
