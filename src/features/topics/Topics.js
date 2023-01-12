import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTopics, setTopic } from './topicsSlice';
import { Topic } from '../../components/Topic';

export const Topics = () => {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);

    return (
        <select onChange={(e) => dispatch(setTopic(e.target.value))}>
            {topics.map((topic, index) => {
                return <Topic key={index} topic={topic} />;
            })}
        </select>
    );
}