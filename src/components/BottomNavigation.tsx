import React from 'react';
import BottomNavigationItem from "./BottomNavigationItem.tsx";

const BottomNavigation = () => {
    return (
        <div className={"flex gap-4"}>
            <div>
                <BottomNavigationItem />
            </div>

            <div>
                donats icon
            </div>

            <div>
                clicker icon
            </div>

            <div>
                rating icon
            </div>

            <div>
                clans icon
            </div>
        </div>
    );
};

export default BottomNavigation;