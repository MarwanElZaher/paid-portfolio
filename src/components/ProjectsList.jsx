import React from "react";
import Card from "./Card";
const ProjectList = ({ RecentProjects }) => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RecentProjects.map((project, index) => (
                <Card
                    cardType="vertical"
                    key={index}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    cardTitle={project.cardTitle}
                    bgColor1={project.firstBgColor}
                    bgColor2={project.secondBgColor}
                    buttonBgColor={project.buttonBgColor}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
};

export default ProjectList;
