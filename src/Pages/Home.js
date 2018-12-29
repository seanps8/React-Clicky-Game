import React from "react";
import Container from "../components/Container";

function Home() {
    return (
        <div>
            <Container style= {{ marginTop: 30 }}>
                <h1 className="text-center">MLB Clicky Game</h1>
                <h5 className="text-center">
                Click on a new MLB team each time the board shuffles. 
                If you click on the same team more than once, you lose!
                </h5>
            </Container>
        </div>
    );
}

export default Home;