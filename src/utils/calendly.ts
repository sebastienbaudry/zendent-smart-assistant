
// Utility function to open Calendly popup
export const openCalendlyPopup = () => {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/sebastien-baudry'
    });
  }
};
