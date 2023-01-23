import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import jordanavatar from "../../public/avatar.png";
import Image from "next/image";

function ProjectPicture(props) {
    return (
        <div className="basis-1/3 flex-1">
            <Image className="rounded-lg object-cover w-full h-full" width={500} height={500} src={props.image} alt="" />
        </div>
    );
}

function ProjectDescription(props) {
    return (
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white"><a className="text-blue-400 hover:underline hover:font-medium" href={props.website} target="_blank">{props.project}</a>{props.desc}</h3>
    );
}

export default function Projects() {
    return (
        <section>
            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-blue-400 font-medium md:text-6xl">Projects</h2>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                    <ProjectPicture image={web1} />
                    <ProjectPicture image={web2} />
                    <ProjectPicture image={web3} />
                    <ProjectPicture image={web4} />
                </div>
                <ProjectDescription website="https://tracktile.io" project="Tracktile:" desc=" Configurable Food & Beverage Manufacturing Platform designed to enable operational visibility, automate the capture of important data that matters and gain valuable insights along the way." />
                <ProjectDescription website="https://seafaresystems.com" project="Seafare Systems:" desc=" Seafood Buying software dedicated for the Atlantic Canadian Seafood Industry." />
                <ProjectDescription website="https://codeding.app" project="CodeDing:" desc=" Gitlab Merge Request Tool integrated into Slack for easy notifications, approvals and awareness amongst the dev team." />
                <div className="relative mx-auto w-40 h-40 mt-20">
                    <Image className="rounded-full max-h-full" src={jordanavatar} alt="" />
                </div>
            </div>
        </section>
    );
}