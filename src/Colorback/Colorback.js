import React, { Component } from 'react';

import './Colorback.css';

import ArrowSVG from './ArrowSVG'

export default class Colorback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: {
                r: 200,
                g: 200,
                b: 80
            },
            arrow: "hidden"
        }
    }
        
    getColorBackground = (color, e) => {
        if (color === 'r') {
            this.setState({
                color: {
                    r: e.target.value,
                    g: this.state.color.g,
                    b: this.state.color.b
                }            
            })
        }
        if (color === 'g') {
            this.setState({
                color: {
                    r: this.state.color.r,
                    g: e.target.value,
                    b: this.state.color.b
                }   
            })
        }
        if (color === 'b') {
            this.setState({
                color: {
                    r: this.state.color.r,
                    g: this.state.color.g,
                    b: e.target.value
                }   
            })
        }
    }

    getShowColorback = () => {
        if (this.state.arrow === "show") {
            this.setState({ arrow: "hidden" })
        } else {
            this.setState({ arrow: "show" })
        }    

    }

    
    
    
    render() {
        const style = {
            backgroundColor: `rgb(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b})`,
            width: "100%",
            height: '100vh'
        };
        
        let classes = ['colorback__fromRange'];
        let angle = "-270deg";
        if(this.state.arrow === "hidden") {
            classes.push("hiddenLeft");
            angle = "-90deg";
        } 
        classes = classes.join(' ');

        return (
            <div className="colorback" style={style}>
                { this.props.children }


                <form className={classes}>
                    <div className="container">
                        <div>
                            <input type="range" 
                                onChange={this.getColorBackground.bind(this, 'r')}   
                                value={this.state.color.r}         
                                min="0"
                                max="255"/>  
                            <label htmlFor="red">Red</label>
                        </div> 
                        <div>       
                            <input type="range" 
                                onChange={this.getColorBackground.bind(this, 'g')}  
                                value={this.state.color.g} 
                                min="0"
                                max="255"/> 
                            <label htmlFor="green">Green</label>
                        </div>   
                        <div>    
                            <input type="range" 
                                onChange={this.getColorBackground.bind(this, 'b')} 
                                value={this.state.color.b}  
                                min="0"
                                max="255"/>    
                            <label htmlFor="blue">Blue</label>
                        </div>
                    </div>
                    <div className="colorback__arrow"
                        onClick={this.getShowColorback}>
                        <ArrowSVG                             
                            fill="white"
                            rotate={angle} 
                        />   
                    </div>
                </form>
                

            </div>
        )
    }
    
}



