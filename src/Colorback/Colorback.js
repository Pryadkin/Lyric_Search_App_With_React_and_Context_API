import React, { Component } from 'react';

import './Colorback.css';


export default class Colorback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: 100,
            g: 150,
            b: 100
        }
    }
        
    getColorBackground = (color, e) => {
        if (color === 'r') {
            this.setState({
                r: e.target.value
            })
        }
        if (color === 'g') {
            this.setState({
                g: e.target.value
            })
        }
        if (color === 'b') {
            this.setState({
                b: e.target.value
            })
        }
    }
    
    render() {
        console.log(this.state)
        const style = {
            backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b}`,
            width: "100%",
            height: '100vh'
        }  
        return (
            <div className="colorback" style={style}>
                { this.props.children }
                <form className="colorRange">
                    <div>
                        <input type="range" 
                            onChange={this.getColorBackground.bind(this, 'r')}            
                            min="0"
                            max="255"
                            data-num="r"></input>  
                        <label htmlFor="red">Red</label>
                    </div> 
                    <div>       
                        <input type="range" 
                            onChange={this.getColorBackground.bind(this, 'g')}  
                            min="0"
                            max="255"
                            data-num="g"></input> 
                        <label htmlFor="green">Green</label>
                    </div>   
                    <div>    
                        <input type="range" 
                            onChange={this.getColorBackground.bind(this, 'b')}  
                            min="0"
                            max="255"
                            data-num="b"></input>     
                        <label htmlFor="blue">Blue</label>
                    </div>   
                </form>
            </div>
        )
    }
    
}



