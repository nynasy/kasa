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
                    {open && (<i class="fa fa-chevron-down"></i>)}
                    {!open && (<i class="fa fa-chevron-up"></i>)}
                </div>
            </div>
            <div className="content">
                {open && props.children}
            </div>
        </div>
    )
}
  
export default Collapse;