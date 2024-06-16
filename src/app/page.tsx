import FooterView from "@/views/footer";
import JumbotronView from "@/views/jumbotron";
import MapHomePageView from "@/views/map-homepage";
import NavbarView from "@/views/navbar";
import OurTeamView from "@/views/our-team";

export default function Home(){
    return (
        <div className="select-none">
           <NavbarView/>
           <JumbotronView/>
           <MapHomePageView/>
           <OurTeamView/>
           <FooterView/>
        </div>
    )
}