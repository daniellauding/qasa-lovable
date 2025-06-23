import React, { useState } from 'react';
import Button from './ui/Button';
import Typography from './ui/Typography';
import TextArea from './ui/TextArea';
import Icon from './ui/Icon';
import Modal from './ui/Modal';

const ContactModal = ({ isOpen, onClose, propertyData }) => {
  const [step, setStep] = useState('form'); // form, success
  const [message, setMessage] = useState(
    'Hejsan! Din uthyrningsannons är det jag letar efter så jag undrade om den fortfarande är tillgänglig?'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    setStep('success');
  };

  const renderPropertyOverview = () => (
    <div className="flex gap-4 mb-6">
      <div className="w-24 h-24">
        <img 
          loading="lazy" 
          className="rounded-lg w-full h-full object-cover" 
          src={propertyData.image} 
          alt={propertyData.title}
        />
      </div>
      <div className="flex flex-col flex-1">
        <Typography variant="h3" className="mb-2">{propertyData.title}</Typography>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <span>{propertyData.type}</span>
          <span>•</span>
          <span>{propertyData.rooms} rum</span>
          <span>•</span>
          <span>{propertyData.area} m²</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <span>{propertyData.moveInDate}</span>
          <Icon name="ArrowRightIcon" size="sm" />
          <span>{propertyData.duration}</span>
        </div>
        <Typography variant="h3" className="mt-2">
          {propertyData.price} kr
        </Typography>
      </div>
    </div>
  );

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {renderPropertyOverview()}
      <div className="flex flex-col gap-2">
        <Typography variant="body1" weight="medium">
          Meddelande
        </Typography>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          placeholder="Skriv meddelande till fastighetsägaren."
        />
      </div>
      <Button type="submit" variant="primary" fullWidth>
        Skicka
      </Button>
    </form>
  );

  const renderSuccess = () => (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <Icon name="CheckIcon" size="lg" className="text-green-600" />
      </div>
      <div>
        <Typography variant="h3" className="mb-2">Tack för ditt meddelande!</Typography>
        <Typography variant="body2" color="secondary">
          Vi har skickat ditt meddelande till fastighetsägaren. De kommer att kontakta dig så snart som möjligt.
        </Typography>
      </div>
      <Button variant="primary" fullWidth onClick={onClose}>
        Stäng
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={step === 'form' ? "Kontakta fastighetsägaren" : undefined}
      showCloseButton={step === 'form'}
    >
      {step === 'form' ? renderForm() : renderSuccess()}
    </Modal>
  );
};

export default ContactModal; 