declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageView = (url: URL) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG!, {
    page_path: url,
  });
};
