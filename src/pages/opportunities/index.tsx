import { Navigation } from "../../components/navigation";
import { Footer } from "../../containers/footer";
import { Hero } from "../../containers/hero/opportunities";
import { Openings } from "../../containers/openings";
import { SubmitOpportunity } from "../../containers/submitopportunity";
import { OpportunitiesWrapper } from "./styled";

export const Opportunities = () => {
    return (
        <OpportunitiesWrapper
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Navigation />
            <Hero />
            <Openings />
            <SubmitOpportunity
                className="opportunities-submit-opportunity"
            />
            <Footer
                className="opportunities-footer"
            />
        </OpportunitiesWrapper>
    )
}
