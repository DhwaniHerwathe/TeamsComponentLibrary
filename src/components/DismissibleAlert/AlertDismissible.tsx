import * as React from "react";
import { Alert, CloseIcon } from '@fluentui/react-northstar';
import './alert.css';

export interface IAlertDismissProps {
    headerName?: string;
}
export const AlertDismiss : React.FC<IAlertDismissProps> = ({
    headerName,
    ...props
  }) => {
    const [dismiss, setDismiss] = React.useState(false);
    return (
        !dismiss
        ? <div className='dismissibleAlert'>
            <Alert content="This is a dismissible Alert, Close it if you dont want to see this!" className='alertBody' />
            <CloseIcon className='alertClose' onClick={() => setDismiss(true)} />
        </div>
        : null
    );
};

