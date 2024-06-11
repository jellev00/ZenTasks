'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const Data = [
    {
        "id": 1,
        "title": "Project Initialization",
        "badge": {
            "name": "Open",
            "color": "primary"
        },
        "created": "2024-06-11T09:00:00Z",
        "users": [
            {
                "id": 1,
                "name": "John Doe",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 2,
        "title": "Database Design",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        },
        "created": "2024-06-11T10:00:00Z",
        "users": [
            {
                "id": 2,
                "name": "Jane Smith",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 3,
        "title": "API Development",
        "badge": {
            "name": "Closed",
            "color": "accent"
        },
        "created": "2024-06-11T11:00:00Z",
        "users": [
            {
                "id": 3,
                "name": "Alice Johnson",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 4,
        "title": "Frontend Implementation",
        "badge": {
            "name": "Open",
            "color": "primary"
        },
        "created": "2024-06-11T12:00:00Z",
        "users": [
            {
                "id": 4,
                "name": "Bob Brown",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 5,
        "title": "Testing",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        },
        "created": "2024-06-11T13:00:00Z",
        "users": [
            {
                "id": 5,
                "name": "Charlie Davis",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 6,
        "title": "Deployment",
        "badge": {
            "name": "Closed",
            "color": "accent"
        },
        "created": "2024-06-11T14:00:00Z",
        "users": [
            {
                "id": 6,
                "name": "Eve White",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    }
];

interface Issue {
    id: number;
    title: string;
    badge: {
        name: string;
        color: string;
    };
    created: string;
    users: { id: number; name: string; image: string }[];
}

interface IssuesTableProps {
    selectedOption: string;
}

const IssuesTable: React.FC<IssuesTableProps> = ({ selectedOption }) => {

    const router = useRouter();
    const [filteredData, setFilteredData] = useState<Issue[]>(Data);

    const handleNavigation = (id: number) => {
        router.push(`/issues/${id}`);
    };

    useEffect(() => {
        handleFilterChange(selectedOption);
    }, [selectedOption]);

    const handleFilterChange = (selectedOption: string) => {
        if (selectedOption === '' || selectedOption === 'All Issues') {
            setFilteredData(Data); // Show all issues
        } else {
            const filtered = Data.filter(item => item.badge.name === selectedOption);
            setFilteredData(filtered);
        }
    };

    return (
        <div className="overflow-x-auto mt-10 border-2 border-base-300 rounded-2xl">
            <table className="table">
                <thead className="bg-base-300">
                    <tr>
                        <th className="w-1/2">Issue</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Persons</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((data) => (
                        <tr key={data.id} className="cursor-pointer hover:bg-base-200" onClick={() => handleNavigation(data.id)}>
                            <td>{data.title}</td>
                            <td>
                                <div className={`badge badge-${data.badge.color}`}>
                                    {data.badge.name}
                                </div>
                            </td>
                            <td>{new Date(data.created).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' })}</td>
                            <td>
                                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    {data.users.map((user) => (
                                        <div key={user.id} className="flex gap-3">
                                            <div className="avatar">
                                                <div className="w-10 relative">
                                                    <Image src={user.image} alt='user' width={100} height={100} className="rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IssuesTable