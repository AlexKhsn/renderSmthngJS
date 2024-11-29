// 'use strict'

// let galleryList = document.querySelector('.gallery__list');
// let showMorePhotosBtn = document.querySelector('.gallery__view-more-btn');


// let showStart = 0;
// let currentShow = 0;
// let limit = 5;

// function showPhotos(photosArr, start, limit) {
//   for (i = start; i < limit; i++) {
//     // console.log(photosArr[i]);
//     let newPhoto = document.createElement('li');
//     // newPhoto.setAttribute('class', 'gallery__item');
//     newPhoto.classList.add('gallery__item');
//     let imgUrl = photosArr[i].thumbnailUrl;
//     newPhoto.style.backgroundImage = `url(${imgUrl})`;
//     galleryList.appendChild(newPhoto);
//   }
// }

// function loadMorePhotos() {
//   fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(photos => {
//         for (let i = showStart; i < limit; i++) {
//           currentShow = i;
//         }
//         showStart = currentShow + 1;
//         limit += 5;

//         showPhotos(photos, showStart, limit);
//       });
// }

// showMorePhotosBtn.addEventListener('click', function() {
//   loadMorePhotos();
// })







'use strict'

let gallery = document.querySelector('.gallery__list');
let showMoreBtn = document.querySelector('.gallery__view-more-btn');




function addAndShowImg(imgObj) {
  console.log(imgObj)
  let imgUrl = imgObj.thumbnailUrl;
  let newGalleryItem = document.createElement('li');
  let newGalleryImg = document.createElement('img');
  let newImgDescr = document.createElement('span');



  newGalleryItem.classList.add('d-flex');
  newGalleryItem.classList.add('border');
  newGalleryItem.classList.add('gallery__list-item');
  newGalleryImg.classList.add('gallery__img');
  newGalleryImg.setAttribute('src', imgUrl);
  newImgDescr.classList.add('gallery__img-descr');
  newGalleryImg.setAttribute('alt', 'alt text');
  newImgDescr.textContent = imgObj.title;



  gallery.appendChild(newGalleryItem);
  newGalleryItem.appendChild(newGalleryImg);
  newGalleryItem.appendChild(newImgDescr);
}


function getImgsAndSetCountValue() {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((images) => {
    lastImg += limit;

    for (let i = startCount; i < lastImg; i++) {
      currentCount = i;
      addAndShowImg(images[i]);
    }

    startCount = ++currentCount;
  });
}


let startCount = 0;
let currentCount = 0;
let limit = 5;
let lastImg = 0;

showMoreBtn.addEventListener('click', function() {
  getImgsAndSetCountValue();
})