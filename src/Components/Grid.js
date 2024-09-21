import React, { Component } from 'react'
import download from '../Components/Images/download.gif';
import evoting from '../Components/Files/E-Voting System Using BlockChain.pdf';
import resume from '../Components/Files/Santosh Vishwakarma Resume.pdf';

export class Grid extends Component {

  render() {
    return (
      <div>
        <div className="container text-center">
            {/* Column 1 */}
            <section>
            <div className="row">
            <div className="col-12 col-md-6 my-4">
            <h2>
                Hello, Its'me
            </h2>
            <h1>
                Santosh Vishwakarma
            </h1>
            <h3>
                And I'm a Software Engineer
            </h3>

            <div>
                <a href="mailto:santoshvishwakarma0811@gmail.com" target="_blank" rel="noopener noreferrer">
                    <lord-icon id="LC" src="https://cdn.lordicon.com/ebjjjrhp.json" trigger="hover"
                        colors="primary:#7eddf2,secondary:#08a88a">
                    </lord-icon>
                </a>

                <a href="http://www.linkedin.com/in/santosh0811" target="_blank" rel="noopener noreferrer">
                    <lord-icon id="LC" src="https://cdn.lordicon.com/mdyiqybm.json" trigger="hover"
                        state="hover-draw" colors="primary:#7eddf2,secondary:#08a88a">
                    </lord-icon>
                </a>

                <a href="https://github.com/Santosh0811" target="_blank" rel="noopener noreferrer">
                    <lord-icon id="LC" src="https://cdn.lordicon.com/kqvibaec.json" trigger="hover"
                        colors="primary:#7eddf2,secondary:#08a88a">
                    </lord-icon>
                </a>

                <a href="https://www.instagram.com/santoshvishwakarma811?igsh=MXYxN3R1dnBmeHNkdA==" target="_blank" rel="noopener noreferrer">
                    <lord-icon id="LC" src="https://cdn.lordicon.com/shlffxcb.json" trigger="hover"
                        colors="primary:#7eddf2,secondary:#08a88a">
                    </lord-icon>
                </a>
            </div>
            <div>
                <a href={resume} download="Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-dark btncss" type="button">
                        <img src='https://media.lordicon.com/icons/wired/outline/982-cv-curriculum-vitae-resume.svg' alt='Not Available'/>
                        Download
                        <img src={download} alt='Not Available'/>
                    </button>
                </a>
            </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-6 my-4">
                <lord-icon src="https://cdn.lordicon.com/gkgkfbzm.json" trigger="in" state="in-reveal"
                    colors="primary:#7eddf2,secondary:#08a88a" style={{width:"400px", height:"400px"}}>
                </lord-icon>
            </div>
            </div>
            </section>

            
            {/* Coloumn 3 */}
            <section id='EVSUB'>
            <div className="row">
            <div className="col-12 col-md-6 my-4">
            <h1>
                E-Voting System Using Blockchain
            </h1>
            <a href="E-Voting System Using BlockChain.pdf" target="_blank" rel="noopener noreferrer">
                <button id="btn1">
                    <h3>
                        Click Here for More info!
                    </h3>

                    <lord-icon id="LC" src="https://cdn.lordicon.com/uxehjwfw.json" trigger="hover"
                        colors="primary:#16a9c7,secondary:#848484">
                    </lord-icon>
                </button>
            </a>
            </div>

            {/* Column 4 */}
                <div className="col-12 col-md-6 my-4">
                    <div className="pdf-container">
                        <iframe src={evoting} title='Evoting PDF'></iframe>
                    </div>
                </div>
            </div>
            </section>

            {/* Column 5 */}
            <section id='NGG'>
            <div className="row">
            <div className="col-12 col-md-6 my-4">
            <h1>
            Number Guessing Game
            </h1>
            <a href="https://santosh0811.github.io/Guessing-Number-Game/" target="_blank" rel="noopener noreferrer">
                <button id="btn1">
                    <h3>
                        Click Here for More info!
                    </h3>

                    <lord-icon id="LC" src="https://cdn.lordicon.com/uxehjwfw.json" trigger="hover"
                        colors="primary:#16a9c7,secondary:#848484">
                    </lord-icon>
                </button>
            </a>
            </div>

            {/* Column 6 */}
                <div className="col-12 col-md-6 my-4">
                    <div className="pdf-container">
                    <iframe src="https://santosh0811.github.io/Guessing-Number-Game/" title="Number Guessing Game" width="500px" height="400px"></iframe>
                    </div>
                </div>
            </div>
            </section>

            {/* Column 7 */}
            <section id='HCW'>
            <div className="row">
            <div className="col-12 col-md-6 my-4">
            <h1>
            Hyper Car Website
            </h1>
            <a href="https://santosh0811.github.io/SuperCars-ShowRoom/" target="_blank" rel="noopener noreferrer">
                <button id="btn1">
                    <h3>
                        Click Here for More info!
                    </h3>

                    <lord-icon id="LC" src="https://cdn.lordicon.com/uxehjwfw.json" trigger="hover"
                        colors="primary:#16a9c7,secondary:#848484">
                    </lord-icon>
                </button>
            </a>
            </div>

            {/* Column 8 */}
                <div className="col-12 col-md-6 my-4">
                    <div className="pdf-container">
                    <iframe src="https://santosh0811.github.io/SuperCars-ShowRoom/" title="Super Cars Website" width="500px" height="400px"></iframe>
                    </div>
                </div>
            </div>
            </section>

            {/* Column 9 */}
            <section id='GC'>
            <div className="row">
            <div className="col-12 col-md-6 my-4">
            <h1>
            Geometry Calculator
            </h1>
            <a href="https://santosh0811.github.io/Geometry-Calc/" target="_blank" rel="noopener noreferrer">
                <button id="btn1">
                    <h3>
                        Click Here for More info!
                    </h3>

                    <lord-icon id="LC" src="https://cdn.lordicon.com/uxehjwfw.json" trigger="hover"
                        colors="primary:#16a9c7,secondary:#848484">
                    </lord-icon>
                </button>
            </a>
            </div>

            {/* Column 10 */}
                <div className="col-12 col-md-6 my-4">
                    <div className="pdf-container">
                    <iframe src="https://santosh0811.github.io/Geometry-Calc/" title="Geometry Calculator" width="500px" height="400px"></iframe>
                    </div>
                </div>
            </div>
            </section>
        </div>
        </div>
    )
  }
}

export default Grid
