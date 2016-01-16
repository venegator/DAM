

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
          src: 'demonstration/01.jpg',    // image url
          srct: 'demonstration/01t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/02.jpg',    // image url
          srct: 'demonstration/02t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/03.jpg',    // image url
          srct: 'demonstration/03t.jpg',    // thumbnail url
                   // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/04.jpg',    // image url
          srct: 'demonstration/04t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/05.jpg',    // image url
          srct: 'demonstration/05t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/06.jpg',    // image url
          srct: 'demonstration/06t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/07.jpg',    // image url
          srct: 'demonstration/07t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/08.jpg',    // image url
          srct: 'demonstration/08t.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/09.jpg',    // image url
          srct: 'demonstration/09t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/10.jpg',    // image url
          srct: 'demonstration/10t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/11.jpg',    // image url
          srct: 'demonstration/11t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/12.jpg',    // image url
          srct: 'demonstration/12t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/13.jpg',    // image url
          srct: 'demonstration/13t.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/14.jpg',    // image url
          srct: 'demonstration/14t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/15.jpg',    // image url
          srct: 'demonstration/15t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/16.jpg',    // image url
          srct: 'demonstration/16t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/17.jpg',    // image url
          srct: 'demonstration/17t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/18.jpg',    // image url
          srct: 'demonstration/18t.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/19.jpg',    // image url
          srct: 'demonstration/19t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/20.jpg',    // image url
          srct: 'demonstration/20t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/21.jpg',    // image url
          srct: 'demonstration/21t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/22.jpg',    // image url
          srct: 'demonstration/22t.jpg',    // thumbnail url
                  // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/23.jpg',    // image url
          srct: 'demonstration/23t.jpg',    // thumbnail url
          title: 'image 1',             // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
         {
          src: 'demonstration/24.jpg',    // image url
          srct: 'demonstration/24t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },
        {
          src: 'demonstration/25.jpg',    // image url
          srct: 'demonstration/25t.jpg',    // thumbnail url        // thumbnail title
          //description : 'image 1 description'   // thumbnail description
        },

      ],
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
    });
  });