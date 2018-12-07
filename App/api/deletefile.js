import RNFetchBlob from "react-native-fetch-blob";

export function deleteFiles() {

    console.log("entra a la funcion delete");

    const dirs = RNFetchBlob.fs.dirs;
    /*
    var urldownload = file.url;
    var arrayUrl = urldownload.split('/');
    var namefile = arrayUrl[arrayUrl.length -1];
    console.log(namefile);
    console.log(arrayUrl);
    */
    var dirfile = dirs.DocumentDir + '/'+ 'DownloadDocuments';

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