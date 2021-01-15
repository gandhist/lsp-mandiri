import React from "react";
import Standar from "../templates/Standar";
import ListUsers from "./ListUsers";

const Index = () => {
    return (
        <Standar
            name="User Management"
            crumbread={['User']}
        >
            <ListUsers />
        </Standar>
    );
}

export default Index;
