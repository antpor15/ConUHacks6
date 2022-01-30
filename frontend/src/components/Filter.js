import { React, useState, useEffect } from 'react';
import { MultiSelect } from '@mantine/core';

export const Filter = (props) => {
    const [value, setValue] = useState([]);
    const data = [
        { value: 'Darth', label: 'Darth' },
        { value: 'Force', label: 'Force' },
        { value: 'DarkSide', label: 'DarkSide' },
        { value: 'Freedom', label: 'Freedom' },
    ]

    useEffect(() => {
        console.log("test", value)
        props.keywordsChange(value)
    }, [value])

    return <div>
        <MultiSelect
            sx={{
                backgroundColor: "black",
                margin: "5px",
                border: "2px solid transparent",
                '&:hover': {
                    border: "2px solid yellow",
                },
            }}
            data={data}
            placeholder="Select campaign types"
            searchable
            nothingFound="Nothing found"
            value={value} onChange={setValue}
        />
    </div>;
};
