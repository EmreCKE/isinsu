// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("project-image");
var modalImg = document.querySelector(".modal-content");


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  document.body.style.overflow = 'hidden';
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
  document.body.style.overflow = 'auto';

}