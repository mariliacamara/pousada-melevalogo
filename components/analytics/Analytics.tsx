"use client";

import Script from "next/script";

import { CONSENT_KEY, useConsent } from "@/lib/consent";

type Props = { gaId?: string; pixelId?: string };

/**
 * GA4 e Meta Pixel, com tratamentos diferentes de propósito:
 *
 * - GA4 carrega sempre, em Consent Mode v2 com tudo "denied" por padrão.
 *   Sem aceite ele não grava cookie nem identifica a pessoa, só envia pings
 *   anônimos que o Google usa para modelar o tráfego. Com aceite, mede normal.
 * - O Pixel da Meta só entra na página depois do aceite, porque ele existe
 *   para publicidade e não tem um modo sem cookies equivalente.
 */
export default function Analytics({ gaId, pixelId }: Props) {
  const consent = useConsent();

  return (
    <>
      {gaId && (
        <>
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
var c=null;try{c=localStorage.getItem(${JSON.stringify(CONSENT_KEY)});}catch(e){}
var s=c==='granted'?'granted':'denied';
gtag('consent','default',{ad_storage:s,ad_user_data:s,ad_personalization:s,analytics_storage:s});
gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});`}
          </Script>
          <Script
            id="ga-lib"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {pixelId && consent === "granted" && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',${JSON.stringify(pixelId)});fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
