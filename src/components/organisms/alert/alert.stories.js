// @packages
import React from 'react';

// @scripts
import Alert from '.';

export default {
    title: 'Alert',
    component: Alert
};

const Template = (args) => <Alert {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    id: 'Alert',
    severity: 'info',
    title: 'Title',
    text: 'Text',
    visible: true
};
