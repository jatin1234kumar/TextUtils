import React from 'react'

function About(props) {
  return (
    <div className='container mt-4'>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item" style={{background : `${props.mode === "light" ? "white": "#212834"}` , color: `${props.mode === "light" ? "black": "white"}`}}>
                <h2 class="accordion-header">
                <button class="accordion-button" style={{background : `${props.mode === "light" ? "white": "#212834"}` , color: `${props.mode === "light" ? "black": "white"}`}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={{background : `${props.mode === "light" ? "white": "#212834"}` , color: `${props.mode === "light" ? "black": "white"}`}}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={{background : `${props.mode === "light" ? "white": "#212834"}` , color: `${props.mode === "light" ? "black": "white"}`}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={{background : `${props.mode === "light" ? "white": "#212834"}` , color: `${props.mode === "light" ? "black": "white"}`}}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={{background : `${props.mode === "light" ? "white": "#212834"}` , color: `${props.mode === "light" ? "black": "white"}`}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
