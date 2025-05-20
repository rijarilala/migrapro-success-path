
const ContactMap = () => {
  return (
    <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9075923006194!2d48.19782721490783!3d-18.933643087155384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d967b40f779%3A0x9b6cf7f1ecea8b5d!2sUMEGREAT%20PRO!5e0!3m2!1sfr!2sfr!4v1653012345678!5m2!1sfr!2sfr"
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
