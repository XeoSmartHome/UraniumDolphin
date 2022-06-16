import {ComponentStory, ComponentMeta} from '@storybook/react';
import CenterComponentDecorator from "./decorators";
import {DropDown} from "../components";

export default {
    title: 'DropDown',
    component: DropDown,
    decorators: [CenterComponentDecorator]
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Default = Template.bind({})

Default.args = {
    options: [
        {
            label: "Option 1",
            value: 1
        },
        {
            label: "Option 2",
            value: 2
        },
        {
            label: "Option 3",
            value: 3
        },
        {
            label: "Option 4",
            value: 4
        },
        {
            label: "Option 5",
            value: 5
        }
    ]
};