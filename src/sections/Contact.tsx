import Email_Icon from "@/assets/Email_Icon"
import Github_Icon from "@/assets/Github_Icon"
import Linkedin_Icon from "@/assets/Linkedin_Icon"

const Contact = () => {
    return (
        <section id="contact_me" className="contact">
            <div className="title">Get in touch<span>.</span></div>
            <div className="text">I would be happy to further discuss my experiences with you, simply shoot me an email! :D</div>
            <a className="my_email" href="mailto:chindychristie@gmail.com">chindychristie@gmail.com</a>
            <div className="accounts">
                <a href="mailto:chindychristie@gmail.com"><Email_Icon /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/christiechindy"><Github_Icon/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chindy-christie-davina/"><Linkedin_Icon /></a>
            </div>
        </section>
    )
}

export default Contact