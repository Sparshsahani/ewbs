import React from "react";

export default function TrustBadge() {
  return (
    <div data-aos="fade-up" style={{ width: "100%", marginTop: "10px", all: "unset" }}>
      <style>
        {`.brandpush-logo-container-item { height: auto; width: 100%; position: relative; padding: 25px 50px; }
.brandpush-vertical-center { height: inherit; display: flex; align-content: center; flex-wrap: wrap; flex-direction: row; justify-content: center; align-content: center; align-items: center; }
.brandpush-vertical-center img.brandpush-news-logo{ max-width: 100px; max-height: 66px; min-width: 50px; min-height: 14px; height: auto; width: auto; margin: 7px 10px; overflow: visible; }
.brandpush-trust-badge, .brandpush-title, .brandpush-footer{ font-family: sans-serif !important; }
.brandpush-title:before, .brandpush-title:after { content: ""; flex: 1 1; border-bottom: 1px solid #d8d8d8; margin: auto; width: 27%; display: block; position: relative; }
.brandpush-title:before{ margin-left: 30px; top:12px; }
.brandpush-title:after{ margin-right: 30px; top: -13px; }
@media screen and (min-width: 585px) { .brandpush-logo-container{padding: 0 20px;} }
@media screen and (max-width: 584px) { .brandpush-news-logo {max-width:70px} .brandpush-title {font-size: 15px;top: -5px;letter-spacing: 6px;} .brandpush-title:before, .brandpush-title:after{border-bottom:none !important;} .brandpush-leaf{display:none !important;} }
@media screen and (max-width: 340px) { .brandpush-title-hr {display:none !important;} .brandpush-title {font-size:14px;padding:0 !important;} .brandpush-footer {font-size:11px !important;margin:20px 0 25px 0 !important;letter-spacing: 2px !important;} .brandpush-news-logo{max-width:50px !important;} }
.brandpush-logo-container{ text-align: center; margin: 0 auto 0 auto; display: flex; align-content: start; justify-content: space-between; align-items: center; flex-wrap: nowrap; flex-direction: row; }
.brandpush-newslogos { display:inline-block; position:relative; }`}
      </style>
      <div
        id="brandpush-trust-badge"
        style={{
          position: "relative",
          width: "100%",
          background: "transparent",
          borderRadius: "10px",
          minHeight: "180px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "0px 5px 10px 5px",
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontWeight: 600,
            letterSpacing: "8px",
            lineHeight: 1.3,
          }}
        >
          <div style={{ height: "58px" }}>
            <span
              className="brandpush-title"
              style={{ zIndex: 1, position: "relative", padding: "0 20px", margin: 0, color: "#0e0e0e" }}
            >
              AS SEEN ON
            </span>
          </div>
          <div className="brandpush-logo-container">
            <img
              className="brandpush-leaf"
              alt="Trust Reef"
              style={{
                position: "absolute",
                height: "110px",
                left: "25px",
                margin: 0,
                padding: 0,
                zIndex: 0,
                opacity: 0.2,
              }}
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public"
            />
            <img
              className="brandpush-leaf"
              alt="Trust Reef"
              style={{
                position: "absolute",
                height: "110px",
                right: "25px",
                margin: 0,
                padding: 0,
                zIndex: 0,
                opacity: 0.2,
                WebkitTransform: "scaleX(-1)",
                transform: "scaleX(-1)",
              }}
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public"
            />
            <div className="brandpush-logo-container-item">
              <div className="brandpush-vertical-center">
                <a
                  href="https://markets.businessinsider.com/news/stocks/ewbs-announces-launch-of-pioneering-service-to-assist-emerging-business-owners-with-business-setup-in-dubai-1033584871"
                  target="_Blank"
                  className="brandpush-newslogos"
                >
                  <img
                    alt="Featured on Business Insider"
                    className="brandpush-news-logo"
                    style={{ marginRight: "14px" }}
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/ea272993-a87c-4e0e-48bd-6ca4d5b1ea00/public"
                  />
                </a>
                <a
                  href="https://www.benzinga.com/pressreleases/24/07/39922791/ewbs-announces-launch-of-pioneering-service-to-assist-emerging-business-owners-with-business-setup-"
                  target="_Blank"
                  className="brandpush-newslogos"
                >
                  <img
                    alt="Featured on Benzinga"
                    className="brandpush-news-logo"
                    style={{ marginRight: "14px" }}
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/ec881fff-1d06-43da-18e1-4460b8922c00/public"
                  />
                </a>
                <a
                  href="https://asiaone.com/business/ewbs-announces-launch-pioneering-service-assist-emerging-business-owners-business-setup"
                  target="_Blank"
                  className="brandpush-newslogos"
                >
                  <img
                    alt="Featured on Asia One"
                    className="brandpush-news-logo"
                    style={{ marginRight: "14px" }}
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/35c4a66b-38cf-461d-19c1-abcfe52b7800/public"
                  />
                </a>
                <a
                  href="https://www.barchart.com/story/news/27569537/ewbs-announces-launch-of-pioneering-service-to-assist-emerging-business-owners-with-business-setup-in-dubai"
                  target="_Blank"
                  className="brandpush-newslogos"
                >
                  <img
                    alt="Featured on BarChart"
                    className="brandpush-news-logo"
                    style={{ marginRight: "14px" }}
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/d1d24201-6f48-4c9b-6ed2-46464eac1900/public"
                  />
                </a>
                <a
                  href="https://www.theglobeandmail.com/investing/markets/markets-news/Plentisoft/27569539/ewbs-announces-launch-of-pioneering-service-to-assist-emerging-business-owners-with-business-setup-in-dubai/"
                  target="_Blank"
                  className="brandpush-newslogos"
                >
                  <img
                    alt="Featured on The Globe And Mail"
                    className="brandpush-news-logo"
                    style={{ marginRight: "14px" }}
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/7acfc7a6-2b16-4ba6-01d5-96b99d462f00/public"
                  />
                </a>
                <a
                  href="https://pr.newsmax.com/article/EWBS-Announces-Launch-Of-Pioneering-Service-To-Assist-Emerging-Business-Owners-With-Business-Setup-In-Dubai?storyId=66a0772523ad720008b148dc"
                  target="_Blank"
                  className="brandpush-newslogos"
                >
                  <img
                    alt="Featured on Newsmax"
                    className="brandpush-news-logo"
                    style={{ marginRight: "14px" }}
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/92dc65b2-fac1-4862-0e17-f438af238000/public"
                  />
                </a>
                <a
                    href="http://www.wicz.com/Global/story.asp?S=51077720"
                    target="_Blank"
                    className="brandpush-newslogos"
                  >
                    <img
                      alt="Featured on FOX 40"
                      className="brandpush-news-logo"
                      style={{ marginRight: "14px" }}
                      src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fc4af63-e906-4112-d141-d504c6ea5c00/public"
                    />
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 0,
            fontFamily: "sans-serif",
          }}
        >
          <span
            className="brandpush-footer"
            style={{
              textAlign: "center",
              padding: "0 20px",
              fontSize: "13px",
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "3px",
              position: "relative",
              width: "100%",
              margin: "0 0 8px 0",
              display: "inline-block",
              color: "#a5a5a5",
            }}
          >
            AND OVER 500 NEWS SITES
          </span>
          <div
            style={{
              color: "#717171",
              fontSize: "10px",
              letterSpacing: 0,
              height: "15px",
              margin: "3px 0 0 0",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
