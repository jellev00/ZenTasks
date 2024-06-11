'use client'
import IssuesTable from '@/components/issuestable/IssuesTable'
import Select from '@/components/select/Select'
import React, { useState } from 'react'

const IssuesPage = () => {

    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div className="w-full min-w-xl mx-auto mt-10">
            <Select onChange={setSelectedOption} />
            <IssuesTable selectedOption={selectedOption} />
        </div>
    )
}

export default IssuesPage