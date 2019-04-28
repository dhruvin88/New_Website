$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#socialMedia').toggleClass('active');
    });

});

function closeNav() {
    $('#sidebar').toggleClass('active');
    $('#socialMedia').toggleClass('active');
}

function change(page) {
    var aboutme = document.getElementById('aboutme');
    var resume = document.getElementById('resume');
    var contact = document.getElementById('contactme');
    var projects = document.getElementById('projects');

    switch (page) {
        case 'aboutme':
            aboutme.style.display = 'block';
            resume.style.display = 'none';
            contact.style.display = 'none';
            projects.style.display = 'none';
            break;
        case 'projects':
            aboutme.style.display = 'none';
            resume.style.display = 'none';
            contact.style.display = 'none';
            projects.style.display = 'block';
            break;
        case 'resume':
            aboutme.style.display = 'none';
            resume.style.display = 'block';
            contact.style.display = 'none';
            projects.style.display = 'none';
            break;
        case 'contactme':
            aboutme.style.display = 'none';
            resume.style.display = 'none';
            contact.style.display = 'block';
            projects.style.display = 'none';
            break;
    }
}
