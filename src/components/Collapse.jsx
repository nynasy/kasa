import { useState } from "react";
import "../styles/components/Collapse.scss"


function Collapse(props) {
    const [open, setOpen] = useState(false);

    const openClose = () => {
        setOpen(!open);

       
    };   

    return (             
        <div className="collapse">
             <div className="header">
                <div className="label">
                    {props.label}              
                </div>
                <div className="arrow" onClick={openClose}>
                    <i className={`fa fa-chevron-down ' ( ${open ? 'rotate' : ' rotate up'} )`}></i>
                </div>
            </div>
            <div className="content">
                {open && (<div className="open">{props.children}</div>)}
                {!open && (<div className="close"></div>)}
            </div>
        </div>
    )
}
  
export default Collapse;