import React from 'react'
import { useState } from 'react'



const Tabjs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className='section-container'>
        <div className='blok-tabs'>
            <div className={toggleState === 1 ? "active-tabs" : "tabs"}
            onClick={()=>toggleTab(1)}
            >Tab 1</div>
            <div className={toggleState === 2 ? "active-tabs" : "tabs"}
            onClick={()=>toggleTab(2)}
            >Tab 2</div>
            <div className={toggleState === 3 ? "active-tabs" : "tabs"}
            onClick={()=>toggleTab(3)}
            >Tab 3</div>
        </div>

        <div className='content-tabs'>
            <div>
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h3>consectetur adipisicing elit 1</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima architecto iste explicabo ut odio sunt? Culpa repellendus temporibus iusto quaerat officia natus animi.</p>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h3>consectetur adipisicing elit 2</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima architecto iste explicabo ut odio sunt? Culpa repellendus temporibus iusto quaerat officia natus animi.</p>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h3>consectetur adipisicing elit 3</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima architecto iste explicabo ut odio sunt? Culpa repellendus temporibus iusto quaerat officia natus animi.</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Tabjs