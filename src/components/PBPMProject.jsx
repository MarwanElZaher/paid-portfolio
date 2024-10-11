import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { AboutProject, PBPMTitle, recentProjects } from "../constants";
import MainPBMImage from "../assets/mainPBMImage.svg"
const PBPMProject = () => {

    const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
        threshold: 0.2,
    });

    const { technologies, Challenge, Approach, aboutTheProjectDetails, secondSection, projectObjectiveDetails, stakeholderFindings, technicalFindings, additionalNotes, interviewDetails } = recentProjects.filter((project) => project.projectPath == "pbpm")[0];
    return (
        <main>
            <section className="w-full h-auto overflow-hidden my-10">
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left section: Title and description */}
                    <div className="sm:w-2/3 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-start p-10">
                        <div
                            className={`transition-all duration-1000 ${videoVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-20 opacity-0'
                                }`}
                        >
                            <h1
                                ref={videoRef}
                                className="uppercase cursor-default font-custom font-medium text-6xl md:text-9xl w-full mb-4"
                            >
                                {PBPMTitle}
                            </h1>
                            <div className="flex flex-wrap gap-1">
                                {technologies.map((tech, index) => (
                                    <button
                                        key={index}
                                        title={tech}
                                        className={`uppercase rounded-full font-medium flex flex-wrap gap-2 text-xs px-4 py-2 md:text-sm lg:text-xs ${index > 0 ? " border-2 border-[#12120F80]" : "bg-[#12120F80] text-white"}`}
                                        disabled
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right section: Empty */}
                    <div className="hidden md:block md:w-1/3"></div>

                </div>
                <div className="flex justify-center w-full mt-8 bg-[#0896D4] pt-10 rounded-3xl">
                    <img
                        src={MainPBMImage}
                        alt="MainPBMImage"
                        className="w-4/5 object-cover h-auto"
                    />
                </div>

            </section>
            <section className="p-10">
                <div className="flex flex-row justify-between">
                    <div className="w-2/6">
                        <h2 className="text-6xl font-medium uppercase ">
                            {AboutProject}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 w-3/6">
                        <div className="mr-10">
                            <h4 className="text-2xl font-medium mb-4">
                                Challenge
                            </h4>
                            <p className="text-lg font-normal">{Challenge}</p>
                        </div>

                        <div className="mr-10">
                            <h4 className="text-2xl font-medium mb-4">
                                Approach
                            </h4>
                            <p className="text-lg font-normal">{Approach}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-20">
                    {Object.entries(aboutTheProjectDetails).map(([key, value]) =>
                        <div
                            className="flex flex-col"
                            key={key}
                        >
                            <h4 className="font-medium text-2xl">{key}</h4>
                            <p className="font-normal text-lg">{value}</p>
                        </div>)}

                </div>

            </section>
            <section className="p-10">
                <div className="flex flex-row justify-between gap-10 my-20">
                    {Object.entries(secondSection).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                            <h3 className="font-medium text-3xl mb-4">{key}</h3>
                            {Array.isArray(value) ? (
                                value.map((item, index) => (
                                    <div className="mr-20" key={index}>
                                        {typeof item === 'string' ? (
                                            <ul className={`${index > 0 ? "list-disc ml-6" : ""}`}>
                                                <li>{item}</li>
                                            </ul>
                                        ) : (
                                            Object.entries(item).map(([subKey, subValue]) => (
                                                <ul key={subKey}>
                                                    <li className="list-disc ml-6 text-[#2D9CDB]">
                                                        <span className="text-[#2D9CDB] font-normal text-lg">
                                                            {subKey}
                                                        </span>
                                                        <span className="text-black">: {subValue}</span>
                                                    </li>
                                                </ul>
                                            ))
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>{value}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-between gap-5 my-20">
                    {projectObjectiveDetails.map((objective, index) => (
                        <div key={index} className="flex flex-col w-1/5">
                            <div className="flex flex-row justify-arround gap-2 items-center">
                                <div className="bg-[#2D9CDB] p-1 flex justify-center items-center rounded-lg">
                                    <img src={objective.icon} alt={objective.iconTitle} />
                                </div>
                                <p className="font-bold">{objective.iconTitle}</p>
                            </div>
                            <h3 className="font-medium my-2 text-3xl">{objective.des}</h3>
                            <ul className="list-disc ml-6">
                                {objective.points.map((point, pointIndex) => (
                                    <li key={pointIndex} >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </section>
            <section className="p-10">
                <div>
                    <h3 className="font-medium text-3xl mb-5">Stakeholder / Technical Interview</h3>
                    <p className="font-normal text-lg">{interviewDetails.introduction}</p>

                    <h4 className="font-medium text-2xl mt-10 mb-5">Interview Agenda</h4>
                    <p>Breaking the Ice</p>
                    <ol className="ml-4 list-decimal">
                        {interviewDetails.agenda.map((item, index) => (
                            <li key={index}>
                                {item.question}
                            </li>
                        ))}
                    </ol>

                </div>
                <div>
                    <h4 className="font-medium text-2xl mt-5 mb-5">Findings </h4>
                    <div>
                        <h2 className="text-[#2D9CDB] font-medium text-lg">Stakeholder response:</h2>
                        <ol className="ml-4 list-decimal">
                            <li>Target Audience: {stakeholderFindings.targetAudience}</li>
                            <li>Old Design Problems: {stakeholderFindings.oldDesignProblems}</li>
                            <li>Shipping Goal: {stakeholderFindings.shippingGoal}</li>
                            <li>Form Designer Difficulty: {stakeholderFindings.formDesignerDifficulty}</li>
                            <li>Consistency with FGIC: {stakeholderFindings.consistencyWithFGIC}</li>
                            <li>Motivation for Geo-Work Management: {stakeholderFindings.motivationForGeoWorkManagement}</li>
                        </ol>

                        <h2 className="text-[#2D9CDB] font-medium text-lg mt-5">Technical Response</h2>
                        <ol className="ml-4 list-decimal">
                            <li>User-Friendliness: {technicalFindings.userFriendliness}</li>
                            <li>Complex Process Flow: {technicalFindings.complexProcessFlow}</li>
                            <li>Interface Improvements: {technicalFindings.interfaceImprovements}</li>
                            <li>Configuration Issues: {technicalFindings.configurationIssues}</li>
                            <li>Naming Conventions: {technicalFindings.namingConventions}</li>
                            <li>User Guidance: {technicalFindings.userGuidance}</li>
                            <li>Grouping of Items: {technicalFindings.groupingOfItems}</li>
                            <li>Flow Importance: {technicalFindings.flowImportance}</li>
                            <li>Validation Messages: {technicalFindings.validationMessages}</li>
                        </ol>
                        <div>
                            <h2 className="text-[#2D9CDB] font-medium text-lg mt-5">Additional Notes</h2>
                            <ol className="ml-4 list-decimal">
                                <li>Bias of Employees: {additionalNotes.biasOfEmployees}</li>
                                <li>Old Version Familiarity: {additionalNotes.oldVersionFamiliarity}</li>
                            </ol>
                        </div>

                    </div>
                </div>

            </section>
        </main>)
}
export default PBPMProject