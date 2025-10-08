// Mobile Navigation Hamburger Menu
(function() {
	'use strict';

	// Wait for DOM to be ready
	document.addEventListener('DOMContentLoaded', function() {
		// Create hamburger button
		const nav = document.getElementById('navigation');
		if (!nav) return;

		const navDiv = nav.querySelector('div');
		if (!navDiv) return;

		// Create hamburger button
		const hamburger = document.createElement('button');
		hamburger.className = 'hamburger';
		hamburger.setAttribute('aria-label', 'Toggle navigation menu');
		hamburger.setAttribute('aria-expanded', 'false');
		hamburger.innerHTML = `
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		`;

		// Insert hamburger before the ul
		const navUl = navDiv.querySelector('ul');
		navDiv.insertBefore(hamburger, navUl);

		// Toggle menu function
		function toggleMenu() {
			const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
			hamburger.setAttribute('aria-expanded', !isExpanded);
			hamburger.classList.toggle('active');
			navUl.classList.toggle('mobile-active');
			document.body.classList.toggle('menu-open');
		}

		// Hamburger click handler
		hamburger.addEventListener('click', toggleMenu);

		// Close menu when clicking outside
		document.addEventListener('click', function(e) {
			if (!nav.contains(e.target) && navUl.classList.contains('mobile-active')) {
				toggleMenu();
			}
		});

		// Close menu when window is resized above mobile breakpoint
		let resizeTimer;
		window.addEventListener('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				if (window.innerWidth > 768 && navUl.classList.contains('mobile-active')) {
					toggleMenu();
				}
			}, 250);
		});

		// Prevent dropdown clicks from closing menu on mobile
		const dropdowns = document.querySelectorAll('.dropdown');
		dropdowns.forEach(function(dropdown) {
			dropdown.addEventListener('click', function(e) {
				if (window.innerWidth <= 768) {
					// On mobile, toggle dropdown visibility
					this.classList.toggle('active');
					e.stopPropagation();
				}
			});
		});
	});
})();
