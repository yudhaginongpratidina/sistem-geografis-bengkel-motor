import CardTeamMember from "@/components/card-team-member"
export default function OurTeamView(){
    return (
        <div className="py-10">
            <div className="py-6">
                <h1 className="text-4xl uppercase text-center">Our Team</h1>
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla?</h2>
            </div>
            <div className="w-full container grid grid-cols-5 gap-6">
                <CardTeamMember 
                    image={"https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096"} 
                    name={"Yudha Ginong Pratidina"} 
                    nim={21104410001}
                    jobdesk={"Fullstack"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096"} 
                    name={"Yoan Ockta Pradana"} 
                    nim={21104410011}
                    jobdesk={"Data Entry"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096"} 
                    name={"Asfin Rizaldy"} 
                    nim={21104410028}
                    jobdesk={"Front End"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096"} 
                    name={"Nugroho Nurwanda Zakaria"} 
                    nim={21104410031}
                    jobdesk={"Data Entry"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://pbs.twimg.com/media/FzMtX-7WcAIeOoG?format=jpg&name=4096x4096"} 
                    name={"Dimas"} 
                    nim={6666666666}
                    jobdesk={"Support"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
            </div>
        </div>
    )
}