import { useEffect, useRef } from 'react';
import axios from 'axios';

import { useKeycloak } from '@react-keycloak/web';

export const useAxios = () => {
    const axiosInstance = useRef();
    const { keycloak, initialized } = useKeycloak();
    const kcToken = keycloak?.token ?? '';

    useEffect(() => {
        axiosInstance.current = axios.create({
            baseURL: 'https://test1.cisozen.com.au/kie-server',
            headers: {
                'Authorization': initialized ? `Bearer ${kcToken}` : undefined,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return () => {
            axiosInstance.current = undefined;
        };
    }, [initialized, kcToken]);

    return axiosInstance;
};