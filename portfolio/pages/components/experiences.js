import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

import Image from "next/image";

function ExperienceCard(props) {
    return (
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="mx-auto" src={props.image} width={100} height={100} alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2">{props.header}</h3>
            <p className="py-2">{props.headerDescription}</p>
            <h4 className="py-4 text-blue-400">{props.subHeader}</h4>
            <p className="text-gray-800 py-1 dark:text-white">{props.bullet1}</p>
            <p className="text-gray-800 py-1 dark:text-white">{props.bullet2}</p>
            <p className="text-gray-800 py-1 dark:text-white">{props.bullet3}</p>
            <p className="text-gray-800 py-1 dark:text-white">{props.bullet4}</p>
        </div>
    );
}

export default function Experiences() {
    return (
        <section>
            <div className="text-center p-10">
                <h3 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl">Experiences</h3>
                {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> */}
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                As a software developer, with a strong background in programming languages such as <span className="text-blue-400">JavaScript</span> and <span className="text-blue-400">React</span> and experience developing and maintaining software applications for various industries.
                </p>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                Experience in software quality assurance, including developing and executing test plans, writing and maintaining test cases, and identifying and documenting defects in software applications.
                </p>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                Finally, I have experience as a software product manager, responsible for leading cross-functional teams to define, prioritize, and deliver successful software products, using agile methodologies and data-driven decision making.
                </p>
            </div>
            <div className="lg:flex gap-10 justify-center dark:text-white">
                <ExperienceCard 
                    image={design}
                    header="Software Development"
                    headerDescription="Full Stack"
                    subHeader="Programming Languages &amp; Tools"
                    bullet1="JavaScript &amp; TypeScript"
                    bullet2="React"
                    bullet3="NodeJS"
                    bullet4="SQL"
                />
                <ExperienceCard 
                    image={code}
                    header="Quality Assurance"
                    headerDescription="Eye For Detail"
                    subHeader="Validation"
                    bullet1="Manual Application Validation"
                    bullet2="User &amp; Business Needs"
                    bullet3="Test Case Design"
                    bullet4="Automated Testing"
                />
                <ExperienceCard 
                    image={consulting}
                    header="Product Management"
                    headerDescription="Efficient Teams"
                    subHeader="Customer-Centric"
                    bullet1="Cross-Functional Collaboration"
                    bullet2="Writing User Stories"
                    bullet3="Documentation"
                    bullet4="Research"
                />
            </div>
        </section>
    );
}