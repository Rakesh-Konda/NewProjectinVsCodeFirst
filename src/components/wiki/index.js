import { Component } from "react";
import './index.css'
import Text from "../Text";
import Home from '../Home'

class Image extends Component{
    render(){
        return(
            <div>
                
                <div className="divcen">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png"
                    alt="logo"  className="image"
                    />
                    <Text/>
                   
                </div>
            </div>
        )
    }
}
export default Image