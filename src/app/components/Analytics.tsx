import Script from 'next/script';

const Analytics = () => (
  <>
    {/* <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
      strategy='afterInteractive'
    />
    <Script id='google-analytics-init' strategy='afterInteractive'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.NEXT_PUBLIC_GTAG});
      `}
    </Script> */}
  </>
);

export default Analytics;
