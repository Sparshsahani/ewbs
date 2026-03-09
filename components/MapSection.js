export default function MapSection() {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%" }}>
      <style>{`
        #google-maps-canvas img {
          max-width: none !important;
          background: none !important;
          font-size: inherit;
          font-weight: inherit;
        }
      `}</style>
      <div
        style={{
          overflow: "hidden",
          maxWidth: "100%",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          id="google-maps-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            title="EWBS Office Location"
            style={{ height: "100%", width: "100%", border: 0 }}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Aspin+Commercial+Tower+-+9th+Floor+,Office+No.+903+-+Dubai+-+United+Arab+Emirates&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
