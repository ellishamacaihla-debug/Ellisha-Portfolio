// --- SMOOTH SCROLLING ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// --- DYNAMIC SKILLS IMAGE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillImageDisplay = document.getElementById('skillImageDisplay');
    const skillCaption = document.getElementById('skillCaption');
    
    // PATH CORRECTION: Define the image folder path consistently
    const imageFolderPath = 'images/'; 

    
    // Set initial state for the first skill on page load
    if (skillItems.length > 0) {
        skillItems[0].classList.add('active-skill');
        const initialImage = skillItems[0].getAttribute('data-image');
        const initialCaption = skillItems[0].querySelector('h3').textContent;

        skillImageDisplay.src = imageFolderPath + initialImage;
        skillCaption.textContent = `Photo related to: ${initialCaption}`;
    }


    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            
            const newImageFileName = item.getAttribute('data-image');
            const newCaptionText = item.querySelector('h3').textContent;

            // Update active state
            skillItems.forEach(i => i.classList.remove('active-skill'));
            item.classList.add('active-skill');

            // Swap image source
            skillImageDisplay.src = imageFolderPath + newImageFileName;

            // Update caption
            skillCaption.textContent = `Photo related to: ${newCaptionText}`;
        });
    });
});