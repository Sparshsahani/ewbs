import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Provider from "@/components/Provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "EWBS | Business Setup in UAE",
    template: "%s | EWBS",
  },
  description: "Award-winning business setup consultants in Dubai.",
  verification: {
    google: "-I7MipM5wwtv2ew_33tTD3eapZ0xMWo6aHC6yjso774",
    facebook: "q9lfzu2yuac4gimhsv4z3hs7r5lqda",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Provider>{children}</Provider>

        {/* ClickCease Tracking */}
        <Script id="clickcease-tracking" strategy="afterInteractive">
          {`
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = 'https://www.clickcease.com/monitor/stat.js';
            document.head.appendChild(script);
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-307668849"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-307668849');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return; n=f.fbq=function(){
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '797504518267120');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Snapchat Pixel */}
        <Script id="snapchat-pixel" strategy="afterInteractive">
          {`
            (function(e,t,n){
              if(e.snaptr)return;
              var a=e.snaptr=function(){a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
              a.queue=[]; var s='script', r=t.createElement(s); r.async=!0;
              r.src=n; var u=t.getElementsByTagName(s)[0];
              u.parentNode.insertBefore(r,u);
            })(window,document,'https://sc-static.net/scevent.min.js');
            snaptr('init','eef7e25c-5c55-4b78-a5f3-7e046f92d3ed',{'user_email':'_INSERT_USER_EMAIL_'});
            snaptr('track','PAGE_VIEW');
          `}
        </Script>

        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function(w,d,t){
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){
                var i="https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;
                ttq._t=ttq._t||{};ttq._t[e]=+new Date;
                ttq._o=ttq._o||{};ttq._o[e]=n||{};
                var o=document.createElement("script");o.type="text/javascript";o.async=!0;
                o.src=i+"?sdkid="+e+"&lib="+t;
                var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)
              };
              ttq.load('D139MURC77U8DLIL61E0');
              ttq.page();
            }(window,document,'ttq');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","tk9owqfn8s");
          `}
        </Script>

        {/* CallPage Widget - only load in production */}
        {process.env.NODE_ENV === 'production' && (
        <Script id="callpage-widget" strategy="afterInteractive">
          {`
            var loadBabel = function (url, callback) { var script = document.createElement('script'); script.async = true; if (script.readyState) { script.onreadystatechange = function () { if (script.readyState == 'loaded' || script.readyState == 'complete') { script.onreadystatechange = null; callback(window, document); } }; } else { script.onload = function () { callback(window, document); }; } script.src = url; document.head.appendChild(script); }; var getCookie = function (cname) { var objToday = new Date(); var version = objToday.toISOString().split('T')[0].split('-').join(''); var name = cname + '='; var decodedCookie = decodeURIComponent(document.cookie); var cookieArray = decodedCookie.split(';'); for (var i = 0; i < cookieArray.length; i++) { var cookie = cookieArray[i]; cookie = cookie.trim(); if (cookie.indexOf(name) == 0) { return cookie.substring(name.length, cookie.length); } } return version; }; var loadWidget = function (window, document) { var __cp = { "id": "o3BYtkgVqSOYEsyG2HmbJeqOUirPAcuZId1L0CT2Y-8", "version": "1.1" }; var cp = document.createElement('script'); cp.type = 'text/javascript'; cp.async = true; cp.src = "++cdn-widget.callpage.io+build+js+callpage.js".replace(/[+]/g, '/').replace(/[=]/g, '.') + '?v=' + getCookie('callpage-widget-version'); var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cp, s); if (window.callpage) { alert('You could have only 1 CallPage code on your website!'); } else { window.callpage = function (method) { if (method == '__getQueue') { return this.methods; } else if (method) { if (typeof window.callpage.execute === 'function') { return window.callpage.execute.apply(this, arguments); } else { (this.methods = this.methods || []).push({ arguments: arguments, }); } } }; window.callpage.__cp = __cp; window.callpage('api.button.autoshow'); } }; loadBabel('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js', function () { return loadWidget(window, document); });
          `}
        </Script>
        )}

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/971509940442"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 left-5 md:left-10 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl md:text-5xl" />
        </a>

      </body>
    </html>
  );
}