import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Table} from "../components";
import CenterComponentDecorator from "./decorators";

export default {
    title: 'Table',
    component: Table,
    decorators: [CenterComponentDecorator]
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({})

Default.args = {
    label: 'Table',
    data: [
        {
            name: "Primary",
            value: "1",
            x: 1234
        },
        {
            name: "Primary",
            value: "1",
            x: 1234
        },
        {
            name: "Primary Primary Primary",
            value: "1",
            x: 1234
        },
        {
            name: "Primary",
            value: "1",
            x: 1234
        },
        {
            name: "Primary",
            value: "1",
            x: 1234
        }
    ]
};