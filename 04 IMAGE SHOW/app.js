var images = document.querySelectorAll('.image img');
var trai = document.querySelector('.trai');
var phai = document.querySelector('.phai');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

var currIndex = 0;

function showGallery() {
    if(currIndex == 0){
        trai.classList.add('hide')
    }else{
        trai.classList.remove('hide')
    }
    if(currIndex == images.length-1){
        phai.classList.add('hide')
    }else{
        phai.classList.remove('hide')
    }
    galleryImg.src = images[currIndex].src
    gallery.classList.add('show')    
}

images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

trai.addEventListener('click', function(){
    if(currIndex > 0){
        currIndex --
        showGallery()
    }   
})

phai.addEventListener('click', function(){
    if(currIndex < images.length-1){
        currIndex ++
        showGallery()
    }   
})