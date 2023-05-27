( function( global, factory ) {
    if ( typeof fetch === "function" ) factory( global );
})( typeof window !== "undefined" ? window : this, function( window ) {
"use strict";
class GoogleFile {
    constructor( object ) {
        for ( let key in object ) {
            this[ key ] = object[ key ]
        }
        this.keys = function getKeys() {
            return object.keys()
        }
        /**
         * @param { String } key
         **/
        this.get = function getValue( key ) {
            return object[ key ] || null
        }
    }
}
class GoogleDrive {
    constructor() {
        this.GoogleDrive = GoogleDrive;
        /**
         * @param { File } file Value of input( type file ).
         * @returns { Promise<{ id:String, url:String, name:String, size:Number, mimeType:String }> }
         **/
        this.UploadFile = function UploadFileSync( file ) {
            const DataFormat = new FormData();
            DataFormat.set( 'image', file );
            const DataOption = {
                method: "POST",
                body: DataFormat
            };
            return new Promise(( success, error ) => {
                if ( file?.constructor?.name !== "File" ) error("Read file error.");
                if ( Number( file.size / 1000000 ).toFixed(2) >= 5 ) error("File too large");
                fetch( "https://cloud-stack-code.vercel.app/api/v1/image", DataOption ).then( xml => xml.json() )
                .then( response => success( new GoogleFile( response ) ) )
                .catch( failed => error( failed ) )
            })
        }
    }
}
const preload = document.createElement("link");preload.rel="preconnect";preload.href="https://cloud-stack-code.vercel.app/api/v1/image";document.head.appendChild( preload );
window['GoogleDrive'] = GoogleDrive;
})
