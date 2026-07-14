const img = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=QDXQiZgiKRgwko8U9k26P0rWbyFPqYpU&s=cats')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })});