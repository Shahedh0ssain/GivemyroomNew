import React, { useState } from 'react';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';

const Navber = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            {/* <h2>Navvfdsf</h2> */}
            <Header onOpenSidebar={openSidebar} />
            <Sidebar isOpen={isSidebarOpen} onCloseSidebar={closeSidebar} />
        </div>
    );
};

export default Navber;
