


 document.addEventListener('DOMContentLoaded', function() {
        // Add the 'fade-in' class to .profile when the page is loaded
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


document.querySelectorAll('.about').forEach(function(element) {
    element.addEventListener('click', function() {
        openModal('aboutModal');
    });
});

    //  document.querySelectorAll('.contact').forEach(function(element) {
    //  element.addEventListener('click', function() {
    //    openModal('contactModal');
    //   });
    // });


// DROPDOWN //
    var dropdownContent = document.querySelector('.dropdown-content');
    var projectButton = document.querySelector('.navButton');

    projectButton.addEventListener('click', function(event) {
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


   