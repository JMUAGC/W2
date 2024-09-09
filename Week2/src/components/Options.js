import React from 'react';



const Options = () => {
    const handleEditProfile = () => {
        console.log("Edit Profile");
    };

    const handleChangePayment = () => {
        console.log("Change Payment Method");
    };

    const handleChangeTheme = () => {
        console.log("Change Theme");
    };

    

    return (
        <div>
            <h1>Options</h1>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleChangePayment}>Change Payment Method</button>
            <button onClick={handleChangeTheme}>Change Theme</button>
        </div>
    );
};

export default Options;
