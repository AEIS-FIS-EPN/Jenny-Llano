import "./styles.css"
import photoProfile from "../../utils/photoProfile.jpg"
import React from 'react';
import Pills from "../pillsMenu/Pills";
function Profile(){
    return(
        <>
            <div className="backgroundImageProfile mr-0 ml-0">
                <div className="center ">
                    <img className="imageProfile" src={photoProfile} alt="My photo" />
                </div>
                <div className="center">
                    <h1 className="m-0">Jenny Llano</h1>
                </div>
                <div className="center">
                    <p>Software Engineer</p>
                </div>
                <div className="">
                    <Pills/>
                </div>
            </div>
        </>
    )
}
export default Profile