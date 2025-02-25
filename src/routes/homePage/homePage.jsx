import React from 'react'
import "./homePage.scss"
import SearchBar from "../../components/searchBar/SearchBar";
const HomePage = () => {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>

                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolores accusamus quasi, consequatur repellat error possimus dicta rerum? Vitae, ab?</p>

                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1600+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;
