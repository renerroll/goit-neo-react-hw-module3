/* eslint-disable react/prop-types */
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

import classes from './Contact.module.css';

function Contact({ contact, onDelete }) {
    return (
        <div className={classes['contact']}>
            <div className={classes['contact-info']}>
                <FaUser />
                <span className={classes['className']}>{contact.name}</span>
                <FaPhoneAlt />
                <span className={classes['classNumber']}>{contact.number}</span>
            </div>
            <button onClick={() => onDelete(contact)} className={classes['contact-delete']} type='button'>Delete</button>
        </div>

    );
}

export default Contact;