import React from 'react'
import './Footer.scss';
import madeWithBulma from '../made-with-bulma.png';

const Footer = () => (
    <footer id="contact" 
        className="hero section is-fullheight"
        data-aos="fade-in"
    >
        <div class="hero-body">
            <div className="container is-medium">
                <h1 className="title is-2 has-text-centered has-text-white">Contact</h1>
                <p className="subtitle has-text-centered">Want to work together or simply get in touch ? Don't hesitate</p>
                <form>
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control is-expanded">
                                    <input className="input is-medium" name="name" id="name" type="text" required/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control is-expanded">
                                    <input className="input is-medium" type="email" id="email" name="email" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column">
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control is-expanded">
                                    <textarea className="textarea is-medium" name="comment" rows="5" required=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <div className="field">
                                <div className="control">
                                    <button className="button is-light is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="hero-foot">
            <div className="copyright has-text-centered has-text-light">
                <p>Copyright © 2019</p>
                <p>Developed by Bakary Tounkara</p>
                <a href="https://bulma.io">
                    <img src={madeWithBulma} alt="Made with Bulma" width="163" height="31"/>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;