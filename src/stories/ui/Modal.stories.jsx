import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Input from '../../components/ui/Input';
import TextArea from '../../components/ui/TextArea';
import Icon from '../../components/ui/Icon';

export default {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

const ModalTemplate = ({ title, children, ...args }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        {...args}
      >
        {children}
      </Modal>
    </>
  );
};

export const Default = {
  render: () => (
    <ModalTemplate title="Example Modal">
      <Typography variant="body1">
        This is a basic modal with some content.
      </Typography>
    </ModalTemplate>
  ),
};

export const WithoutTitle = {
  render: () => (
    <ModalTemplate>
      <Typography variant="body1">
        This modal has no title but still has content.
      </Typography>
    </ModalTemplate>
  ),
};

export const WithActions = {
  render: () => (
    <ModalTemplate title="Confirm Action">
      <div className="space-y-4">
        <Typography variant="body1">
          Are you sure you want to proceed with this action?
        </Typography>
        <div className="flex gap-3 justify-end">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    </ModalTemplate>
  ),
};

export const WithLongContent = {
  render: () => (
    <ModalTemplate title="Long Content">
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Typography key={i} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        ))}
      </div>
    </ModalTemplate>
  ),
};

export const WithSectionHeader = {
  render: () => (
    <ModalTemplate 
      title="Create New Listing"
      description="Fill in the details below to create your new rental listing."
    >
      <div className="space-y-4">
        <Typography variant="body1">
          This modal uses SectionHeader for consistent title and description styling.
        </Typography>
      </div>
    </ModalTemplate>
  ),
};

export const WithSectionFooter = {
  render: () => (
    <ModalTemplate 
      title="Confirm Action"
      showFooter={true}
      footerProps={{
        onNext: () => console.log('Confirmed'),
        onPrev: () => console.log('Cancelled'),
        nextText: 'Confirm',
        prevText: 'Cancel',
        showPrev: true,
        showNext: true
      }}
    >
      <div className="space-y-4">
        <Typography variant="body1">
          Are you sure you want to proceed with this action? This modal uses SectionFooter for consistent button layout.
        </Typography>
      </div>
    </ModalTemplate>
  ),
};

export const FormModal = {
  render: () => (
    <ModalTemplate 
      title="Contact Information"
      description="Please provide your contact details below."
      showFooter={true}
      footerProps={{
        onNext: () => console.log('Saved'),
        onPrev: () => console.log('Cancelled'),
        nextText: 'Save',
        prevText: 'Cancel',
        showPrev: true,
        showNext: true
      }}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <Input placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <TextArea placeholder="Enter your message" rows={4} />
        </div>
      </div>
    </ModalTemplate>
  ),
};



// Contact Modal Variant
export const ContactModal = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Contact Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Contact Karin"
          size="lg"
        >
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div>
                <Typography variant="title-sm">Sörby Gård, Klockrike</Typography>
                <Typography variant="body-sm" className="text-gray-600">Apartment / 3 rooms / 85 m²</Typography>
                <Typography variant="body-sm" className="text-gray-600">Now → Until further notice</Typography>
                <Typography variant="title-sm">SEK 10,495</Typography>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <Typography variant="title-sm" className="mb-3">Want a hand writing your message?</Typography>
              <Typography variant="body-sm" className="text-gray-600 mb-4">
                We'll suggest a message based on details like the home and your profile.
              </Typography>
              <Button variant="outline" size="sm">Login to suggest a message</Button>
            </div>
            
            <div>
              <Typography variant="label-sm" className="mb-2">Message</Typography>
              <TextArea 
                placeholder="Hello Karin! I'm interested in renting your property."
                rows={4}
              />
            </div>
            
            <Button variant="primary" className="w-full">Send application</Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: { disable: true },
  },
};

// Premium Upsell Modal Variant
export const PremiumModal = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>Open Premium Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Find your next home 2.5x easier with Qasa Premium"
          size="lg"
        >
          <div className="space-y-6">
            <div className="text-center">
              <Typography variant="body-sm" className="text-gray-600">From SEK 139 per month</Typography>
            </div>
            
            <div>
              <Typography variant="title-sm" className="mb-4">What's included</Typography>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Icon name="Megaphone" size="lg" className="text-yellow-600 mt-1" />
                  <div>
                    <Typography variant="body-md" className="font-medium">Super apply</Typography>
                    <Typography variant="body-sm" className="text-gray-600">
                      Give your application an extra boost.
                    </Typography>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Lightbulb" size="lg" className="text-yellow-600 mt-1" />
                  <div>
                    <Typography variant="body-md" className="font-medium">Exclusive insights</Typography>
                    <Typography variant="body-sm" className="text-gray-600">
                      See how the rent compares to similar homes.
                    </Typography>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">Maybe later</Button>
              <Button variant="premium" className="flex-1">Get Premium</Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: { disable: true },
  },
};

// Rent Breakdown Modal Variant
export const RentModal = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <>
        <Button variant="outline" onClick={() => setIsOpen(true)}>Open Rent Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Rent"
          size="md"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <Typography variant="title-sm">Monthly cost</Typography>
              <Typography variant="title-sm">SEK 10,495</Typography>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <Typography variant="body-md" className="font-medium">Rent</Typography>
                  <Typography variant="body-sm" className="text-gray-600">
                    The monthly rent for the home (does not include digital lease, deposit security and support)
                  </Typography>
                </div>
                <Typography variant="body-md">SEK 10,000</Typography>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <Typography variant="body-md" className="font-medium">Service fee</Typography>
                  <Typography variant="body-sm" className="text-gray-600">
                    Rent safely at Qasa. We handle deposit, payments and rental agreement and you are protected from fraud.
                  </Typography>
                </div>
                <Typography variant="body-md">SEK 495</Typography>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <Typography variant="body-md" className="font-medium">Deposit</Typography>
                  <Typography variant="body-sm" className="text-gray-600">
                    An approved credit check and other requirements apply to be eligible for renting deposit free.
                  </Typography>
                </div>
                <div className="text-right">
                  <Typography variant="body-md" className="line-through text-gray-400">SEK 10,000</Typography>
                  <Typography variant="body-md" className="text-green-600">SEK 0</Typography>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">Close</Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: { disable: true },
  },
};

// All Modal Variants - Pure HTML/CSS mockups to avoid hooks
const AllVariantsTemplate = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Default Modal</h3>
      <div className="bg-white border rounded-lg p-6 max-w-md shadow-lg">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Example Modal</h4>
          <p className="text-gray-600">This is a basic modal with some content.</p>
          <div className="flex gap-2 justify-end">
            <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">Cancel</button>
            <button className="px-3 py-2 text-sm bg-[var(--color-primary)] text-white rounded-lg">OK</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Form Modal</h3>
      <div className="bg-white border rounded-lg p-6 max-w-lg shadow-lg">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contact Information</h4>
          <p className="text-gray-600 text-sm">Please provide your contact details below.</p>
          <div className="space-y-3">
            <input className="w-full p-2 border rounded" placeholder="Enter your name" />
            <input className="w-full p-2 border rounded" type="email" placeholder="Enter your email" />
            <textarea className="w-full p-2 border rounded" rows={3} placeholder="Enter your message"></textarea>
          </div>
          <div className="flex gap-2 justify-end">
            <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">Cancel</button>
            <button className="px-3 py-2 text-sm bg-[var(--color-primary)] text-white rounded-lg">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Modal</h3>
      <div className="bg-white border rounded-lg p-6 max-w-2xl shadow-lg">
        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Contact Karin</h4>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <h5 className="font-semibold">Sörby Gård, Klockrike</h5>
              <p className="text-gray-600 text-sm">Apartment / 3 rooms / 85 m²</p>
              <p className="text-gray-600 text-sm">Now → Until further notice</p>
              <p className="font-semibold">SEK 10,495</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h5 className="font-semibold mb-3">Want a hand writing your message?</h5>
            <p className="text-gray-600 text-sm mb-4">We'll suggest a message based on details like the home and your profile.</p>
            <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">Login to suggest a message</button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-3 border rounded-lg" rows={4} placeholder="Hello Karin! I'm interested in renting your property. Is it still available?"></textarea>
            <p className="text-gray-500 text-xs mt-2">1924 characters remaining</p>
          </div>
          <button className="w-full py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium">Send application</button>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Premium Upsell Modal</h3>
      <div className="bg-white border rounded-lg p-6 max-w-2xl shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2">Find your next home 2.5x easier with Qasa Premium</h4>
            <p className="text-gray-600 text-sm">From SEK 139 per month</p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">What's included</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">📢</div>
                <div>
                  <p className="font-medium">Super apply</p>
                  <p className="text-gray-600 text-sm">Give your application an extra boost. Stay at the top of the landlord's inbox by sending a Super application.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">💡</div>
                <div>
                  <p className="font-medium">Exclusive insights</p>
                  <p className="text-gray-600 text-sm">See how the rent compares to similar homes, number of applicants, ongoing chats, and your queue position for firsthand homes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">🔍</div>
                <div>
                  <p className="font-medium">Highlighted profile</p>
                  <p className="text-gray-600 text-sm">Get a premium badge on your profile, increasing your visibility in the landlord's inbox and in our tenant search.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">⏰</div>
                <div>
                  <p className="font-medium">Apply earlier</p>
                  <p className="text-gray-600 text-sm">Apply before everyone else, with priority access to selected first-hand homes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">✈️</div>
                <div>
                  <p className="font-medium">More applications</p>
                  <p className="text-gray-600 text-sm">Apply to 10 first-hand homes simultaneously, and as always – unlimited applications to all other homes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="flex-1 py-2 border rounded-lg hover:bg-gray-50">Maybe later</button>
            <button className="flex-1 py-2 bg-yellow-500 text-[var(--color-brown)] rounded-lg font-medium">Get Premium</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Rent Breakdown Modal</h3>
      <div className="bg-white border rounded-lg p-6 max-w-md shadow-lg">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Rent</h4>
          <div className="flex justify-between items-center py-2 border-b">
            <p className="font-semibold">Monthly cost</p>
            <p className="font-semibold">SEK 10,495</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Rent</p>
                <p className="text-gray-600 text-sm">The monthly rent for the home (does not include digital lease, deposit security and support)</p>
              </div>
              <p>SEK 10,000</p>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Service fee</p>
                <p className="text-gray-600 text-sm">Rent safely at Qasa. We handle deposit, payments and rental agreement and you are protected from fraud.</p>
              </div>
              <p>SEK 495</p>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Deposit</p>
                <p className="text-gray-600 text-sm">An approved credit check and other requirements apply to be eligible for renting deposit free.</p>
              </div>
              <div className="text-right">
                <p className="line-through text-gray-400">SEK 10,000</p>
                <p className="text-green-600">SEK 0</p>
              </div>
            </div>
          </div>
          <button className="w-full py-2 border rounded-lg hover:bg-gray-50">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export const AllVariants = {
  render: AllVariantsTemplate,
  parameters: {
    docs: { disable: true },
  },
};