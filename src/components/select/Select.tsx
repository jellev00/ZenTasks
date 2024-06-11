import React from 'react';

interface SelectProps {
    onChange: (selectedOption: string) => void;
}

const Select: React.FC<SelectProps> = ({ onChange }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        onChange(value);
    };

    return (
        <select className="select select-bordered w-full max-w-xs" onChange={handleChange}>
            <option disabled selected>Filter by status...</option>
            <option>All Issues</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
        </select>
    )
}

export default Select