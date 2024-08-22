const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);

    const randomImage = selectRandomImage(images);
    console.log(randomImage);
}



const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex); -> it works!
    const randomImage = images[randomIndex];
    // console.log(randomImage) -> it works!
    displayImage(randomImage);
};

const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = `Image is by ${author}`;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
});
