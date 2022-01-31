import React from "react";
import StyledText from "./StyledText";

const Waiter = ({ render, loading, error }) => {
    if (error) return <StyledText>Error</StyledText>;
    if (loading) return <StyledText>Loading</StyledText>;
    if (!loading && !error) return render();
};

export default Waiter;
