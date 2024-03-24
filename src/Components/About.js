import React, { useState } from 'react'

export default function About(props) {
    
  return (
    <div>
      <div className="container my-4">
      <h2 style={{color:props.mode === 'dark'?'white':'black'}}>{props.about}</h2>
      <div class="accordion" id="accordionExample" >
  <div class="accordion-item" style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}}>
    <h2 class="accordion-header" >
      <button class="accordion-button" style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Functionalities </strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" >
         A Tool for Text Manipulation <br/>
        <strong>1.Convert to Upper and Lower Case: </strong>This function allows users to easily change the case of text, making it all uppercase or lowercase. It can be useful for standardizing text or emphasizing certain parts.<br/>
        <strong>2.Copy Text:</strong> This function lets users duplicate text, which can be handy for making backups or copying text to use in different parts of a document or program.<br/>
        <strong>3.Remove Extra Spaces:</strong> This function helps clean up text by removing unnecessary extra spaces, which can occur due to formatting or user input errors. It helps make the text more readable and consistent.<br/>
        <strong>4.Clear Text: </strong>This function clears all text, providing a quick way to start fresh or remove all content from the analyzer.
      </div>
    </div>
  </div>
  <div class="accordion-item" style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Text Analyzer: Empowering Text Editing with React.js

        </strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Text Analyzer stands as a testament to the capabilities of React.js, a leading JavaScript library for creating interactive user interfaces. Developed with a keen focus on user experience, this web application offers a rich array of text manipulation tools aimed at simplifying and enhancing your text editing endeavors.

      </div>
    </div>
  </div>
  <div class="accordion-item" style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>About me</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div>
      <div class="accordion-body">
        <div class="form-container">
        Hello! I'm kaibalya, a passionate developer with a love for creating innovative solutions. My journey into the world of programming started 2 years ago,when I was introduced to my first computer, and since then, I've been hooked on the endless possibilities of code.

I'm trying to specialize in React JS, constantly seeking new challenges and opportunities to expand my skills. Whether it's crafting elegant websites with HTML, CSS, and JavaScript, or diving into the backend with Python, I'm always eager to tackle new projects and push the boundaries of what's possible.

When I'm not coding, you can find me reading Sci-fi novel. I believe that a well-rounded individual is a better problem-solver, which is why I'm always exploring new hobbies and interests to complement my technical skills.

I'm excited to continue learning and growing in this ever-evolving field, and I can't wait to see where this journey takes me next. Thank you for visiting my page, and feel free to reach out if you'd like to collaborate or just chat about all things tech!



        </div>
      </div>
      </div>
    </div>
  </div>
</div>
  
      </div>
    </div>
  )
}
