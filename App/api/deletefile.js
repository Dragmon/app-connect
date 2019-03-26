import RNFetchBlob from "react-native-fetch-blob";
import {Platform} from "react-native";

export function deleteFiles() {

    console.log("entra a la funcion delete para ios y android");

    const dirs = RNFetchBlob.fs.dirs;

    if (Platform.OS === 'android') {
        var dirfile = dirs.DCIMDir + '/DownloadDocuments';
    } else {
        var dirfile = dirs.DocumentDir + '/DownloadDocuments';
    }
    console.log("dirfile : " , dirfile);

    /* Borrado de archivos */

    RNFetchBlob.fs.exists(dirfile)
        .then((exist) => {
            if(exist){
                console.log("existe ruta");

                RNFetchBlob
                    .config({
                        // you can also set session beforehand
                        fileCache : true,
                        path: dirfile
                    })

                // remove file by specifying a path
                RNFetchBlob.fs.unlink(dirfile).then(() => {
                    console.log("archivo removido")
                })
            }
        })
};