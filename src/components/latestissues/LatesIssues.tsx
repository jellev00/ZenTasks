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
        }
    },
    {
        "id": 2,
        "title": "Database Design",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        }
    },
    {
        "id": 3,
        "title": "API Development",
        "badge": {
            "name": "Closed",
            "color": "accent"
        }
    },
    {
        "id": 4,
        "title": "Frontend Implementation",
        "badge": {
            "name": "Open",
            "color": "primary"
        }
    },
    {
        "id": 5,
        "title": "Testing",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        }
    },
    {
        "id": 6,
        "title": "Deployment",
        "badge": {
            "name": "Closed",
            "color": "accent"
        }
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
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt='user' width={100} height={100} />
                                </div>
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