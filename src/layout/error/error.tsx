/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 09:25:28
 * @LastEditors: zhaohaohua@bytegreen.cn
 * @LastEditTime: 2023-01-30 09:50:11
 */
import { useRouteError } from "react-router-dom";

interface ErrorType {
    statusText?: number,
    message?: String
}
export default function ErrorPage() {
    const error = useRouteError() as ErrorType;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}