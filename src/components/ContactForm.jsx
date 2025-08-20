import React, { useState } from 'react';

const ContactForm = ({ propertyData }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to send the message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      alert('Meddelande skickat!');
      setMessage('');
    } catch (error) {
      alert('Ett fel uppstod. Försök igen senare.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-4 p-4 bg-[var(--color-background-inset)] rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src={propertyData.images[0]}
              alt={propertyData.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium">{propertyData.title}</h3>
              <p className="text-sm text-gray-500">
                {propertyData.rooms} • {propertyData.size}
              </p>
              <p className="text-sm font-medium">{propertyData.price}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meddelande
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-qasa-pink focus:border-qasa-pink"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hej! är din annons fortfarande ledig? Den ser väldigt intressant ut!"
              required
            />
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2">
              Genom att klicka på "Skicka" godkänner du Qasas{' '}
              <a href="#" className="text-qasa-pink hover:underline">
                användarvillkor
              </a>
              .
            </p>
            <p>
              Dina personuppgifter kommer att behandlas i enlighet med vår{' '}
              <a href="#" className="text-qasa-pink hover:underline">
                integritetspolicy
              </a>
              .
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-qasa-pink text-white py-3 px-6 rounded-lg transition-colors ${
              isSubmitting
                ? 'opacity-75 cursor-not-allowed'
                : 'hover:bg-pink-600'
            }`}
          >
            {isSubmitting ? 'Skickar...' : 'Skicka'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm; 