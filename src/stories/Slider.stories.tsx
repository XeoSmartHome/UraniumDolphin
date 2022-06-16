import {ComponentStory, ComponentMeta} from '@storybook/react';
import CenterComponentDecorator from "./decorators";
import {Slider} from "../components";

export default {
    title: 'Slider',
    component: Slider,
    decorators: [CenterComponentDecorator]
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({})

Default.args = {
};