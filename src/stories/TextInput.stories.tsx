import { ComponentStory, ComponentMeta } from '@storybook/react';
import CenterComponentDecorator from "./decorators";
import {TextInput} from "../components";

export default {
    title: 'TextInput',
    component: TextInput,
    decorators: [CenterComponentDecorator]
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({})

Default.args = {
};