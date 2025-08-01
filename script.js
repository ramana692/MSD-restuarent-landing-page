document.addEventListener("DOMContentLoaded", function() {
    var readDocs = document.querySelector(".read-instructions");
    readDocs.style.display = "block";
});

    
function getreservationALert(event) {
  event.preventDefault(); 
  alert("Thank you for booking your table! We will contact you shortly.");
}
