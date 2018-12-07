import {Alert} from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

export function downloadFile(file) {

    console.log("file :", file);

    const dirs = RNFetchBlob.fs.dirs;
    var urldownload = file.url;
    var arrayUrl = urldownload.split('/');
    var namefile = arrayUrl[arrayUrl.length -1];
    var dirfile = dirs.DocumentDir + '/'+ 'Documents';

    console.log(arrayUrl);
    console.log(namefile);
    console.log("dirfile : " , dirfile);
    console.log("urldonwload : ",urldownload);

    /* Borrado de archivos */

    RNFetchBlob.fs.exists(dirfile)
        .then((exist) => {
            if(exist){
                console.log("existe ruta")
            }
        })
    /*
    RNFetchblob.config({
        fileCache : true
    })
        .fetch('GET', 'http://example.com/download/file')
        .then((res) => {
            // set session of a response
            res.session('foo')
        })

    RNFetchblob.config({
        // you can also set session beforehand
        session : 'foo',
        fileCache : true
    })
        .fetch('GET', 'http://example.com/download/file')
        .then((res) => {
            // ...
        })

    // or put an existing file path to the session
    RNFetchBlob.session('foo').add('some-file-path')
    // remove a file path from the session
    RNFetchBlob.session('foo').remove('some-file-path')
    // list paths of a session
    RNFetchBlob.session('foo').list()
    // remove all files in a session
    RNFetchBlob.session('foo').dispose().then(() => { ... })
    */

};