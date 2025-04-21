document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for background images
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      
      // Apply parallax effect to all sections with background images
      document.querySelectorAll('.services, .mission, .about, .team, .projects-teaser, .documents').forEach(section => {
        const speed = 0.5; // Adjust for more/less movement
        section.style.backgroundPosition = `center ${scrollPosition * speed}px`;
      });
    });
    
    // Fade-in animation for sections as they enter viewport
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {threshold: 0.2});
    
    sections.forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });
    
    // Pacific island floating images
    createFloatingImages();
  });
  
  // Function to create floating transparent Pacific island images
  function createFloatingImages() {
    const pacificImages = [
      'assets/images/site.images/beach-with-coconut-tree-sunset.jpg',
      'assets/images/site.images/palm-tree-isle_1048-2656.avif',
      'assets/images/site.images/view-breathtaking-beach-nature-landscape_23-2151682910.avif',
      'assets/images/site.images/man-with-backpack-strolling-by-beach-fluffy-clouds.jpg'
    ];
    
    const container = document.createElement('div');
    container.className = 'floating-images';
    document.body.appendChild(container);
    
    // Create 5 floating images
    for (let i = 0; i < 5; i++) {
      const img = document.createElement('div');
      img.className = 'floating-image';
      
      // Randomly select an image
      const randomImage = pacificImages[Math.floor(Math.random() * pacificImages.length)];
      img.style.backgroundImage = `url(${randomImage})`;
      
      // Random position and animation duration
      img.style.left = `${Math.random() * 80 + 10}%`;
      img.style.top = `${Math.random() * 70 + 15}%`;
      img.style.animationDuration = `${Math.random() * 15 + 20}s`;
      img.style.animationDelay = `${Math.random() * 10}s`;
      
      container.appendChild(img);
    }
  }