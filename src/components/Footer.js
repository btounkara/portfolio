import React from 'react'

require('./Footer.scss');

const Footer = () => (
    <footer id="contact" className="section hero">
        <div className="container is-medium">
            <h1 className="title is-2 has-text-centered">Get in touch</h1>
            <form>
                <div class="columns is-centered">
                    <div class="column is-half">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control is-expanded">
                                <input class="input is-medium" name="name" id="name" type="text" required/>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control is-expanded">
                                <input class="input is-medium" type="email" id="email" name="email" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-centered">
                    <div class="column">
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control is-expanded">
                                <textarea class="textarea is-medium" name="comment" rows="5" required=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-centered">
                    <div class="column is-one-third">
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary is-outlined is-medium is-fullwidth">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="copyright has-text-centered has-text-white">
                <p>Copyright © 2019</p>
                <p>Developed by Bakary Tounkara</p>
            </div>
            <div className="content has-text-centered">
                <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"/>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;