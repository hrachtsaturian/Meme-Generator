// accessing the elements
const form = document.querySelector('#form');
const divForMemes = document.querySelector('#memes');

// creating div element for meme
function createMemeContainer() {
  const memeContainer = document.createElement('div');
  memeContainer.className = "meme-container";

// hover effect for deleting meme
  memeContainer.addEventListener('mouseenter', function() {
    const deleteIcon = document.createElement('h3');
    deleteIcon.innerHTML = 'X';
    deleteIcon.id = 'delete-meme-button';
    memeContainer.appendChild(deleteIcon);
  });

// restoring the original meme appearance
  memeContainer.addEventListener('mouseleave', function() {
    document.querySelector('#delete-meme-button').remove();
  });

// function for deleting memes
  memeContainer.addEventListener('click', function() {
    memeContainer.remove();
  });

  return memeContainer;
}

// creating image element for meme
function createImage(imageUrl) {
  const image = document.createElement('img');
  image.className = "meme-image";
  image.src = imageUrl;

  return image;
}

// creating div for text
function createTextContainer(text) {
  const textContainer = document.createElement('div');
  const textElement = document.createElement('h3');
  textElement.className = "meme-text";
  textElement.innerHTML = text.toUpperCase();
  textContainer.className = "meme-text-container";
  textContainer.appendChild(textElement);

  return textContainer;
}

// function for the form to submit the date to create meme
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const imageURL = document.getElementById('image-url').value;
  const topText = document.getElementById('top-text').value;
  const bottomText = document.getElementById('bottom-text').value;

  const memeContainer = createMemeContainer();

  const image = createImage(imageURL);

  const topTextContainer = createTextContainer(topText);
  topTextContainer.classList.add("meme-text-bottom");

  const bottomTextContainer = createTextContainer(bottomText);
  bottomTextContainer.classList.add("meme-text-top");

  memeContainer.appendChild(topTextContainer)
  memeContainer.appendChild(bottomTextContainer)
  memeContainer.appendChild(image);

  divForMemes.appendChild(memeContainer);

  form.reset();
})
