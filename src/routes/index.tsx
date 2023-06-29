import {TextField} from "@suid/material";
import {Suspense} from "solid-js";
import {Visibility} from "@suid/icons-material";
import {ErrorBoundary} from "solid-start";

export default function Home() {
    return (
        <main>
            Text works
            <br/>
            <TextField InputProps={{endAdornment: "Text"}}/>
            <br/>
            This works too, when hot reloading, but not when refreshing the page
            <br/>
            <ErrorBoundary>
                <TextField InputProps={{endAdornment: <Visibility/>}}/>
            </ErrorBoundary>
        </main>
    );
}
