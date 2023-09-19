import React, { useState } from "react";
import { Link } from "react-router-dom";
import { interfaceProjects } from "../../constants/portfolio";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "../../Styles/ProjectContainer.css";

interface ProjectContainerProps {
  project: interfaceProjects;
}

export default function ProjectContainer({ project }: ProjectContainerProps) {
  return (
    <div className="project">
      <h3 style={{cursor:'default'}}>{project.name}</h3>

      <p className="project__description" style={{cursor:'default'}}>{project.description}</p>
      {project.stack && (
        <ul className="project__stack" style={{cursor:'default'}}>
          {project.stack.map((item, index) => (
            <li key={index} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* {project.view && (
        <a
          href="javascript:void(0)"
          aria-label="source code"
          className="link link--icon"
        >
          <OpenInBrowserIcon />
        </a>
      )} */}

      {project.sourceCode && (
        <a
          aria-label="source code"
          className="link link--icon"
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          aria-label="live preview"
          className="link link--icon"
          href={project.livePreview}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
}
