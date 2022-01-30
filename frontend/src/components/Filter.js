import { React, useState, useEffect } from 'react';
import { MultiSelect } from '@mantine/core';

export const Filter = (props) => {
    const [value, setValue] = useState([]);
    const data = [
        { value: 'BLM', label: 'BLM' },
        { value: 'Education', label: 'Education' },
        { value: 'LGBTQ', label: 'LGBTQ' },
        { value: 'Freedom', label: 'Freedom' },
    ]

    useEffect(() => {
        console.log("test", value)
        props.keywordsChange(value)
    }, [value])

    return <div>
        <MultiSelect
            data={data}
            // label=""
            placeholder="Select campaign types"
            searchable
            nothingFound="Nothing found"
            value={value} onChange={setValue}
        />
    </div>;
};