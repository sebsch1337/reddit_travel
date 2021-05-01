import React from 'react';
import { useSelector } from 'react-redux';
import { selectTopics, selectedIndex } from './topicsSlice';
import { Topic } from '../../components/Topic';

export const Topics = () => {
    const topics = useSelector(selectTopics);
    const selectedTopicId = useSelector(selectedIndex);

    return (
        <select>
            {topics.map((topic, index) => {
                return <Topic key={index} topic={topic} selected={selectedTopicId === index} />;
            })}
        </select>
    );
}