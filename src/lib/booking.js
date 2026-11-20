// Booking configuration.
// Replace BOOKING_URL with the hotel's official booking engine URL before launch.
// Until then every booking button opens the hotel's official reservation page.
export const BOOKING_URL = "https://anezitowerhotel.com/";

export const BOOKING_EXTERNAL = true;

export function bookingHref() {
  return BOOKING_URL;
}

export default BOOKING_URL;