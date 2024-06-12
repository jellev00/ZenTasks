'use client'
import IssuesTable from '@/components/issuestable/IssuesTable'
import Modal from '@/components/modal/Modal'
import Pagination from '@/components/pagination/Pagination'
import Select from '@/components/select/Select'
import React, { useEffect, useState } from 'react'

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
    },
    {
        "id": 7,
        "title": "Requirement Analysis",
        "badge": {
            "name": "Open",
            "color": "primary"
        },
        "created": "2024-06-11T15:00:00Z",
        "users": [
            {
                "id": 7,
                "name": "Frank Green",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 8,
        "title": "UI/UX Design",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        },
        "created": "2024-06-11T16:00:00Z",
        "users": [
            {
                "id": 8,
                "name": "Grace Hall",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 9,
        "title": "Backend Integration",
        "badge": {
            "name": "Closed",
            "color": "accent"
        },
        "created": "2024-06-11T17:00:00Z",
        "users": [
            {
                "id": 9,
                "name": "Hank Lee",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 10,
        "title": "Security Assessment",
        "badge": {
            "name": "Open",
            "color": "primary"
        },
        "created": "2024-06-11T18:00:00Z",
        "users": [
            {
                "id": 10,
                "name": "Ivy King",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 11,
        "title": "Performance Optimization",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        },
        "created": "2024-06-11T19:00:00Z",
        "users": [
            {
                "id": 11,
                "name": "Jack Miller",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 12,
        "title": "Code Review",
        "badge": {
            "name": "Closed",
            "color": "accent"
        },
        "created": "2024-06-11T20:00:00Z",
        "users": [
            {
                "id": 12,
                "name": "Karen Nelson",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 13,
        "title": "Client Feedback",
        "badge": {
            "name": "Open",
            "color": "primary"
        },
        "created": "2024-06-11T21:00:00Z",
        "users": [
            {
                "id": 13,
                "name": "Leo Parker",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 14,
        "title": "Bug Fixing",
        "badge": {
            "name": "In Progress",
            "color": "secondary"
        },
        "created": "2024-06-11T22:00:00Z",
        "users": [
            {
                "id": 14,
                "name": "Mona Quinn",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    },
    {
        "id": 15,
        "title": "Final Review",
        "badge": {
            "name": "Closed",
            "color": "accent"
        },
        "created": "2024-06-11T23:00:00Z",
        "users": [
            {
                "id": 15,
                "name": "Nina Roberts",
                "image": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        ]
    }
];

const IssuesPage = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [filteredData, setFilteredData] = useState(Data);

    useEffect(() => {
        if (selectedOption === '' || selectedOption === 'All Issues') {
            setFilteredData(Data);
        } else {
            const filtered = Data.filter(item => item.badge.name === selectedOption);
            setFilteredData(filtered);
        }
        setCurrentPage(1);
    }, [selectedOption]);

    return (
        <div className="w-full min-w-xl mx-auto mt-10">
            <div className="flex justify-between">
                <Select onChange={setSelectedOption} />
                <Modal />
            </div>
            <IssuesTable
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                data={filteredData}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
            />
        </div>
    )
}

export default IssuesPage