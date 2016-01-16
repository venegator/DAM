

$(document).ready(function () {
    $("#nanoGallery4").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,      
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 },{'name':'imageScaleIn80', 'duration':500},],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'Click para ver', thumbnailAlbumDescription: 'Open Album' },
      items: [
        {
          src: 'imgs/galeria/01.jpg',    // image url
          srct: 'imgs/galeria/01.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/02.jpg',    // image url
          srct: 'imgs/galeria/02.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/03.jpg',    // image url
          srct: 'imgs/galeria/03.jpg',    // thumbnail url
                   // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/04.jpg',    // image url
          srct: 'imgs/galeria/04.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/05.jpg',    // image url
          srct: 'imgs/galeria/05.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/06.jpg',    // image url
          srct: 'imgs/galeria/06.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/07.jpg',    // image url
          srct: 'imgs/galeria/07.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/08.jpg',    // image url
          srct: 'imgs/galeria/08.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/09.jpg',    // image url
          srct: 'imgs/galeria/09.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/10.jpg',    // image url
          srct: 'imgs/galeria/10.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/11.jpg',    // image url
          srct: 'imgs/galeria/11.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/12.jpg',    // image url
          srct: 'imgs/galeria/12.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/13.jpg',    // image url
          srct: 'imgs/galeria/13.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/14.jpg',    // image url
          srct: 'imgs/galeria/14.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/15.jpg',    // image url
          srct: 'imgs/galeria/15.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/16.jpg',    // image url
          srct: 'imgs/galeria/16.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/17.jpg',    // image url
          srct: 'imgs/galeria/17.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/18.jpg',    // image url
          srct: 'imgs/galeria/18.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'imgs/galeria/19.jpg',    // image url
          srct: 'imgs/galeria/19.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/20.jpg',    // image url
          srct: 'imgs/galeria/20.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'imgs/galeria/21.jpg',    // image url
          srct: 'imgs/galeria/21.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },

      ],
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
    });
  });