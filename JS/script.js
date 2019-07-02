const Images = document.querySelectorAll("img");
const SIZES= {
    showcase:"100vw",
    reason:"(max-width:799px) 100vw,372px",
    feature:"(max-width:799px) 100vw,558px",
    story:"(max-width:799px) 100vw,670px",
}

function makeSrcset(imgSrc){
let markup =[];
let width =400;
for(var i =0;i<5;i++){
    markup[i] =imgSrc +"-" +width +".jpg" +width+"w";
    width+=400;
}
return markup.join();
}
for(var i=0;i<Images.length;i++){
    let imgSrc = Images[i].getAttribute("src");
    imgSrc=imgSrc.slice(0,-8);
    let srcSet =makeSrcset(imgSrc);
   // Images[i].setAttribute("srcset",srcSet);
   Images[i].setAttribute("srcset",srcSet);
    console.log(srcSet);

    let type =Images[i].getAttribute("data-type");
    let sizes =SIZES[type];
    Images[i].setAttribute("sizes",sizes);
    console.log(sizes);


}