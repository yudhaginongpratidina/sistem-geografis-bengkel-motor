import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type cardTeamMemberProps = {
    name: string
    jobdesk: string
    nim : number
    image: string
    linkedIn: string
    gitHub: string
}

// https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096
export default function CardTeamMember(props : cardTeamMemberProps) {
    const { name, jobdesk, nim, image, linkedIn, gitHub } = props
    return (
        <>
            <div className="w-full border rounded-md shadow-md drop-shadow-md hover:shadow-lg hover:drop-shadow-lg hover:bg-slate-950 hover:text-white duration-200">
                <Image 
                    src={image}
                    alt={name} 
                    width={300} 
                    height={300}
                    className="w-full h-[250px] object-cover"
                />
                <div className="p-4 flex flex-col gap-0.5">
                    <h1 className="text-center text-lg font-bold">{name}</h1>
                    <p className="text-center">{jobdesk} - {nim}</p>
                    <div className="flex justify-center items-center gap-2 py-2">
                        <Link href={linkedIn}>
                            <FaGithub className="w-6 h-6"/>
                        </Link>
                        <Link href={gitHub}>
                            <FaLinkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}