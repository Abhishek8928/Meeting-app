import React from 'react'
import './Testominal.css'
import profile1 from '../Testimage/profile1.jpeg'
import profile2 from '../Testimage/profile2.jpeg'
import profile3 from '../Testimage/profile3.jpeg'
import profile4 from '../Testimage/profile4.jpeg'
import profile5 from '../Testimage/profile5.jpeg'
import profile6 from '../Testimage/profile6.jpeg'
import logo1 from '../Testimage/logo1.png'
import logo2 from '../Testimage/logo2.png'
import logo3 from '../Testimage/logo3.png'
import logo4 from '../Testimage/logo4.png'
import logo5 from '../Testimage/logo5.png'
import logo6 from '../Testimage/logo6.png'

export default function Testominal() {
    return (
        <div className='testominal'>
            <h1 className="test-center">Built for people who code.</h1>
            <div className="testominal-wrapper">
                
                <div className="test-card">
                <div className="d-flexible">
                        <div>
                            <div className='d-flex'>
                                <img className='test-img' src={profile2} alt="" />
                                <div>
                                    <h3 className='card-txt-whi card-m-0'>Ben Norwood</h3>
                                    <small className='card-txt-whi fs-1'>DevOps Engineer</small>
                                </div>
                            </div>
                        </div>
                    <img width = '60px'src={logo2} alt="" />
                    </div>

                    <p className='comments'>I really love the self-service developer experience that Wayscript provides. It’s a really nice middle ground platform to quickly deploy services that support our business productivity.</p>
                </div>



                <div className="test-card">
                <div className="d-flexible">
                        <div>
                            <div className='d-flex'>
                                <img className='test-img' src={profile1} alt="" />
                                <div>
                                    <h3 className='card-txt-whi card-m-0'>Zack McCarty</h3>
                                    <small className='card-txt-whi fs-1'>Director of FP&A</small>
                                </div>
                            </div>
                        </div>
                    <img width = '60px'src={logo1} alt="" />
                    </div>

                    <p className='comments'>Finding Wayscript was one of the greatest discoveries of my professional career and changed the way I build automation forever. </p>
                </div>






                <div className="test-card">
                <div className="d-flexible">
                        <div>
                            <div className='d-flex'>
                                <img className='test-img' src={profile3} alt="" />
                                <div>
                                    <h3 className='card-txt-whi card-m-0'>Danny Arenson</h3>
                                    <small className='card-txt-whi fs-1'>Data Enginer</small>
                                </div>
                            </div>
                        </div>
                    <img width = '60px'src={logo3} alt="" />
                    </div>

                    <p className='comments'>Since using my ability to automate TB's of code to be tracked and stored has efficiently improved. WayScript has also been tremendously helpful with integrating different source systems for ingress/egress purposes.</p>
                </div>




                <div className="test-card">
                <div className="d-flexible">
                        <div>
                            <div className='d-flex'>
                                <img className='test-img' src={profile4} alt="" />
                                <div>
                                    <h3 className='card-txt-whi card-m-0'>Mike Hagerty</h3>
                                    <small className='card-txt-whi fs-1'>Sr. Demo Engineer</small>
                                </div>
                            </div>
                        </div>
                    <img width = '60px'src={logo4} alt="" />
                    </div>

                    <p className='comments'>I need to be able to develop and deploy operational scripts quickly and effectively. allows me to do just that, without the overhead of managing a box, and in a secure, consistent, and reliable fashion .</p>
                </div>




                <div className="test-card">
                <div className="d-flexible">
                        <div>
                            <div className='d-flex'>
                                <img className='test-img' src={profile5} alt="" />
                                <div>
                                    <h3 className='card-txt-whi card-m-0'>Riley Cohen</h3>
                                    <small className='card-txt-whi fs-1'>Data Enginer</small>
                                </div>
                            </div>
                        </div>
                    <img width = '60px'src={logo5} alt="" />
                    </div>

                    <p className='comments'>With I can solve technical problems faster without having to tap into engineering resources. opened the door for us in so many ways and to this day is my favorite SaaS tool that exists.</p>
                </div>




                <div className="test-card">
                <div className="d-flexible">
                        <div>
                            <div className='d-flex'>
                                <img className='test-img' src={profile6} alt="" />
                                <div>
                                    <h3 className='card-txt-whi card-m-0'>Abhishek Sharma</h3>
                                    <small className='card-txt-whi fs-1'>Digital Advertising Strategist</small>
                                </div>
                            </div>
                        </div>
                    <img width = '60px'src={logo6} alt="" />
                    </div>

                    <p className='comments'>The fact that doesn't require me to think about advanced stuff like server location or processing speed ensures that my scripts always work and keep working, and that I can easily duplicate one project to serve as a template for another project</p>
                </div>


            </div>

        </div>
    )
}
