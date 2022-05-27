import { MouseEventHandler } from "react";

export interface ReactComponentProps {
    children?: React.ReactNode,
    handleClose?: MouseEventHandler<HTMLButtonElement>,
    handleSignUp?: Function,
    visible?: boolean,
}