let imageEle = document.getElementById("image");
let imageWidthEle = document.getElementById("imageWidth");
let warningMessageEle = document.getElementById("warningMessage");

//let decrementButtonEle = document.getElementById("decrementButton");
//let incrementButtonEle = document.getElementById("incrementButton");

let originalImageWidth = 200;
let imageMaxWidth = 300;
let imageMinWidth = 100;
let maxWidthWarningMessage = "Too big. Decrease the size of the image";
let minWidthWarningMessage ="Can't visible.Increase the size of the image";

imageEle.style.width = originalImageWidth+"px";
imageWidthEle.textContent = originalImageWidth+"px"
imageEle.style.width = originalImageWidth;


function onIncrease(){
    if(originalImageWidth >= imageMaxWidth){
        warningMessageEle.textContent = maxWidthWarningMessage;
    } else{
        originalImageWidth = originalImageWidth+5;
        let updatedImageWidth = originalImageWidth+"px";
        warningMessageEle.textContent ="";
        imageEle.style.width = updatedImageWidth;
        imageWidthEle.textContent = updatedImageWidth;
    }

}
function onDecrease(){
    if(originalImageWidth <= imageMinWidth){
        warningMessageEle.textContent = minWidthWarningMessage;
    } else{
        originalImageWidth = originalImageWidth-5;
        let updatedImageWidth = originalImageWidth+"px";
        warningMessageEle.textContent ="";
        imageEle.style.width = updatedImageWidth;
        imageWidthEle.textContent = updatedImageWidth;
    }
}