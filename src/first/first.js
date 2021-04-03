import React, { Component } from 'react';
import '../App.scss'
import App from './donate'
import img1 from './img/img.png'


class First extends Component {
    render() {




        return (

            <div>
                <div className='navs'>
                    <div className='nav2'>
                        <ul>
                            <li>FuelUp  Education</li>
                            <li>Course</li>
                            <li>Subjects</li>
                            <li>For Kids</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li>
                                <li className='dontatebtn'> Donate Now!  </li>
                            </li>

                            <li> <span className='donate'>
                                <li >Login</li>
                                <li className='loginBtn'>  Start Learning   </li>
                            </span></li>

                        </ul>
                    </div>
                </div>
                <div className='space'></div>

                <div className='everyTittle ' >
                    <div className='imgdiv col-md-4'>
                        <img src={img1} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <div >
                            <div >
                                <h1 className='DonateHead'>FuelUp Education Donation</h1>
                                <p className='DonateText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde mollitia molestiae earum ex eos sint sed saepeed saepe aut eum blanditiis dolores ad esse consequuntur maxime quis, fugit laudantium voluptates obcaecati ed saepe aut eum blanditiis dolores ad esse conseqr maxime quis , fugit <br /> </p>
                                <p className='DonateText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde mollitia molestiae earum ex eos sint sed saepeed saepe aut eum blanditiis dolores ad esse consequuntur maxime quis, fugit laudantium  <br />  </p>
                            </div>
                        </div>

                        <div className='appComponents' style={{  justifyContent:'space-around'}}>
                            
                            <App />
                          

                        </div>

                    </div>
                </div>
            </div>




        )
    }
}

export default First