// @refresh reload
import {Suspense} from "solid-js";
import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import "./root.css";
import {createTheme, CssBaseline, ThemeProvider} from "@suid/material";
import Scaffold from "~/ui/Scaffold";


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
export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - Bare</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <ThemeProvider theme={theme}>
                            <CssBaseline enableColorScheme />
                            <Routes>
                                <FileRoutes/>
                            </Routes>
                        </ThemeProvider>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    );
}
