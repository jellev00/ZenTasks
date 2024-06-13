'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MarkdownEditor = dynamic(() => import('@uiw/react-markdown-editor'), { ssr: false });

const Modal = () => {

    const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
    const [markdown, setMarkdown] = useState(mdStr);
    const [isVisible, setIsVisible] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleResize = () => {
        if (typeof window !== 'undefined') {
            setIsVisible(window.innerWidth >= 768);
        }
    };

    useEffect(() => {
        handleResize();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const handleCheckboxChange = (status: string) => {
        setSelectedStatus(status);
    };

    return (
        <div>
            <label htmlFor="my_modal_7" className="btn hover:bg-primary hover:text-primary-content">New Issue</label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-5xl">
                    <input type="text" placeholder="Issue title here" className="input input-bordered w-full max-w-lg mb-5" />
                    <div className="form-control flex flex-row flex-wrap mb-5">
                        <label className="label cursor-pointer mr-5">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary mr-2"
                                checked={selectedStatus === 'open'}
                                onChange={() => handleCheckboxChange('open')}
                            />
                            <span className="label-text text-primary">Open</span>
                        </label>
                        <label className="label cursor-pointer mr-5">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-secondary mr-2"
                                checked={selectedStatus === 'inProgress'}
                                onChange={() => handleCheckboxChange('inProgress')}
                            />
                            <span className="label-text text-secondary">In Progress</span>
                        </label>
                        <label className="label cursor-pointer mr-5">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-accent mr-2"
                                checked={selectedStatus === 'closed'}
                                onChange={() => handleCheckboxChange('closed')}
                            />
                            <span className="label-text text-accent">Clossed</span>
                        </label>
                    </div>
                    <MarkdownEditor
                        value={markdown}
                        height="400px"
                        onChange={(value, viewUpdate) => setMarkdown(value)}
                        visible={isVisible}
                        toolbars={["bold", "italic", "header", "code"]}
                    />
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    )
}

export default Modal