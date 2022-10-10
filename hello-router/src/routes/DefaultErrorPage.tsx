import { useRouteError } from "react-router-dom"

interface Error{
    statusText: string
    message: string
}

export function DefaultErrorPage(){

    const error = useRouteError() as Error

    return (
        <>
            <h1>Error Page!</h1>
            <p>{error.statusText || error.message}</p>
        </>
    )
}