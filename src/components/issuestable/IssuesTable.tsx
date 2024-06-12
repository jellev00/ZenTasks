'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

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
    currentPage: number;
    itemsPerPage: number;
    data: Issue[];
}

const IssuesTable: React.FC<IssuesTableProps> = ({ currentPage, itemsPerPage, data }) => {

    const router = useRouter();

    const handleNavigation = (id: number) => {
        router.push(`/issues/${id}`);
    };

    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                    {paginatedData.map((data) => (
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