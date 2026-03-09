export default function CareerForm() {
  return (
    <div className="w-full px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-4">
        Career With Us
      </h1>
      <hr className="mb-6" />
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/s1PRD6x1NGBNT68DRAnL"
        style={{
          width: "100%",
          height: "1369px",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-s1PRD6x1NGBNT68DRAnL"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="HR Form"
        data-height="1369"
        data-layout-iframe-id="inline-s1PRD6x1NGBNT68DRAnL"
        data-form-id="s1PRD6x1NGBNT68DRAnL"
        title="HR Form"
        loading="lazy"
      />
      <script src="https://link.msgsndr.com/js/form_embed.js" />
    </div>
  );
}
