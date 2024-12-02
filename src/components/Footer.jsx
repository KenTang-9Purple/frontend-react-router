import React from 'react'
import PageLinks from './PageLinks'
import IconLinks from './IconLinks'
function Footer() {
    const date = new Date().getFullYear();
    return (
    <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" id="footer-links"/>
        <IconLinks parentClass="footer-icons" itemClass="footer-icon"/>
        <p className="copyright">
            版權所有 &copy;  九紫科技
            <span id="footer_date">{date}</span>
        </p>
    </footer>
    );
}

export default Footer