import React from 'react';
import CustomBanner from "../../../_minishop/helper/component/custom/CustomBanner";
import ContactForm from "./component/modal/ContactForm";
import Contact from "./component/modal/Contact";
import FollowUs from "../../../_minishop/helper/component/modal/FollowUs";

const ContactPage = () => {
    return (
        <>
            <CustomBanner />
            <section className="bg-light contect-section">
                <Contact/>
                <ContactForm/>
            </section>
            <div style={{paddingTop: "80px"}}>
                <FollowUs/>
            </div>
        </>
    );
};

export default ContactPage;