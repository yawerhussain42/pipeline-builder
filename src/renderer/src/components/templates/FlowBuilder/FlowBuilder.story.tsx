import { FlowBuilder, FlowBuilderArgs } from './FlowBuilder';
export default {
  title: 'templates/FlowBuilder',
  component: FlowBuilder,
  args: {
    children: 'Default',
  },
};
const Template = (args: FlowBuilderArgs) => <FlowBuilder {...args} />;
export const Default = Template.bind({});
