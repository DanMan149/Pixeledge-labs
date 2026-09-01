import { useEffect, useState } from "react";

export type Currency = "USD" | "PKR";

function detect(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    if (tz === "Asia/Karachi") return "PKR";
    const langs = navigator.languages ?? [navigator.language];
    if (langs.some((l) => l.toUpperCase().endsWith("-PK"))) return "PKR";
  } catch {
    /* noop */
  }
  return "USD";
}

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    const stored = localStorage.getItem("pel-currency") as Currency | null;
    setCurrency(stored === "PKR" || stored === "USD" ? stored : detect());
  }, []);

  const update = (c: Currency) => {
    setCurrency(c);
    localStorage.setItem("pel-currency", c);
  };

  return { currency, setCurrency: update };
}

export function formatPrice(currency: Currency, usd: number, pkr: number) {
  return currency === "PKR"
    ? `Rs${pkr.toLocaleString("en-US")}`
    : `$${usd.toLocaleString("en-US")}`;
}
