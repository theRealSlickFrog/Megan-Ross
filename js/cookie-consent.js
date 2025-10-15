// Cookie Consent Manager for Ross Estate Law
(function() {
  'use strict';

  const CONSENT_KEY = 'cookieConsent';
  const CONSENT_ACCEPTED = 'accepted';
  const CONSENT_DECLINED = 'declined';

  // Check if user has already made a choice
  function getConsentStatus() {
    return localStorage.getItem(CONSENT_KEY);
  }

  // Save user's consent choice
  function saveConsentStatus(status) {
    localStorage.setItem(CONSENT_KEY, status);
  }

  // Initialize Google Analytics
  function initializeGoogleAnalytics() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }

  // Deny Google Analytics
  function denyGoogleAnalytics() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  }

  // Create and show the cookie banner
  function showCookieBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = `
      <div class="cookie-consent-content">
        <p class="cookie-consent-text">
          We use cookies to analyze website traffic and improve your experience.
          By accepting, you consent to our use of cookies for analytics purposes.
          <a href="legal.html" target="_blank">Learn more about our privacy policy</a>.
        </p>
        <div class="cookie-consent-buttons">
          <button id="cookie-accept" class="cookie-btn cookie-accept">Accept</button>
          <button id="cookie-decline" class="cookie-btn cookie-decline">Decline</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Add event listeners
    document.getElementById('cookie-accept').addEventListener('click', acceptCookies);
    document.getElementById('cookie-decline').addEventListener('click', declineCookies);
  }

  // Handle accept
  function acceptCookies() {
    saveConsentStatus(CONSENT_ACCEPTED);
    initializeGoogleAnalytics();
    hideBanner();
  }

  // Handle decline
  function declineCookies() {
    saveConsentStatus(CONSENT_DECLINED);
    denyGoogleAnalytics();
    hideBanner();
  }

  // Hide the banner
  function hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.style.opacity = '0';
      setTimeout(() => banner.remove(), 300);
    }
  }

  // Initialize on page load
  function init() {
    const consentStatus = getConsentStatus();

    // Set default consent mode to denied
    if (typeof gtag === 'function') {
      gtag('consent', 'default', {
        'analytics_storage': 'denied'
      });
    }

    if (consentStatus === CONSENT_ACCEPTED) {
      // User previously accepted
      initializeGoogleAnalytics();
    } else if (consentStatus === CONSENT_DECLINED) {
      // User previously declined
      denyGoogleAnalytics();
    } else {
      // No choice made yet - show banner
      showCookieBanner();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
