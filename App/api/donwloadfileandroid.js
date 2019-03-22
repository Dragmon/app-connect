import RNFetchBlob from "react-native-fetch-blob";

export function downloadFile(file) {
    console.log("descarga para android");
    console.log("file :", file);
    console.log("file titulo :", file.titulo);
    const android = RNFetchBlob.android;
    const dirs = RNFetchBlob.fs.dirs;
    var urldownload = file.url;

    if (file.categoria === 'Videos'){
        var namefile = file.titulo;
        var dirfile = dirs.DCIMDir + '/DownloadDocuments/'+ namefile + '.mp4';
    }else{
        var arrayUrl = urldownload.split('/');
        var namefile = arrayUrl[arrayUrl.length -1];
        var dirfile = dirs.DCIMDir + '/DownloadDocuments/'+ namefile;
    }
    // /storage/emulated/0/DCIM/
    //console.log(systemOperative);
    console.log(arrayUrl);
    console.log(namefile);
    console.log("dirfile : " , dirfile);
    console.log("urldonwload : ",urldownload);

    console.log('Descarga para android');
        
    /* Descarga del archivo si no existe*/
    RNFetchBlob.fs.exists(dirfile)
        .then((exist) => {
            if (!exist) {
                console.log("validar si existe el archivo")
                RNFetchBlob
                    .config({                        
                        // add this option that makes response data to be stored as a file,
                        // this is much more performant.
                        fileCache: true,
                        path: dirfile,
                        addAndroidDownloads: {
                            useDownloadManager: false,
                            notification: true,
                            title: namefile,
                            description: 'An file.',
                            mediaScannable: true,
                        }
                    })
                    .fetch('GET', urldownload, {
                        //some headers ..
                    })
                    // listen to download progress event
                    .progress((received, total) => {
                        console.log("Entra al progreso de descarga")
                        console.log('progress', received / total * 100)
                    })
                    .then((res) => {
                        console.log('The file saved to ', res.path())
                        android.actionViewIntent(res.path())
                    })
                    .catch((err) => {
                        console.log("error ", err)
                    })

            } else {
                console.log("el archivo ya existe")
                console.log("ruta del archivo", dirfile)
            }
        })
};