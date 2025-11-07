// Load navigation and set current page indicator
(function() {
  // Navigation HTML
  const navigationHTML = `
<div id="navigation">
	<div>
		<ul>
			<li id="nav-home">
				<a class="home" href="index.html">Home</a>
			</li>
			<li class="dropdown" id="nav-about">
				<a class="about" href="about.html">About</a>
				<div class="dropdown-content">
					<a href="about.html">Dr. Megan Ross</a>
					<a href="our-process.html">Our Process</a>
					<a href="contact-us.html">Contact</a>
				</div>
			</li>
			<li class="dropdown" id="nav-services">
				<a class="services" href="estate-planning.html">Services</a>
				<div class="dropdown-content services-dropdown">
					<a href="estate-planning.html">Estate Planning</a>
					<a href="young-families.html">Estate Planning for Young Families</a>
					<a href="probate-services.html">Executor and Probate Services</a>
					<a href="legal-transition.html">Group Estate Planning Workshops</a>
				</div>
			</li>
			<li class="dropdown" id="nav-resources">
				<a class="resources" href="guides.html">Resources</a>
				<div class="dropdown-content resources-dropdown">
					<a href="guides.html">Guides</a>
					<a href="blog.html">Blog</a>
					<a href="contact-us.html">Contact</a>
				</div>
			</li>
		</ul>
	</div>
</div>`;

  // Insert navigation HTML
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = navigationHTML;

    // Set current page
    setCurrentPage();
  }

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
