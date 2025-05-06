// src/ga4.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-LZ9BBG9NZG"); // Thay bằng mã GA4 của bạn
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const trackEvent = (category, action, label = "") => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
