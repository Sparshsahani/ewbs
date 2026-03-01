export default function MapSection() {
  return (
    <div data-aos="zoom-in" className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps?q=Lucknow&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
