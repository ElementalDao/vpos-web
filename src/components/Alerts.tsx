import { Alert, AlertIcon, CloseButton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertError, setAlertInfo, setAlertSuccess, setAlertWarning } from "../actions/alertActions";

export default function Alerts() {
    let alerts = useSelector((state: any) => state.alerts)
    let dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            if (alerts.error) dispatch(setAlertError(null))
            if (alerts.success) dispatch(setAlertSuccess(null))
            if (alerts.info) dispatch(setAlertInfo(null))
            if (alerts.warning) dispatch(setAlertWarning(null))
        }, 1000 * 3);
    }, [alerts])


    return (
        <Stack spacing='-1' w='100%' position='absolute' top='0' zIndex={3}>
            {alerts.error && <Alert w='100%' justifyContent='space-between' status='error' variant='solid'>
                <AlertIcon />
                {alerts.error}
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={() => dispatch(setAlertError(null))}
                />
            </Alert>}

            {alerts.success && <Alert w='100%' justifyContent='space-between' status='success' variant='solid'>
                <AlertIcon />
                {alerts.success}
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={() => dispatch(setAlertSuccess(null))}
                />
            </Alert>}

            {alerts.warning && <Alert w='100%' justifyContent='space-between' status='warning' variant='solid'>
                <AlertIcon />
                {alerts.warning}
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={() => dispatch(setAlertWarning(null))}
                />
            </Alert>}

            {alerts.info && <Alert w='100%' justifyContent='space-between' status='info' variant='solid'>
                <AlertIcon />
                {alerts.info}
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={() => dispatch(setAlertInfo(null))}
                />
            </Alert>}
        </Stack>)
}