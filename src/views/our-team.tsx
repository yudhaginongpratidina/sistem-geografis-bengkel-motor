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
                    image={"https://pics.craiyon.com/2023-09-29/66835b86df2f40f685875123a808a4a5.webp"} 
                    name={"Yudha Ginong Pratidina"} 
                    nim={21104410001}
                    jobdesk={"Fullstack"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://i.pinimg.com/736x/08/ae/03/08ae032a381d069d39231f3a719ef435.jpg"} 
                    name={"Yoan Ockta Pradana"} 
                    nim={21104410011}
                    jobdesk={"Data Entry"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://e1.pxfuel.com/desktop-wallpaper/97/962/desktop-wallpaper-cute-chibi-anime-anime-cute-characters.jpg"} 
                    name={"Asfin Rizaldy"} 
                    nim={21104410028}
                    jobdesk={"Front End"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/280716472/original/c0faa2b08f53a57e20c83d7b58d546808e76b3be/draw-smoll-super-cute-chibi-anime-character-animal-for-you.png"} 
                    name={"Nugroho Nurwanda Zakaria"} 
                    nim={21104410031}
                    jobdesk={"Data Entry"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
                <CardTeamMember 
                    image={"https://i.pinimg.com/736x/3d/52/36/3d5236db036273a962982f8a29dfd6e1.jpg"} 
                    name={"Dimas Adi Pratama"} 
                    nim={21104410029}
                    jobdesk={"Support"} 
                    linkedIn={"http://"} 
                    gitHub={"http://"}
                />
            </div>
        </div>
    )
}