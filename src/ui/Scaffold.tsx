import {createTheme, CssBaseline, ThemeProvider, Typography} from "@suid/material";
import {ParentProps} from "solid-js";


export default function Scaffold({children}: ParentProps) {
    return <>
   
            <Typography variant={"body1"} component={"div"} sx={{
                minHeight: "calc(100vh - 56px)",
                display: 'flex', flexDirection: 'column'
            }}>
                {children}
            </Typography>
       
    </>
};
