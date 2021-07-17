import React from 'react'
import '../Atoms/Grid.scss';



export default function Grid() {
    return (
        <div>
            <div className="Wrapper">

            <p>Responsive grid with Flexbox</p>

            <h3>Holly Grail page layout</h3>   
                <p>Note: in responsive view Aside 1 and Aside 2 elements stack below the Main content.</p>
            <div className="Grid Grid--full Grid--nested header">
                <div className="Grid-cell">
                
                </div>   
            </div>
                
                
            <div className="Grid Grid--full">
                <div className="Grid-cell">
                <ul className="navigation">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>  
            
            <div className="Grid Grid--gutters Grid--holly-grail Grid-landing">
                <div className="Grid-cell main">
                <div className="Demo Holly">
                    <strong>Main</strong>
                    <p>Salvia Helvetica ethical lo-fi, artisan messenger bag put a bird on it. Photo booth taxidermy kale chips, Carles Thundercats retro blog paleo. 8-bit four loko jean shorts, church-key tattooed bespoke normcore art party salvia organic vinyl letterpress distillery. You probably haven't heard of them tofu food truck, Echo Park salvia Schlitz heirloom scenester ennui biodiesel Intelligentsia +1 church-key. Bitters meh actually quinoa, YOLO pug authentic. Kitsch health goth paleo, pop-up tofu authentic gluten-free whatever yr Brooklyn irony. Banjo Tumblr you probably haven't heard of them literally aesthetic, wolf put a bird on it Kickstarter yr.</p>
                </div>
                </div>
                {/* <div className="Grid-cell aside aside-1">
                <div className="Demo Holly"><strong>Aside 1</strong><br />
                    <p> Chocolate cake fruitcake icing muffin applicake chocolate.</p>
                </div>
                </div> */}
                {/* <div className="Grid-cell aside aside-2">
                <div className="Demo Holly">
                    <strong>Aside 2</strong>
                    <p>Hashtag deep v PBR, chillwave banjo mlkshk readymade fixie crucifix. Tattooed Tumblr direct trade trust fund swag gluten-free.</p>
                </div>
                </div> */}
            </div>  
            
            <div className="Grid Grid--full">
                <div className="Grid-cell"><div className="Demo Holly"><strong>Footer</strong><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
            </div>
                <hr />
                <p>Some ideas are borrowed from Phillip Walton's Solved by Flexbox project. </p>
                <br />

            <h3>Basic Grid</h3>
                <p></p>
            <div className="Grid Grid--full u-textCenter">
                <div className="Grid-cell"><div className="Demo content-1of1"></div></div>
            </div>
            <div className="Grid Grid--gutters Grid--cols-2 u-textCenter">
                <div className="Grid-cell"><div className="Demo content-1of2"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of2"></div></div>
            </div>
            <div className="Grid Grid--gutters Grid--cols-3 u-textCenter">
                <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
            </div>
            <div className="Grid Grid--gutters Grid--cols-4 u-textCenter">
                <div className="Grid-cell"><div className="Demo content-1of4"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of4"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of4"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of4"></div></div>
            </div>
            <div className="Grid Grid--gutters Grid--cols-6 u-textCenter">
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
            </div>
                
            <div className="Grid Grid--gutters Grid--cols-12 u-textCenter">
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
                <div className="Grid-cell"><div className="Demo content-1of12"></div></div>
            </div>  
            <hr />  
                
            <h3>Sidebar and main content</h3>
            <div className="Grid Grid--gutters Grid--1of6">
                <div className="Grid-cell"><div className="Demo content-1of6"></div></div>
                <div className="Grid-cell"><div className="Demo">auto</div></div>
            </div>
            <div className="Grid Grid--gutters Grid--1of4">
                <div className="Grid-cell"><div className="Demo content-1of4"></div></div>
                <div className="Grid-cell"><div className="Demo">auto</div></div>
            </div>
            <div className="Grid Grid--gutters Grid--1of3">
                <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
                <div className="Grid-cell"><div className="Demo">auto</div></div>
            </div> 
            <hr /> 
                
            <h3>Left / Center / Right content alignment</h3>
            <div className="Grid Grid--gutters Grid--1of2">
                <div className="Grid-cell"><div className="Demo content-1of2"></div></div>
            </div>

            <div className="Grid Grid--gutters Grid--1of2 Grid--center">
                <div className="Grid-cell"><div className="Demo content-1of2"></div></div>
            </div>
                
            <div className="Grid Grid--gutters Grid--1of2 Grid--right">
                <div className="Grid-cell"><div className="Demo content-1of2"></div></div>
            </div>
            <hr />   
                
            <h3>Nesting</h3>
            <div className="Grid Grid--gutters Grid--1of3 Grid--nested">
                <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
                <div className="Grid-cell"><div className="Demo">     
                <div className="Grid Grid--gutters Grid--1of3 Grid--nested">
                    <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
                    <div className="Grid-cell"><div className="Demo">
                    <div className="Grid Grid--gutters Grid--1of3 Grid--nested">
                        <div className="Grid-cell"><div className="Demo content-1of3"></div></div>
                        <div className="Grid-cell"><div className="Demo">auto</div></div>
                    </div>        
                    </div></div>
                </div>      
                </div>
                </div>
            </div>
            <hr /> 
                
            <h3>Vertical alignment</h3>
            <div className="Grid Grid--gutters Grid--cols-3 Grid--top">
                <div className="Grid-cell"><div className="Demo">This cell should be <strong>top-aligned</strong>.</div></div>
                <div className="Grid-cell"><div className="Demo">Vice keytar actually DIY Thundercats. Flannel heirloom lo-fi Blue Bottle Intelligentsia pour-over Etsy church-key banh mi Marfa lomo yr messenger bag.Artisan try-hard food truck +1 Cosby sweater.</div></div>
                <div className="Grid-cell"><div className="Demo">Letterpress YOLO Austin Pinterest Helvetica. Cliche pug literally, church-key 90's twee you probably haven't heard of them meh fixie cornhole banh mi pork belly mustache. Stumptown bespoke Vice, bitters sustainable hoodie Echo Park letterpress 8-bit pug. Quinoa meh flexitarian roof party, actually selvage Carles put a bird on it umami vegan ethical. </div></div>
            </div>
            <div className="Grid Grid--gutters Grid--cols-3 Grid--center">
                <div className="Grid-cell"><div className="Demo">This cell should be <strong>center-aligned</strong>.</div></div>
                <div className="Grid-cell"><div className="Demo">Vice keytar actually DIY Thundercats. Flannel heirloom lo-fi Blue Bottle Intelligentsia pour-over Etsy church-key banh mi Marfa lomo yr messenger bag.Artisan try-hard food truck +1 Cosby sweater.</div></div>
                <div className="Grid-cell"><div className="Demo">Letterpress YOLO Austin Pinterest Helvetica. Cliche pug literally, church-key 90's twee you probably haven't heard of them meh fixie cornhole banh mi pork belly mustache. Stumptown bespoke Vice, bitters sustainable hoodie Echo Park letterpress 8-bit pug. Quinoa meh flexitarian roof party, actually selvage Carles put a bird on it umami vegan ethical. </div></div>
            </div>
                
            <div className="Grid Grid--gutters Grid--cols-3 Grid--bottom">
            <div className="Grid-cell"><div className="Demo">This cell should be <strong>bottom-aligned</strong>.</div></div>
                <div className="Grid-cell"><div className="Demo">Vice keytar actually DIY Thundercats. Flannel heirloom lo-fi Blue Bottle Intelligentsia pour-over Etsy church-key banh mi Marfa lomo yr messenger bag.Artisan try-hard food truck +1 Cosby sweater.</div></div>
                <div className="Grid-cell"><div className="Demo">Letterpress YOLO Austin Pinterest Helvetica. Cliche pug literally, church-key 90's twee you probably haven't heard of them meh fixie cornhole banh mi pork belly mustache. Stumptown bespoke Vice, bitters sustainable hoodie Echo Park letterpress 8-bit pug. Quinoa meh flexitarian roof party, actually selvage Carles put a bird on it umami vegan ethical. </div></div>
            </div>
            <hr />  
            
                
           
            </div>
        </div>
    )
}
