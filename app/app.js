


document.addEventListener('DOMContentLoaded', function() {
        // Add the 'fade-in' class 
        var profile = document.querySelector('.profile');
        profile.classList.add('fade-in');
    });


// ----- MODALS ----- //
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}



function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}


document.querySelectorAll('.contact-button').forEach(function(element) {
    element.addEventListener('click', function() {
        openModal('contactModal');
    });
});


// DROPDOWN //
    const dropdownContent = document.querySelector('.dropdown-content');
    const navButton = document.querySelector('.navButton');
   
   
   navButton.addEventListener('click', function(event) {
       event.stopPropagation(); 
       if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
       }
   });
    
    document.body.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });

  



   
   

