import { PermissionsAndroid } from 'react-native';

export async function requestReadPermission() {
    console.log("enttra a la funcion de permisos de lectura android")
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Permisos de escritura',
                message:
                    'La aplicación requeire permisos de ' +
                    'escritura para su funcionamiento',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Tiene los permisos de lectura');
        } else {
            console.log('Permisos de lectura denegados');
        }
    } catch (err) {
        console.warn(err);
    }
}

export async function requestWritePermission() {
    console.log("entra a la funcion de permisos de escritura android")
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Permisos de lectura',
                message:
                    'La aplicación requeire permisos de ' +
                    'lectura para su funcionamiento',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Tiene los permisos de escritura');
        } else {
            console.log('Permisos de escritura denegados');
        }
    } catch (err) {
        console.warn(err);
    }
}