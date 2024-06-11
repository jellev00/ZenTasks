import React from 'react';

interface InfoBoxProps {
    title: string;
    value: string | number;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value }) => {
    return (
        <div className="stats shadow bg-base-200">
            <div className="stat">
                <div className="stat-title">{title}</div>
                <div className="stat-value">{value}</div>
            </div>
        </div>
    );
}

export default InfoBox;
