import { StyledHeader } from "./style";
import {StyledContainer} from "../../Styles/grid.js"
import { StyledHeadline1 } from "../../Styles/typography";

export const Header = () => {
    return(
        <StyledHeader>
            <StyledContainer>
                <div className="flexBox">
                    <StyledHeadline1 className="logo" fontWeight="bold"> <span>Control</span> Financial</StyledHeadline1> 
                </div>
            </StyledContainer>
        </StyledHeader>
    )
}