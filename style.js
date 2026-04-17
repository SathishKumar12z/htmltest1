function randomcolors(){

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    return randomColor;
}
function changeColor(data){
    // Change the div background color
    document.getElementById("mainDiv").style.backgroundColor = randomcolors();
    document.getElementById("mainh2").style.color = randomcolors();
    
}