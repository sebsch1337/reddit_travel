import React from 'react';

export const Topic = ({topic, selected}) => {
    return <option selected={selected}>{topic}</option>;
}