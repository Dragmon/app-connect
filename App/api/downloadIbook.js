import {Alert} from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

export function showIbook(presentation) {
    var urldownload = presentation.url;
    var namefile = presentation.titulo;
    var dirfile = dirs.DocumentDir + '/'+ 'ibooks' +'/'+ namefile + extencion;

    console.log("dirfile : " , dirfile);
    console.log("urldonwload : ",urldownload);

    this.setState({
        changeimage : true,
    })

    console.log("estado en el showpresntation", this.state.changeimage)

    /* Descarga del archivo si no existe*/

    RNFetchBlob.fs.exists(dirfile)
        .then((exist) => {
            if (!exist){
                Alert.alert(
                    'Descarga de Ibook',
                    'La descarga del ibook a comenzado'
                )

                RNFetchBlob
                    .config({
                        // add this option that makes response data to be stored as a file,
                        // this is much more performant.
                        fileCache : true,
                        //appendExt : 'ibooks',
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