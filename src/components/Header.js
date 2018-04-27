import React from "react";
import PropTypes from "prop-types"; // Library for checking types of the props

const Header = ({ tagline, age }) => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>
                {tagline} {age}
            </span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;
