# GoogleDriveUploadFile

``` js
const google = new GoogleDrive();
function upload( file ) {
    google.UploadFile( file ).then( response => {
        let img = new Image;
        img.src = response.url;
        img.style.width = "100%";
        app.appendChild( img )
    });
}
```
