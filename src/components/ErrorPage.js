import { useRouteError } from "react-router-dom"

const ErrorPage = ()=>{
    const error = useRouteError();
    console.log(error);
    return(
        <h2>{error.data}</h2>

    )
}
export default ErrorPage
