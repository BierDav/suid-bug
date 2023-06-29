import {createTheme, CssBaseline, ThemeProvider, Typography} from "@suid/material";
import {ParentProps} from "solid-js";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff0000',
        },
        secondary: {
            main: '#00ff00',
        },
        error: {
            main: '#0000ff',
        },
    }
})
export default function Scaffold({children}: ParentProps) {
    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Typography variant={"body1"} component={"div"} sx={{
                minHeight: "calc(100vh - 56px)",
                display: 'flex', flexDirection: 'column'
            }}>
                {children}
            </Typography>
        </ThemeProvider>
    </>
};
