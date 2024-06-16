import CardTeamMember from "@/components/card-team-member"
export default function OurTeamView(){
    return (
        <div className="py-10">
            <div className="py-6">
                <h1 className="text-4xl uppercase text-center">Our Team</h1>
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla?</h2>
            </div>
            <div className="w-full container grid grid-cols-5 gap-6">
                <CardTeamMember/>
                <CardTeamMember/>
                <CardTeamMember/>
                <CardTeamMember/>
                <CardTeamMember/>
            </div>
        </div>
    )
}