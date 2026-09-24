const GA_MEASUREMENT_ID = 'G-7M5LY0359R';

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID
    });
  }
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    method: 'phone'
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    method: 'whatsapp'
  });
};

export const trackLead = (method, service = '') => {
  trackEvent('generate_lead', {
    method,
    service
  });
};
