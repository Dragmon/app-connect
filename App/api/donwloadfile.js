import {Alert} from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

export function downloadFile(file) {

    console.log("file :", file);

    const dirs = RNFetchBlob.fs.dirs;
    var urldownload = file.url;
    var arrayUrl = urldownload.split('/');
    var namefile = arrayUrl[arrayUrl.length -1];
    //var namefile = file.titulo;
    //var dirfile = dirs.DocumentDir + '/'+ 'Documents' +'/'+ namefile + extencion;
    var dirfile = dirs.DocumentDir + '/'+ 'Documents' +'/'+ namefile;

    console.log(arrayUrl);
    console.log(namefile);
    console.log("dirfile : " , dirfile);
    console.log("urldonwload : ",urldownload);

    /*
    //sin uso por el momento

    this.setState({
        changeimage : true,
    })

    console.log("estado en el showpresntation", this.state.changeimage)
    */

    /* Descarga del archivo si no existe*/

    RNFetchBlob.fs.exists(dirfile)
        .then((exist) => {
            if (!exist){/*
                Alert.alert(
                    'Descarga de Archivo',
                    'La descarga de su archivo a comenzado'
                )
                */
                RNFetchBlob
                    .config({
                        // add this option that makes response data to be stored as a file,
                        // this is much more performant.
                        fileCache : true,
                        path: dirfile
                    })
                    .fetch('GET', urldownload, {
                        //some headers ..
                    })
                    // listen to download progress event
                    .progress((received, total) => {
                        console.log('progress', (received / total ) * 100)
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

            }  else {
                RNFetchBlob.ios.previewDocument(dirfile)
                    .catch((err) => {
                        console.log("error ", err)
                    })

                console.log("el archivo ya existe")
                console.log("ruta del archivo", dirfile)
            }
        })
};