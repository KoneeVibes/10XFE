import { Hero } from "../../containers/hero/home";
import { Navigation } from "../../components/navigation";
import { HomeWrapper } from "./styled";
import { Testimonial } from "../../containers/testimonial";
import { AboutUs } from "../../containers/aboutus";
import { Opportunities } from "../../containers/opportunities";
import { Events } from "../../containers/events";
import { SubmitOpportunity } from "../../containers/submitopportunity";
import { Footer } from "../../containers/footer";

export const Home = () => {
    return (
        <HomeWrapper
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Navigation />
            <Hero />
            <Testimonial />
            <AboutUs />
            <Opportunities />
            <Events />
            <SubmitOpportunity />
            <Footer />
        </HomeWrapper>
    )
}
