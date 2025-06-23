import TenantApplyHome from '../prototypes/tenants/apply-home/TenantApplyHome';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Prototypes/TenantApplyHome',
  component: TenantApplyHome,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
}; 