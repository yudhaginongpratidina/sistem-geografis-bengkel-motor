import FooterView from "@/views/footer";
import MapHomePageView from "@/views/map-homepage";
import MapMoreView from "@/views/map-more";
import NavbarView from "@/views/navbar";

export default function Home(){
    return (
        <div className="select-none">
           <NavbarView/>
           <MapMoreView/>
           <FooterView/>
        </div>
    )
}