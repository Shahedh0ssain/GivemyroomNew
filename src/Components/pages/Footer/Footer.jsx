import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <footer class="footer">
            <div class="footer_container">
                <div class="footer_logo">
                    <a >
                        {/* <img src="images/logo-main.png" alt=""> */}
                        {/* <img src="images/" alt="" srcset="" /> */}
                    </a>
                    <div class="address">
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </div>
                    <p>+0123456789</p>
                </div>
                <div class="footer_menu">
                    <div>
                        <ul>
                            <li>Main Navigation</li>
                            <li><a >option1</a></li>
                            <li><a >option2</a></li>
                            <li><a >option3</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Information For</li>
                            <li><a >option1</a></li>
                            <li><a >option2</a></li>
                            <li><a >option3</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Quick Links</li>
                            <li><a >option1</a></li>
                            <li><a >option2</a></li>
                            <li><a >option3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;