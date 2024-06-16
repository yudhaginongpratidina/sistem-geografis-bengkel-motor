import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function CardTeamMember(){
    return (
        <>
            <div className="w-full rounded-md shadow-md drop-shadow-md hover:shadow-lg hover:drop-shadow-lg hover:bg-slate-950 hover:text-white duration-200">
                <Image 
                    src="https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096" 
                    alt="team member" 
                    width={300} 
                    height={300}
                    className="w-full"
                />
                <div className="p-4 flex flex-col gap-0.5">
                    <h1 className="text-center text-lg font-bold">Member 1</h1>
                    <p className="text-center">Jobdesk Member</p>
                    <div className="flex justify-center items-center gap-2 py-2">
                        <Link href={"#"}>
                            <FaGithub className="w-6 h-6"/>
                        </Link>
                        <Link href={"#"}>
                            <FaLinkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}