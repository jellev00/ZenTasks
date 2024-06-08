import React from 'react';

interface BarData {
    label: string;
    value: number;
    color: string;
}

interface BarChartProps {
    data: BarData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {

    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <div className="p-10 bg-base-200 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5">Status</h2>
            {data.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                    <div className="w-32">{item.label}</div>
                    <div className="flex-1 h-5 relative">
                        <div className={`absolute inset-y-0 ${item.color}`} style={{ width: `${(item.value / maxValue) * 100}%` }}></div>
                    </div>
                    <div className="w-10 text-right ml-2">{item.value}</div>
                </div>
            ))}
        </div>
    );
};

export default BarChart;
