const Images = document.querySelectorAll("img");

for(var i=0;i<Image.length;i++){
    let imgSrc = Images[i].getAttribute("src");
    imgSrc=imgSrc.slice(0,-8);
}