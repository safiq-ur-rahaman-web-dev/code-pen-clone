import { Box, styled } from '@mui/material'
import React from 'react'
import Editor from './Editor'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  flex-wrap: wrap;
  /* height: 50vh; */
`
const Code = () => {
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext)
  return (
    <Container>
      <Editor language="HTML" icon="/" color="#ff3c41" value={html} onChange={setHtml}/>
      <Editor language="CSS" icon="*" color="#0ebeff" value={css} onChange={setCss}/>
      <Editor language="JavaScript" icon="{}" color="#fcd000" value={js} onChange={setJs}/>
    </Container>
  )
}

export default Code
