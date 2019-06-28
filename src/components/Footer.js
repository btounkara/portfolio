import React, {Component} from 'react'
import axios from "axios" // For making client request.
import swal from 'sweetalert2'
import './Footer.scss';
import madeWithBulma from '../made-with-bulma.png';

const INITIAL_STATE = {
    name: "",
    email: "",
    message: ""
};

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
    }

    handleFields = e => this.setState({
        [e.target.name]: e.target.value 
    });

    handleForm = e => {
        
        axios.post(
            'https://formcarry.com/s/w0EzFS_lpwr', 
            this.state, 
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        ).then(function (response) {
            swal.fire({
                text: 'Your message has been sent', 
                type: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }).catch(function (error) {
            swal.fire({
                title: 'An error occured',
                text: 'Try to contact him directly at bak.tounkara@gmail.com.',
                type: 'error',
                timer: 3000,
                showConfirmButton: false
            });
        });
        
        this.setState({
            ...INITIAL_STATE
        });
        e.preventDefault();
    };

    render() {
        return <footer id="contact" 
            className="hero section is-fullheight"
            data-aos="fade-in"
        >
            <div className="hero-body">
                <div className="container is-medium">
                    <h1 className="title is-2 has-text-centered has-text-white">Contact</h1>
                    <p className="subtitle has-text-centered">Want to work together or simply get in touch ? Don't hesitate</p>
                    <form onSubmit={this.handleForm} >
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control is-expanded">
                                        <input 
                                            className="input is-medium"
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            onChange={this.handleFields}
                                            value={this.state.name}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control is-expanded">
                                        <input className="input is-medium" 
                                            id="email"
                                            name="email" 
                                            type="email" 
                                            required
                                            onChange={this.handleFields}
                                            value={this.state.email}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control is-expanded">
                                        <textarea className="textarea is-medium" 
                                            id="message"
                                            name="message"
                                            rows="5"
                                            required
                                            onChange={this.handleFields}
                                            value={this.state.message}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-one-third">
                                <div className="field">
                                    <div className="control">
                                        <button type="submit"className="button is-light is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hero-foot">
                <div className="copyright has-text-centered has-text-light">
                    <p>Copyright © 2019</p>
                    <p>Developed by Bakary Tounkara</p>
                    <a href="https://bulma.io">
                        <img src={madeWithBulma} alt="Made with Bulma" width="163" height="31"/>
                    </a>
                </div>
            </div>
        </footer>
    }
}

export default Footer;