// Load navigation and set current page indicator
(function() {
  // Fetch and load navigation
  fetch('navigation.html')
    .then(response => response.text())
    .then(html => {
      // Insert navigation HTML
      const navPlaceholder = document.getElementById('nav-placeholder');
      if (navPlaceholder) {
        navPlaceholder.innerHTML = html;

        // Set current page
        setCurrentPage();
      }
    })
    .catch(error => console.error('Error loading navigation:', error));

  // Function to set the current page indicator
  function setCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Map pages to navigation items
    const pageMap = {
      'index.html': 'nav-home',
      'about.html': 'nav-about',
      'our-process.html': 'nav-about',
      'contact-us.html': 'nav-about',
      'estate-planning.html': 'nav-services',
      'young-families.html': 'nav-services',
      'probate-services.html': 'nav-services',
      'legal-transition.html': 'nav-services',
      'guides.html': 'nav-resources',
      'blog.html': 'nav-resources',
      'blog-post.html': 'nav-resources'
    };

    const navId = pageMap[currentPage];
    if (navId) {
      const navItem = document.getElementById(navId);
      if (navItem) {
        navItem.classList.add('current');
      }
    }
  }
})();
