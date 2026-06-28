const GA_MEASUREMENT_ID = 'G-VVTSN76P4H';

type GtagArguments =
  | ['js', Date]
  | ['config', string, Record<string, unknown>?]
  | ['event', string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: GtagArguments[];
    gtag?: (...args: GtagArguments) => void;
  }
}

let initialized = false;

export const isAnalyticsEnabled = () => Boolean(GA_MEASUREMENT_ID);

export const initGoogleAnalytics = () => {
  if (!isAnalyticsEnabled() || typeof window === 'undefined' || initialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: GtagArguments) => {
    window.dataLayer?.push(args);
  };

  const existingScript = document.getElementById('google-analytics-gtag');
  if (!existingScript) {
    const script = document.createElement('script');
    script.id = 'google-analytics-gtag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  initialized = true;
};

export const trackPageView = (path: string, title: string, location: string) => {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') return;
  initGoogleAnalytics();

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: location,
  });
};

export const trackMarketingEvent = (
  action: string,
  params: {
    label: string;
    category?: string;
    destination?: string;
    value?: number;
  },
) => {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') return;
  initGoogleAnalytics();

  window.gtag?.('event', action, {
    event_category: params.category ?? 'marketing',
    event_label: params.label,
    link_url: params.destination,
    value: params.value,
  });
};
