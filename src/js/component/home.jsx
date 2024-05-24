import React, { useState } from 'react';


const Home = () => {
	const[iluminated,setIluminated] = useState("iluminatedRed");
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="hanger"></div>
			<div className="background d-flex flex-column align-items-center">
				<button className={`red ${iluminated === "iluminatedRed" ? iluminated : ""}`} onClick={() => setIluminated("iluminatedRed")}></button>
				<button className={`yellow ${iluminated ==="iluminatedYellow" ? iluminated : ""}`} onClick={() => setIluminated("iluminatedYellow")}></button>
				<button className={`green ${iluminated==="iluminatedGreen" ? iluminated : ""}`} onClick={() => setIluminated("iluminatedGreen")}></button>
			</div>
		</div>
	);
};

export default Home;
