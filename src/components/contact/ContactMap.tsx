
const ContactMap = () => {
  return (
    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15571.901033212647!2d48.19441511789074!3d-18.933935141548144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f456a3cae06acf%3A0x2a226cf2859f6e48!2sMoramanga%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
