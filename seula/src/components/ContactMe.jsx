import '../styles/ContactMe.css';

const ContactMe = () => {
    function onContactClick() {
  
       
     }
    return (
        <>
            <a href="mailto:seulaayoon@gmail.com"><div className='contact-me' onClick={onContactClick}>CONTACT ME</div></a>
        </>
    )
}

export default ContactMe