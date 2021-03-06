// jQuery Image Gallery

// Open the index.html in Firefox.

// We have provided a series of images, one large spotlight image and a collection of thumbnails along the side in a column.

// When a user clicks on one of the thumbnail images, the spotlight image should update to show the image the user clicked, BUT the larger version of that image.

// 🔥tip #1: we have left a clue for you somewhere in the HTML...
// 🔥tip #2: the attr() jQuery method will be important

$(function () {
  // code here

  const $ul = $('ul');

  // add data-main attribute with path to the larger image
  $ul.children('li').attr('data-main', function () {
    const src = $(this).find('img').attr('src');
    const largerImagePath = src.replace('-small', '');
    $(this).attr('data-main', largerImagePath);
  });

  $ul.on('click', 'li', function () {
    const largerImagePath = $(this).attr('data-main');
    $('img.main').attr('src', largerImagePath);
  });
});
