import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button} from "../components";
import CenterComponentDecorator from "./decorators";

export default {
    title: 'Button',
    component: Button,
    decorators: [CenterComponentDecorator]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({})

Default.args = {
    label: 'Button',
};