import { useEffect } from 'react';

const WhatsApp = () => {
  useEffect(() => {
    const handleClick = () => {
      const phoneNumber = '+923231426046'; // Replace with the desired WhatsApp phone number

      const url = `https://wa.me/${phoneNumber}`;

      // Open WhatsApp chat in a new window
      window.open(url, '_blank');
    };

    const button = document.getElementById('whatsapp-button');
    button!.addEventListener('click', handleClick);

    return () => {
      button!.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button id="whatsapp-button" type="button">
      Open For WhatsApp Chat
    </button>
  );
};

export default WhatsApp;
