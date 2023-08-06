
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const NetStatusNotification = (isOnline, message) => {
    if (isOnline) {
        toast.success(message, {
            position: "bottom-center", autoClose: 4000, hideProgressBar: true,
            closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined
        });
    }
    else {
        toast.error(message, {
            position: "bottom-center", autoClose: 4000, hideProgressBar: true,
            closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined
        });
    }
}

const NetworkStatus = () => {

    useEffect(() => {
        const handleOnline = () => {
            NetStatusNotification(true, "You are back online");
        }

        const handleOffline = () => {
            NetStatusNotification(false, "You are offline");
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);

    return <></>;
};

export default NetworkStatus;