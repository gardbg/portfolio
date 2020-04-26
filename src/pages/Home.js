import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

export default function HomePage() {
    return (
        <>
            <header className="mainPageHero">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Hey, i'm Gard. I design & code websites.</h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <a href="#services"><img src="https://img.icons8.com/ios/64/000000/low-importance.png" className="circleArrow bouncing" alt="icon" /></a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="codeAlwaysClean" id="services">
                <div className="container">
                    <h2 className="text-center">I Am At Your Service</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img src="https://img.icons8.com/wired/64/000000/code.png" alt="icon" />
                                <h3 className="h4">Clean code</h3>
                                <p className="text-muted">My code will be always be clean looking and easy to go through.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img src="https://img.icons8.com/carbon-copy/64/000000/bug.png" alt="icon" />
                                <h3 className="h4">Bug free</h3>
                                <p className="text-muted">My code will always be bug free and working fully.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img src="https://img.icons8.com/material/64/000000/media-queries.png" alt="icon" />
                                <h3 className="h4">Responsive Design</h3>
                                <p className="text-muted">My design will always be responsive, and work across platforms.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img src="https://img.icons8.com/wired/64/000000/web-design.png" alt="icon" />
                                <h3 className="h4">Appealing Design</h3>
                                <p className="text-muted">My design will always be appealing and functional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="container-gallery">
                    <h1 className="text-center">Portfolio Gallery</h1>
                    <hr />
                    <div className="portfolioGallery">
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/ab86930170947e651e64a6ed3b25e29f.jpg" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/0b58112968ad885cf5be7bbbe3336dbe.jpg" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/628ea9e2b9a316a80482afb74cb9df77.png" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/ff46def9dd4cb4148c019e38913dde83.png" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/26f6b736d5f6cdb9a8f0a1db66d7e5ca.jpg" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/7737e187afc13de99340c21cecedf348.jpg" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/4952be3d938219ed7ce89922e5524583.jpg" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/5653da13ab699a04bc6bef48d68b916f.jpg" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                        <div className="gallery-images">
                            <img src="https://i.gyazo.com/892cf3a56a571479c5040ae7766079c0.png" alt="Placeholder" className="img-fluid" />
                            <div className="centerOnPage">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <section className="pagePadding" id="seeProjectsDivider">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center portfolioDivider">
                            <h2 className="mt-0">Learn More About Me & My Projects!</h2>
                            <hr className="my-4" />
                            <p className="mb-4">Feel Free To Check Out My Social Media & Github.</p>
                            <div className="contactIcons">
                                <a href="https://www.facebook.com/GardGronvik"><img src="https://img.icons8.com/clouds/100/000000/facebook-new.png" alt="icon" /></a>
                                <a href="https://twitter.com/home"><img src="https://img.icons8.com/clouds/100/000000/twitter.png" alt="icon" /></a>
                                <a href="https://www.linkedin.com/in/gard-bach-gr%C3%B8nvik-129859150/"><img src="https://img.icons8.com/clouds/100/000000/linkedin.png" alt="icon" /></a>
                                <a href="https://github.com/gardbg"><img src="https://img.icons8.com/clouds/100/000000/github.png" alt="icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            <div className="container">
                <div className="row rowMainPage justify-content-center">
                    <h2 className="h2Home">Video Gallery</h2>
                    <AwesomeSlider animation="cubeAnimation">
                        <div data-src="https://i.gyazo.com/6ca937c0d91e6fcafad4c3bd26404084.gif" />
                        <div data-src="https://i.gyazo.com/96969a24b47ea8e395f63640a159e496.gif" />
                        <div data-src="https://i.gyazo.com/ef0e8e750d5125014d568d3fe2915f99.gif" />
                        <div data-src="https://i.gyazo.com/f8b5082879d28d304cfd0306921f7e93.gif" />
                        <div data-src="https://i.gyazo.com/d16f4d9e1f0eae0bf19daae5247d8c83.gif" />
                    </AwesomeSlider>
                </div>
            </div>
        </>
    )
}