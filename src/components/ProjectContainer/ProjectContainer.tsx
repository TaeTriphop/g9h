import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { interfaceProjects } from '../../constants/portfolio';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

import '../../Styles/ProjectContainer.css';

interface ProjectContainerProps {
    project: interfaceProjects;
}

interface ModalStatus {
    ticTacToe: boolean;
    toDo: boolean;
}

// ระบุคีย์ที่อนุญาตใน ModalStatus
type ModalKey = keyof ModalStatus;

export default function ProjectContainer({ project }: ProjectContainerProps) {
    // const [showModal, setShowModal] = useState(false);

    // const handleShow = () => {
    //     setShowModal(true);
    // };

    // const handleClose = () => {
    //     setShowModal(false);
    // };

    const [showModal, setShowModal] = useState<ModalStatus>({
        ticTacToe: false,
        toDo: false,
    });

    const handleShowModal = (modalKey: keyof ModalStatus) => {
        setShowModal((prevModal) => ({ ...prevModal, [modalKey]: true }));
        console.log(modalKey)
    };

    const handleCloseModal = (modalKey: keyof ModalStatus) => {
        setShowModal((prevModal) => ({ ...prevModal, [modalKey]: false }));
    };

    return (
        <div className='project'>
            <h3>{project.name}</h3>

            <p className='project__description'>{project.description}</p>
            {project.stack && (
                <ul className='project__stack'>
                    {project.stack.map((item, index) => (
                        <li key={index} className='project__stack-item'>
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {project.view && (
                <a
                    href='#'
                    aria-label='source code'
                    className='link link--icon'
                    onClick={(e) => {
                        e.preventDefault();
                        handleShowModal(project.view as ModalKey)
                    }}
                >
                    <OpenInBrowserIcon />
                </a>
            )}

            {project.sourceCode && (
                <a
                    href={project.sourceCode}
                    aria-label='source code'
                    className='link link--icon'
                >
                    <GitHubIcon />
                </a>
            )}

            {project.livePreview && (
                <a
                    aria-label='live preview'
                    className='link link--icon'
                // onClick={handleShow}
                >
                    <LaunchIcon />
                </a>
            )}
            

        </div>
    );
}
