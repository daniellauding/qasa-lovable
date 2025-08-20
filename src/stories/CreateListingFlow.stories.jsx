import React from 'react';
import CreateListingFlow from '../prototypes/landlords/create-listing/CreateListingFlow';

export default {
  title: 'Landlords/CreateListingFlow',
  component: CreateListingFlow,
  parameters: {
    docs: {
      description: {
        component: 'Complete flow for landlords to create a new rental listing. This is a multi-step form that guides landlords through the process of listing their property.'
      }
    }
  }
};

export const Default = {
  render: () => <CreateListingFlow />
};

export const Step1 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 1: Introduction to the listing creation process'
      }
    }
  }
};

export const Step2 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 2: Address search and property location'
      }
    }
  }
};

export const Step3 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 3: Address details and validation'
      }
    }
  }
};

export const Step4 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 4: Map location and marker positioning'
      }
    }
  }
};

export const Step5 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 5: User type and company information'
      }
    }
  }
};

export const Step6 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 6: Rental type and furnishing options'
      }
    }
  }
};

export const Step7 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 7: Property type and ownership details'
      }
    }
  }
};

export const Step8 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 8: Property size and room configuration'
      }
    }
  }
};

export const Step9 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 9: Rental period and availability'
      }
    }
  }
};

export const Step10 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 10: Content creation introduction'
      }
    }
  }
};

export const Step11 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 11: Amenities and property features'
      }
    }
  }
};

export const Step12 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 12: Property condition and renovation details'
      }
    }
  }
};

export const Step13 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 13: Property description and details'
      }
    }
  }
};

export const Step14 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 14: Image upload and management'
      }
    }
  }
};

export const Step15 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 15: Final questions introduction'
      }
    }
  }
};

export const Step16 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 16: Rules and accessibility settings'
      }
    }
  }
};

export const Step17 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 17: Additional costs and electricity'
      }
    }
  }
};

export const Step18 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 18: Viewing appointments and scheduling'
      }
    }
  }
};

export const Step19 = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Step 19: Contact information for viewings'
      }
    }
  }
};

export const Preview = {
  render: () => <CreateListingFlow />,
  parameters: {
    docs: {
      description: {
        story: 'Preview: Final review of the listing before publication'
      }
    }
  }
}; 