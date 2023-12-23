
import './Header.css';



const Header = ({ onOpenSidebar, }) => {



    return (



        <header class="main_menu">
            <div class="menu_icon" onClick={onOpenSidebar}>
                <a href="#" class="openbtn" ><i class="fa fa-bars"></i></a>
            </div>
            <div class="logo">
                <a href="givemyroom.com/"><img src="images/GIVE-MY-ROOM.png" alt="logo" /></a>
            </div>
            <div id="google_translate_element">

            </div>
        </header>




    );
};


export default Header;