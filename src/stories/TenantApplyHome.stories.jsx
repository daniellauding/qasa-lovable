import TenantApplyHome from '../prototypes/tenants/apply-home/TenantApplyHome';
export default {
  title: 'Prototypes/TenantApplyHome',
  component: TenantApplyHome,
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
}; 