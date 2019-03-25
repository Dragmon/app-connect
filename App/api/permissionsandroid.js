import { PermissionsAndroid } from 'react-native';

export async function requestPermission() {
    console.log("enttra a la funcion de permisos de android")
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Permisos de lectura y escritura',
                message:
                    'La aplicación requeire permisos de ' +
                    'lectura y escritura para su funcionamiento',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Tiene los permisos');
        } else {
            console.log('Permisos denegados');
        }
    } catch (err) {
        console.warn(err);
    }
}