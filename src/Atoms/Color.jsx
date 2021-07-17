import React from 'react'

export const colors = {
    gray: {
        '100': '#dfdfdf'
    }
}

export default function Color() {
    return (
        <div className="Wrapper">
            <h3>Colors</h3>
            <p>White, Black, Sexy pink and Blue: these are the Audi brand colors.
                 The order is immaterial because there is no hierarchy here. What 
                 matters is that the colors support the message you want to convey and that the 
                 overall layout is not too colorful.
            </p>
            <h3>Wish Work color palette</h3>
            <p>Wish Work has 2 mode, dark and light. And based on the mode the percentages of colors will change. In dark mode we mostly use our "Pink"</p>
            <div className="Color-pallete_section Grid Grid--gutters Grid--cols-3">
                <div className=" Grid-cell  content">
                    <h4>Color</h4>
                    <div className="Color-box Color-white"></div>
                    <div className="Color-box Color-black"></div>
                    <div className="Color-box Color-pink"></div>
                    <div className="Color-box Color-blue"></div>
                </div>
                <div className="Grid-cell  content">
                    <h4>Name</h4>
                    <p className="Color-name">White</p>
                    <p className="Color-name">Black</p>
                    <p className="Color-name">Pink</p>
                    <p className="Color-name">Blue</p>
                </div>
                <div className="Grid-cell content">
                    <h4>Value</h4>
                    <p className="Color-value">#ffffff</p>
                    <p className="Color-value">#03010A</p>
                    <p className="Color-value">#D1036F</p>
                    <p className="Color-value">#1C5BC2</p>
                </div>

            </div>


            <h3>Functional Grey Tones</h3>
            <p>For functional applications, the color palette can be extended to include grey tones ranging from white to black.</p>
            <div className="Color-pallete_section Grid Grid--gutters Grid--cols-3">
                <div className=" Grid-cell  content">
                    <h4>Color</h4>
                    <div className="Color-box Color-gray0"></div>
                    <div className="Color-box Color-gray5"></div>
                    <div className="Color-box Color-gray10"></div>
                    <div className="Color-box Color-gray15"></div>
                    <div className="Color-box Color-gray20"></div>
                    <div className="Color-box Color-gray40"></div>
                    <div className="Color-box Color-gray50"></div>
                    <div className="Color-box Color-gray60"></div>
                    <div className="Color-box  Color-gray70"></div>
                    <div className="Color-box Color-gray80"></div>
                    <div className="Color-box Color-gray90"></div>
                    <div className="Color-box Color-gray100"></div>
                </div>
                <div className="Grid-cell  content">
                    <h4>Name</h4>
                    <p className="Color-name ">Gray 0</p>
                    <p className="Color-name ">Gray 5</p>
                    <p className="Color-name ">Gray 10</p>
                    <p className="Color-name ">Gray 15</p>
                    <p className="Color-name ">Gray 20</p>
                    <p className="Color-name ">Gray 40</p>
                    <p className="Color-name ">Gray 50</p>
                    <p className="Color-name ">Gray 60</p>
                    <p className="Color-name">Gray 70</p>
                    <p className="Color-name ">Gray 80</p>
                    <p className="Color-name ">Gray 90</p>
                    <p className="Color-name ">Gray 100</p>
                </div>
                <div className="Grid-cell content">
                    <h4>Value</h4>
                    <p className="Color-value">#ffffff</p>
                    <p className="Color-value">#fbfbfb</p>
                    <p className="Color-value">#f8f8f8</p>
                    <p className="Color-value">#f6f5f5</p>
                    <p className="Color-value">#f3f2f3</p>
                    <p className="Color-value">#666666</p>
                    <p className="Color-value">#3e3e3e</p>
                    <p className="Color-value">#0B0B11</p>
                    <p className="Color-value">#07060E</p>
                    <p className="Color-value">#03010A</p>
                    <p className="Color-value">#04020B</p>
                    <p className="Color-value">#000000</p>
                </div>

            </div>
        
        </div>
    )
}