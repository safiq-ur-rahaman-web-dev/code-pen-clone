import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Box, styled} from '@mui/material'
import { DataContext } from '../context/DataProvider'


const Container = styled(Box)`
    height: 41vh;
    margin-top: 10px;
`
const Result = () => {
    const {html, css, js} = useContext(DataContext)
    const srcCode = `
        <html>${html}</html>
        <style>${css}</style>
        <script>${js}</script>
    `
    const [src, setSrc] = useState("")
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrc(srcCode)
        }, 1000)
        return () => clearTimeout(timeOut)
    }, [html, css, js])
  return (
    <Container>
        <iframe
            title='Output'
            srcDoc={src}
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            style={{border: "none"}}
        />
    </Container>
  )
}

export default Result