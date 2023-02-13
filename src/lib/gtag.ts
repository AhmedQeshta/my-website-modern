import { EventProps } from '@/interfaces';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GOOGLE_ADD_LINK = process.env.NEXT_PUBLIC_GOOGLE_ADD_LINK;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
