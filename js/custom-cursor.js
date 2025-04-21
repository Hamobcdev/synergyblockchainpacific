document.addEventListener('DOMContentLoaded', function() {
    // Create custom Pacific cursor
    const cursor = document.createElement('div');
    cursor.className = 'pacific-cursor';
    document.body.appendChild(cursor);
    
    // Follow mouse movement
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
    
    // Add hover effect for clickable elements
    const clickables = document.querySelectorAll('a, button, .document, .project-tags span');
    clickables.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px) scale(1.5)`;
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px) scale(1)`;
      });
    });
  });