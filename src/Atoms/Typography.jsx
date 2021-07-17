import React from 'react'
import '../Atoms/Typography.scss'

export default function Typography() {
    return (
        <div className="Wrapper">
            <div className="Grid Grid--gutters Grid--cols-2">
                
                    <div className="Grid-cell ">
                            <h1>Type</h1>
                            <h2>Type</h2>
                            <h3> Type</h3>
                            <h4> Type </h4>
                            <p className="Descriptions"> Body 1</p>
                            <p className="Subtitle Footer-items"> Body 2</p>
                            <p className="Copyright"> caption </p>
                      
                    </div>
                    <div className="Grid-cell ">
                            <h1>7.594rem</h1>
                            <h2> 5.063rem </h2>
                            <h3> 3.375rem</h3>
                            <h4> 2.25rem</h4>
                            <p className="Descriptions"> 1.5rem</p>
                            <p className="Subtitle Footer-items"> 1rem</p>
                            <p className="Copyright"> 0.677rem </p>
                    </div>
               
            </div>
        </div>
    )
}