export interface EventInfo {
  id: "walima";
  title: string;
  short: string;
  kicker: string;
  weekday: string;
  day: string;
  month: string;
  year: string;
  time: string;
  /** Optional second line under the time. */
  timeExtra?: string;
  /** ISO timestamp (IST) used for the countdown. */
  startISO: string;
  /** Local wall-clock times for the Google Calendar link (ctz=Asia/Kolkata). */
  calStart: string;
  calEnd: string;
  venue: string[];
  /** Leave empty to hide the "Open in Maps" button. */
  mapQuery: string;
  note?: string;
  accent: "walima";
}

export const GROOM = {
  first: "Afzal",
  last: "Khan",
  full: "Mohd. Afzal Khan",
  parents: "S/o. Sahebe Alam Khan",
};

export const BRIDE = {
  first: "Asra",
  last: "Chaudhari",
  full: "Asra Chaudhari",
  parents: "D/o. Haji Akeel Ahmed Chaudhari",
};

export const HOSTS = "Sahebe Alam Khan, Family, Relatives & Friends";

/**
 * Optional: WhatsApp number (country code, digits only, e.g. "919876543210")
 * to enable the "RSVP on WhatsApp" button. Leave empty to hide it.
 */
export const RSVP_WHATSAPP = "";

export const WALIMA: EventInfo = {
  id: "walima",
  title: "Dawat-e-Walima",
  short: "Walima",
  kicker: "Insha Allah · The Reception",
  weekday: "Sunday",
  day: "13",
  month: "December",
  year: "2026",
  time: "08:00 pm to 11:30 pm",
  startISO: "2026-12-13T20:00:00+05:30",
  calStart: "20261213T200000",
  calEnd: "20261213T233000",
  venue: [
    "Jogle Banquet Hall, 1st Floor Gents & 2nd Flr. Ladies,",
    "Patel Paradise C.H.S. Ltd., Sector-35 E,",
    "Owe Gaon, Kharghar, Navi Mumbai - 410 210.",
  ],
  mapQuery:
    "Jogle Banquet Hall, Patel Paradise C.H.S. Ltd., Sector 35E, Owe Gaon, Kharghar, Navi Mumbai 410210",
  accent: "walima",
};

export const INVITE_LINE = "THE WALIMA (RECEPTION) CEREMONY OF";

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function calendarUrl(e: EventInfo) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title} — ${GROOM.first} & ${BRIDE.first}`,
    dates: `${e.calStart}/${e.calEnd}`,
    ctz: "Asia/Kolkata",
    location: e.venue.join(" "),
    details: `Walima of ${GROOM.full} & ${BRIDE.full}. Your gracious presence will make our celebration even more special.`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
