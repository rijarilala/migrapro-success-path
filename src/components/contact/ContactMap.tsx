
const ContactMap = () => {
  return (
    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.775663458625!2d48.22520631490432!3d-18.946344986992825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de373898f45%3A0xea1c16949f1af11d!2sUMEGREAT%20Pro%2C%20Lot%20A351%2C%20Moramanga%20514!5e0!3m2!1sfr!2smg!4v1716208464275!5m2!1sfr!2smg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="UMEGREAT Pro à Moramanga"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default ContactMap;
