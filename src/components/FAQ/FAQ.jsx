import React from 'react';
import { useState } from 'react';
import './FAQ.scss';
import { faqItems } from '../../constants';
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";



const FAQ = () => {
    const [items, setItems] = useState(faqItems);

    const toggleItem = (id) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, expanded: !item.expanded };
            }
            return item;
        });
        setItems(updatedItems);
    };

    return (
        <>

            <div className='faq-text'>
                <h3>FAQs</h3>
            </div>
            <div className="FAQ_container">
                {items.map(item => (
                    <div key={item.id} className="faq-question" onClick={() => toggleItem(item.id)}>
                        <div className='faq-box'>
                            {item.question}
                            {item.expanded ? <span><FaMinus className='faq-icon' /></span> : <span><IoMdAdd className='faq-icon' /></span>}
                        </div>
                        {item.expanded && <div className="faq-answer">{item.answer}</div>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default FAQ;