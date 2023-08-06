import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import axios from '../utils/axios-instance';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function usePhotoGallery(path, id) {

    const [photo, setPhoto] = useState(null);
    const [ capturedPhoto, setCapturedPhoto ] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (!photo) {
            setFetching(true);
            axios.get(`assessments/${id}`)
            .then(res => {
                    setPhoto(res.data[path].url);
                    setCapturedPhoto(res.data[path].url);
                    setFetching(false);
                })
                .catch(err => {
                    setFetching(false);
                })
        }
    }, [id, path, photo])

    const takePhoto = async () => {
        try {
            const photo = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 100,
            })
            setCapturedPhoto(photo.dataUrl);
            setPhoto(photo);
        } catch (error) {
            toast.error("Problem in Capturing Photo", {
                position: "bottom-center", autoClose: 4000, hideProgressBar: true,
                closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined
            });
        }
    };

    const submitPhoto = async (  ) => {
        const imageBlob = DataURIToBlob(photo.dataUrl);
        const imageRandomFilename = new Date().getTime();
        const data = new FormData()
        data.append(`files.${path}`, imageBlob, imageRandomFilename);
        data.append("data", JSON.stringify({name: 'test'}));
        data.append('_method', 'PUT');
        setSubmitting(true);
        axios.put(`assessments/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            toast.success("Photo Uploaded Successfully", {
                position: "bottom-center", autoClose: 4000, hideProgressBar: true,
                closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined
            });
            setSubmitting(false);
        }).catch(err => {
            toast.error("Problem in Uploading Photo", {
                position: "bottom-center", autoClose: 4000, hideProgressBar: true,
                closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined
            });
            setSubmitting(false);
        })
    }


    return {
        photo,
        capturedPhoto,
        takePhoto,
        submitPhoto,
        submitting,
        fetching,
    };
}

// Thanks to code from https://stackoverflow.com/a/5100158
// Author: https://github.com/stoive/
export function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
}
