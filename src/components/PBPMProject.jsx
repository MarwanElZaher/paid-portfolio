import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { AboutProject, PBPMTitle, recentProjects } from "../constants";
import MainPBMImage from "../../assets/mainPBMImage.svg"
import NavItem from "./NavItem";
import ProjectList from "./ProjectsList";
import CustomButton from "./CustomButton";
const PBPMProject = () => {

    const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: projectsRef, isVisible: recentProjectsVisible } = useIntersectionObserver({ threshold: 0.2 });
    const otherProjects = recentProjects.filter((project) => project.projectPath !== "pbpm");
    const { technologies, Challenge, Approach, aboutTheProjectDetails, secondSection, projectObjectiveDetails, stakeholderFindings, technicalFindings, additionalNotes, interviewDetails, researchData, userResearchFindings, marketResearchFindings, userPersona, informationArchitecture, siteMapContent, visualDesignContent, methedologiesContent, lessonsLearned } = recentProjects.filter((project) => project.projectPath == "pbpm")[0];
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
                        loading="lazy"
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
                                    <img src={objective.icon} loading="lazy" alt={objective.iconTitle} />
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

                <div className="research-container bg-gray-50 text-gray-800">
                    <h1 className="font-medium text-2xl mt-6 mb-2">
                        {researchData.userResearchHeading}
                    </h1>
                    <p className="text-lg mb-6">{researchData.userResearchDescription}</p>
                    <div className="flex flex-row justify-around gap-6 my-4">
                        <div className="flex flex-col w-1/3">
                            <div className="bg-[#EFEFEC] rounded-3xl p-6 ">
                                <h2 className="text-xl font-semibold mb-3">
                                    {researchData.researchGoalsHeading}
                                </h2>
                                <ul className="list-disc list-inside mb-6">
                                    {researchData.researchGoals.map((goal, index) => (
                                        <li key={index} className="mb-2 text-lg">
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <div className="bg-[#EFEFEC] rounded-3xl p-6 ">
                                <h2 className="text-xl font-semibold mb-3">
                                    {researchData.researchMethodsHeading}
                                </h2>
                                <ul className="list-disc list-inside mb-6">
                                    {researchData.researchMethods.map((method, index) => (
                                        <li key={index} className="mb-2 text-lg">
                                            {method}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <div className="bg-[#EFEFEC] rounded-3xl p-6 ">

                                <h2 className="text-xl font-semibold mb-3">
                                    {researchData.researchQuestionsHeading}
                                </h2>
                                <ul className="list-disc list-inside">
                                    {researchData.researchQuestions.map((question, index) => (
                                        <li key={index} className="mb-2 text-lg">
                                            {question}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <h4 className="font-medium text-2xl mt-5 mb-5">Findings </h4>



                <div className="mb-6">
                    <h2 className="text-[#2D9CDB] font-medium text-lg mt-5">
                        {userResearchFindings.navigationProblems.heading}
                    </h2>
                    <ul className="list-disc list-inside">
                        {userResearchFindings.navigationProblems.points.map((point, index) => (
                            <li key={index} className="mb-2 font-medium text-lg">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-[#2D9CDB] font-medium text-lg mt-5">
                        {userResearchFindings.formBuildingProblems.heading}
                    </h2>
                    <ul className="list-disc list-inside">
                        {userResearchFindings.formBuildingProblems.points.map((point, index) => (
                            <li key={index} className="mb-2 font-medium text-lg">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="p-10">
                <div >
                    <div className="flex flex-col">
                        <h2 className="font-medium text-2xl mt-5 mb-5">User Persona</h2>
                        <p className="mb-4 text-lg text-gray-700">{userPersona.intro}</p>
                    </div>
                    <div className="bg-[#EFEFEC] p-6 rounded-3xl flex flex-col">
                        <h2 className="font-medium text-2xl mb-5">
                            Primary Persona
                        </h2>
                        <div className="flex flex-row justify-center p-6">
                            <div className="w-4/5">
                                <div className="mb-6">

                                    <div className="flex items-center mb-4">
                                        <img src={userPersona.primaryPersona.avatar} loading="lazy" alt="Ashraf Mohamed" className="w-2/12 h-auto rounded-full mr-4" />
                                        <div className="p-6 flex flex-col gap-2">
                                            <h3 className="text-4xl font-semibold">{userPersona.primaryPersona.name}</h3>
                                            <p className="text-2xl font-normal">{userPersona.primaryPersona.role} - {userPersona.primaryPersona.location}</p>
                                            <p>{userPersona.primaryPersona.details}</p>
                                        </div>
                                    </div>
                                    <h2 className="font-medium text-2xl mt-5 mb-2">
                                        Needs & Pains
                                    </h2>
                                    <ol className="ml-4 list-decimal">
                                        {userPersona.primaryPersona.needsAndPains.map((pain, index) => (
                                            <li key={index} className="mb-2 text-lg text-gray-700">{pain}</li>
                                        ))}
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Market Research Findings */}
                <div>
                    <h3 className="font-medium text-3xl mt-5 mb-5">{marketResearchFindings.heading}</h3>
                    <p className="mb-4 text-lg text-gray-700">{marketResearchFindings.description}</p>
                    <div className="bg-[#EFEFEC] p-6 rounded-3xl">
                        <h2 className="font-medium text-2xl mt-5 mb-2">
                            Key points from competitors
                        </h2>
                        <ul className="list-disc list-inside">
                            {marketResearchFindings.keyPoints.map((point, index) => (
                                <li key={index} className="mb-2 text-lg text-gray-700">{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="p-10">
                <div className="mb-6">
                    <h3 className="text-3xl font-medium">{informationArchitecture.heading}</h3>
                    <p className="mt-5">{informationArchitecture.description}</p>
                    <p className="mt-5">{informationArchitecture.focus}</p>
                </div>
                <div className="p-6 bg-[#EFEFEC] shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">{siteMapContent.SITEMAP_HEADING}</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2  text-[#2D9CDB]">{siteMapContent.OLD_STRUCTURE_HEADING}</h3>
                        <p className="mb-4">{siteMapContent.OLD_STRUCTURE_DESCRIPTION}</p>
                        <img
                            src={siteMapContent.OLD_STRUCTURE_IMAGE}
                            loading="lazy"
                            alt="Old Structure Sitemap"
                            className="w-full h-auto rounded-md"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2  text-[#2D9CDB]">{siteMapContent.NEW_STRUCTURE_HEADING}</h3>
                        <p className="mb-4">{siteMapContent.NEW_STRUCTURE_DESCRIPTION}</p>
                        <img
                            src={siteMapContent.NEW_STRUCTURE_IMAGE}
                            loading="lazy"
                            alt="New Structure Sitemap"
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="p-10">
                    <h2 className="text-2xl font-bold mb-4">{visualDesignContent.VISUAL_DESIGN_HEADING}</h2>
                    <p className="mb-4">{visualDesignContent.VISUAL_DESIGN_DESCRIPTION}</p>

                </div>
                <img
                    src={visualDesignContent.VISUAL_DESIGN_IMAGE}
                    loading="lazy"
                    alt="Visual Design Sample Screens"
                    className="w-full h-auto rounded-md"
                />

            </section>

            <section className="p-10">
                <h2 className="text-2xl font-bold mt-6 mb-4">{methedologiesContent.TESTING_METRICS_HEADING}</h2>
                <p className="mb-4">{methedologiesContent.TESTING_METRICS_DESCRIPTION}</p>
                <div className="flex flex-row justify-between gap-6">
                    <div className="flex flex-col bg-[#EFEFEC] p-4 rounded-3xl">
                        <h3 className="text-xl font-semibold mb-2">{methedologiesContent.METHODOLOGIES_HEADING}</h3>
                        <p className="mb-2">Conducted a variety of testing methodologies, including:</p>
                        <ul className="list-disc list-inside mb-4 ml-5">
                            {methedologiesContent.METHODOLOGIES_LIST.map((methodology, index) => (
                                <li key={index} className="mb-1">{methodology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col bg-[#EFEFEC] p-4 rounded-3xl">

                        <h3 className="text-xl font-semibold mb-2">{methedologiesContent.KEY_OUTCOMES_HEADING}</h3>

                        <ul className="list-disc list-inside">
                            {methedologiesContent.KEY_OUTCOMES_LIST.map((outcome, index) => (
                                <li key={index} className="mb-1">{outcome}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="text-2xl font-bold mb-4">{lessonsLearned.title}</h2>
                    <p className="text-lg italic mb-4">{lessonsLearned.publicationStatus}</p>
                    <p>{lessonsLearned.content}</p>
                </div>

                <div className='flex items-center justify-center mt-4'>
                    <NavItem
                        to="/contactme"
                        classname="bg-black text-white rounded-full p-2 transition duration-300 hover:bg-gray-500 hover:scale-x-105"
                    >
                        Let’s work together
                    </NavItem>
                </div>
            </section>


            <section className="flex flex-col justify-center items-center min-h-screen">
                <div className={`w-full gap-8 border-t border-b border-grey-800 flex flex-col items-center py-10 md:gap-8 md:py-15 lg:py-20 lg:gap-12 transition-all duration-1000 ${recentProjectsVisible ? 'scale-75 md:scale-80 lg:scale-95' : 'scale-70 md:scale-75 lg:scale-90'}`}>
                    <div className='flex flex-col items-center'>
                        <p className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>You May </p>
                        <p className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>Also Like</p>
                    </div>
                    <div ref={projectsRef} className={`w-full flex flex-col justify-center items-center gap-10 transition-all duration-1000 ${recentProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <ProjectList
                            numberOfCardsToBeRendered={3}
                            RecentProjects={otherProjects}
                        />
                        <CustomButton
                            className='uppercase rounded-full bg-black text-white p-4 font-custom font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
                            text="View More"
                            to="/portfolio"
                        />
                    </div>
                </div>
            </section>

        </main >)
}
export default PBPMProject