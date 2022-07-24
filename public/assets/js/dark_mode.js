
//check localstorage
if(localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isDark) {
    var darkBtn = document.getElementById('darkBtn')
    var lightBtn = document.getElementById('lightBtn')

    if(isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none"
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
        localStorage.removeItem('preferredTheme');
    }

    document.body.classList.toggle("darkmode");
}


function getBase64Image() {
           var filesSelected = document.getElementById("myFile").files;

           if (filesSelected.length > 0) {
               var file = filesSelected[0];

               if (file.type.match('image.*')) {
                   var reader = new FileReader();
                   reader.readAsDataURL(file);
                   reader.onload = function (e) {
                       var image = new Image();
                       image.onload = function (imageEvent) {

                           // Resize the image using canvas
                           var canvas = document.createElement('canvas'),
                               max_size = 300,// TODO : max size for a pic
                               width = image.width,
                               height = image.height;
                           if (width > height) {
                               if (width > max_size) {
                                   height *= max_size / width;
                                   width = max_size;
                               }
                           } else {
                               if (height > max_size) {
                                   width *= max_size / height;
                                   height = max_size;
                               }
                           }
                           canvas.width = width;
                           canvas.height = height;
                           canvas.getContext('2d').drawImage(image, 0, 0, width, height);

                           //Getting base64 string;
                           var dataUrl = canvas.toDataURL('image/jpeg');

                           //Getting blob data
                           RESIZED_IMAGE = dataURLToBlob(dataUrl);
                       }
                       image.src = e.target.result;
                   }
               }
           };
       }
       /* Utility function to convert a canvas to a BLOB */
       var dataURLToBlob = function (dataURL) {
           var BASE64_MARKER = ';base64,';
           if (dataURL.indexOf(BASE64_MARKER) == -1) {
               var parts = dataURL.split(',');
               var contentType = parts[0].split(':')[1];
               var raw = parts[1];

               return new Blob([raw], { type: contentType });
           }

           var parts = dataURL.split(BASE64_MARKER);
           var contentType = parts[0].split(':')[1];
           var raw = window.atob(parts[1]);
           var rawLength = raw.length;

           var uInt8Array = new Uint8Array(rawLength);

           for (var i = 0; i < rawLength; ++i) {
               uInt8Array[i] = raw.charCodeAt(i);
           }

           return new Blob([uInt8Array], { type: contentType });
       }
       /* End Utility function to convert a canvas to a BLOB */
