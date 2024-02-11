const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageWrapper = document.querySelector(".image-wrapper")

addEventListener()

function addEventListener() {
    searchButton.addEventListener("click", search);
}

function search() {
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 35CNHQIM6Tq2mF2Pwuz1YYMcmhKN4zieERnA40I_x6w"
        }
    })
        .then((rest) => rest.json())
        .then((data) => {
            // console.log(data.results[0].urls.small)
            data.results.forEach((image)=>{
              ımageToYOıD(image.urls.small);
            })
        })
        .catch((err) => console.log(err))
}  

function ımageToYOıD(urls){
    // console.log(urls)

    const div=document.createElement("div");
    div.className="div-image"

    const img = document.createElement("img");
    img.setAttribute("src",urls);
    img.height="300";
    img.width="300";

    div.appendChild(img);
    imageWrapper.appendChild(div);
 
}