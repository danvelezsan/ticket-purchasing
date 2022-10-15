// @packages
import React from 'react';

// @scripts
import Dashboard from '.';

export default {
    title: 'Dashboard Template',
    component: Dashboard
};

const Template = (props) => <Dashboard {...props} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    primary: true,
    label: 'Label'
};
