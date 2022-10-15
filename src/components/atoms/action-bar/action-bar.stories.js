// @packages
import React from 'react';

// @scripts
import ActionBar from '.';

export default {
    title: 'Action Bar',
    component: ActionBar
};

const Template = (args) => <ActionBar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Action Bar 1'
};
