import {Alert,Platform} from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

export function downloadFile(file) {

    console.log("file :", file);
    console.log("file titulo :", file.titulo);

    const systemOperative = Platform.OS;
    const dirs = RNFetchBlob.fs.dirs;
    var urldownload = file.url;

    if (systemOperative === 'android') {
        var dirsDownload = dirs.DCIMDir;
        var android = RNFetchBlob.android;
    } else {
        var dirsDownload = dirs.DocumentDir;
    }

    console.log("ruta de descarga ", dirsDownload);

    if (file.categoria === 'Videos'){
        var namefile = file.titulo;
        //var dirfile = dirs.DocumentDir + '/DownloadDocuments/'+ namefile + '.mp4';
        var dirfile = dirsDownload + '/AppConnect/' + namefile + '.mp4';
    }else{
        var arrayUrl = urldownload.split('/');
        var namefile = arrayUrl[arrayUrl.length -1];
        //var dirfile = dirs.DocumentDir + '/DownloadDocuments/'+ namefile;
        var dirfile = dirsDownload + '/AppConnect/' + namefile;
    }

    console.log(systemOperative);
    console.log(arrayUrl);
    console.log(namefile);
    console.log("dirfile : " , dirfile);
    console.log("urldonwload : ",urldownload);

    if (systemOperative === 'android') {
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
                            console.log('progress', received / total * 100)
                        })
                        .then((res) => {
                            console.log('The file saved to ', res.path())
                            //android.actionViewIntent(res.path())
                        })
                        .catch((err) => {
                            console.log("error ", err)
                        })

                } else {
                    console.log("el archivo ya existe")
                    console.log("ruta del archivo", dirfile)
                }
        })        
    } else {
        /* Descarga del archivo si no existe*/
        console.log('Descarga para ios'); 
        RNFetchBlob.fs.exists(dirfile)
            .then((exist) => {
                if (!exist) {
                    RNFetchBlob
                        .config({
                            // add this option that makes response data to be stored as a file,
                            // this is much more performant.
                            fileCache: true,
                            path: dirfile
                        })
                        .fetch('GET', urldownload, {
                            //some headers ..
                        })
                        // listen to download progress event
                        .progress((received, total) => {
                            console.log('progress', (received / total) * 100)
                        })
                        .then((res) => {
                            // the temp file path
                            RNFetchBlob.ios.previewDocument(dirfile)
                                .catch((err) => {
                                    console.log("error ", err)
                                })
                            console.log('The file saved to ', res.path())
                        })
                        .catch((err) => {
                            console.log("error ", err)
                        })

                } else {
                    RNFetchBlob.ios.previewDocument(dirfile)
                        .catch((err) => {
                            console.log("error ", err)
                        })

                    console.log("el archivo ya existe")
                    console.log("ruta del archivo", dirfile)
                }
        })
    }        
};