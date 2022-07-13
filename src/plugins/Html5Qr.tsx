import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";
import React, { useEffect } from 'react';
import { QrIcon } from "../components/misc/CustomIcons";

const id = "qrcode-scanner";

interface Props {
    ready: boolean
    qrCodeSuccessCallback: any
    qrCodeErrorCallback: any

}

interface Config {
    localMediaStream?: boolean
    aspectRatio?: number
    disableFlip?: boolean
    qrRegion?: string
    fps: number
    qrbox: number
    supportedScanTypes: Array<Html5QrcodeScanType>,
}

export default function Html5Qr({ qrCodeErrorCallback, qrCodeSuccessCallback, ready }: Props) {
    let html5QrcodeScanner: any

    useEffect(() => {
        // Creates the configuration object for Html5QrcodeScanner.
        let config: Config = {
            localMediaStream: false,
            aspectRatio: 1,
            disableFlip: false,
            qrbox: 160,
            fps: 10,
            supportedScanTypes: [],

        }

        if (ready) {
            Html5Qrcode.getCameras().then((devices) => {
                if (devices && devices.length) {
                    html5QrcodeScanner = new Html5Qrcode(id);
                    html5QrcodeScanner.start(
                        { facingMode: "environment" },
                        config,
                        qrCodeSuccessCallback,
                        qrCodeErrorCallback
                    );
                }
            });
        }

        return () => {
            if (html5QrcodeScanner) {
                html5QrcodeScanner.stop().catch((error: any) => {
                    console.log("Failed to clear html5QrcodeScanner. ", error);
                });
            }
        }
    }, [ready])

    let style = {width: ready && '200px', height: ready && '200px'}
    return (
        <>
            {!ready && <QrIcon width='200px' height='200px' />}
            <div id={id} style={style} />
        </>
    )
};