import React from 'react'
import '../Atoms/Checkbox.scss';

export default function Checkbox() {
    return (
        // <div className="wrapper">
        //         <input id="check" type="checkbox"/>
        //             <label for="check">
        //                 <svg viewBox="0,0,50,50">
        //                 <path d="M5 30 L 18 44 L 44 5"></path>
        //                 </svg>
        //             </label>
        // </div>

        <div className="Wrapper">
                 <div class="cntr">
                    <label for="cbx" class="label-cbx">
                    <input id="cbx" type="checkbox" class="invisible"/>
                    <div class="checkbox">
                        <svg width="24px" height="25px" viewBox="0 0 20 20">
                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
                    </div>
                    <span>Checkbox</span>
                    </label>
                </div>
        </div>
    )
}
