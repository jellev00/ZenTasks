import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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


const LatesIssues = () => {
    return (
        <>
            {Data.map((data) => (
                <Link href={`/issues/${data.id}`} key={data.id}>
                    <div className="py-3 border-b-4 border-base-100 mb-5">
                        <div className="flex justify-between">
                            <h3>{data.title}</h3>
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
                        </div>
                        <div className={`badge badge-${data.badge.color}`}>{data.badge.name}</div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default LatesIssues