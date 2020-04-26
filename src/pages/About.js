import React from 'react';

export default function About() {
    return (
        <>
            <section id="aboutMe">
                <div className="container">
                    <br />
                    <h2>A Little About Me...</h2>
                    <div className="row infoAboutMe">
                        <div className="col-md-8">
                            <p>Hey my name is Gard! I am a 27 year old front-end development student on his last year of studying.
                                On my free time i like to play videogames, hang with friends, code & work out.
                                I am a competetive person, so i always try to be the best i can be at whater that i am doing.
                                hopefully after this year i will have a job working with front-end, so that i can keep on improving my
                                coding, styling and design skills.</p>
                            <br />
                            <h4>Hobbys</h4>
                            <p>Football, Gaming, Training, Golf, Pool</p>
                            <h4>Interests</h4>
                            <p>Skateboard, Snowboard, Basketball, Coding</p>
                            <h4>Favorite Quote</h4>
                            <blockquote>"When we strive to become better than we are, everything around us becomes better, too."</blockquote>
                            <br />
                            <span className="signature">.Gard Grønvik</span>
                        </div>
                        <div className="col-md-4">
                            <img src="https://scontent.fosl4-1.fna.fbcdn.net/v/t1.0-9/1526368_10154287676235305_8241158265081889401_n.jpg?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=e_A10jNNMZgAX9601w-&_nc_ht=scontent.fosl4-1.fna&oh=3725178f62b98f6ee4a2cbfe9edf4688&oe=5EC5010E" alt="Gard" className="img-fluid img-circle" />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <hr />
            <div className="container">
                <h2 className="text-center mt-0">My Skills</h2>
                <hr className="divider my-4" />
                <div className="row pagePadding">
                    <div className="col-md-4">
                        <p>WordPress</p>
                        <div className="Animation-loading">
                            <div className="programSkill cms">50%</div>
                        </div>
                        <p>Responsive Web Design</p>
                        <div className="Animation-loading">
                            <div className="programSkill rwd">85%</div>
                        </div>
                        <p>React</p>
                        <div className="Animation-loading">
                            <div className="programSkill react">70%</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>GitHub, GIT</p>
                        <div className="Animation-loading">
                            <div className="programSkill git">90%</div>
                        </div>
                        <p>HTML</p>
                        <div className="Animation-loading">
                            <div className="programSkill html">95%</div>
                        </div>
                        <p>CSS</p>
                        <div className="Animation-loading">
                            <div className="programSkill css">85%</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>Bootstrap</p>
                        <div className="Animation-loading">
                            <div className="programSkill bs">90%</div>
                        </div>
                        <p>JavaScript</p>
                        <div className="Animation-loading">
                            <div className="programSkill js">70%</div>
                        </div>
                        <p>JQuery</p>
                        <div className="Animation-loading">
                            <div className="programSkill jquery">60%</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <section className="pagePadding">
                    <div className="container">
                        <h2 className="text-center mt-0">My Strongest Skills</h2>
                        <hr className="divider my-4" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/material-outlined/64/000000/html.png" alt="icon" />
                                    <h3 className="h4 mb-2">HTML</h3>
                                    <p className="text-muted">HyperText Markup Language</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/metro/64/000000/css-filetype.png" alt="icon" />
                                    <h3 className="h4 mb-2">CSS/SASS</h3>
                                    <p className="text-muted">Syntactically awesome style sheets</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/ios/64/000000/javascript.png" alt="icon" />
                                    <h3 className="h4 mb-2">Javascript</h3>
                                    <p className="text-muted">Object-oriented computer programming language</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/carbon-copy/64/000000/react.png" alt="icon" />
                                    <h3 className="h4 mb-2">React</h3>
                                    <p className="text-muted">JavaScript Library</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr />
            <div className="container">
                <section className="pagePadding">
                    <div className="container">
                        <h2 className="text-center mt-0">Design Programs</h2>
                        <hr className="divider my-4" />
                        <div className="row">
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/color/64/000000/adobe-photoshop.png" className="photoshop" alt="icon" />
                                    <h3 className="h4 mb-2">Photoshop</h3>
                                    <p className="text-muted">Advanced Image Editing Program.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/color/64/000000/adobe-illustrator.png" alt="icon" />
                                    <h3 className="h4 mb-2">Adobe Illustrator</h3>
                                    <p className="text-muted">Editing Tool For Vector Graphics</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/color/48/000000/adobe-xd.png" alt="icon" />
                                    <h3 className="h4 mb-2">Adobe XD</h3>
                                    <p className="text-muted">Prototyping & UX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}