import React from 'react';

interface SelectProps {
    onChange: (value: string) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ onChange, value }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className="select select-bordered">
            <option value="">All Issues</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
        </select>
    );
};

export default Select;
