"use client";

import { useEffect, useState } from "react";

import WhatsAppLink from "@/components/WhatsAppLink";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { bookingMessage } from "@/lib/whatsapp";

const ADULTS = [1, 2, 3, 4, 5, 6];
const KIDS = [0, 1, 2, 3, 4];

export default function BookingForm() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(2);
  // "Hoje" depende do relógio do visitante: só é calculado no navegador,
  // para o HTML do servidor e o do cliente não divergirem.
  const [today, setToday] = useState<string>();

  useEffect(() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
    setToday(local.toISOString().slice(0, 10));
  }, []);

  const onCheckin = (value: string) => {
    setCheckin(value);
    if (checkout && value && checkout <= value) setCheckout("");
  };

  const message = bookingMessage({ checkin, checkout, adults, kids });

  return (
    <fieldset className="min-w-0 rounded-3xl bg-white p-5 text-ink shadow-[0_10px_0_var(--color-pool-deep)]">
      <legend className="float-left mb-3.5 w-full text-lg font-extrabold">
        Quando vocês vêm?
      </legend>

      <div className="clear-both grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label className="flex flex-col gap-1.5 text-sm font-bold max-[379px]:col-span-2">
          Entrada
          <input
            type="date"
            className="field"
            value={checkin}
            min={today}
            onChange={(e) => onCheckin(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold max-[379px]:col-span-2">
          Saída
          <input
            type="date"
            className="field"
            value={checkout}
            min={checkin || today}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold">
          Adultos
          <select
            className="field"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          >
            {ADULTS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold">
          Crianças
          <select
            className="field"
            value={kids}
            onChange={(e) => setKids(Number(e.target.value))}
          >
            {KIDS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <WhatsAppLink
        message={message}
        placement="hero_form"
        className="btn btn-sun mt-3.5 w-full rounded-2xl text-lg"
      >
        <WhatsAppIcon className="size-5 shrink-0" />
        Consultar disponibilidade no WhatsApp
      </WhatsAppLink>

      <p className="mt-3 text-sm leading-snug text-ink-soft">
        <strong className="text-ink">A mensagem já vai pronta:</strong> “{message}”
      </p>
    </fieldset>
  );
}
