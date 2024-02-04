import { Component } from "react";
import './index.css'

import { TailSpin as Loader } from 'react-loader-spinner';

const apiStatusConstant={
    initial:'INITIAL',
    success:'SUCCESS',
    failure:'FAILURE',
    loading:'LOADING'
}

class Text extends Component{

    state={value:"",data:[],apiStatus:apiStatusConstant.initial}

    componentDidMount(){
        this.get()
    }
   
    get=async()=>{
        this.setState({apiStatus:apiStatusConstant.loading})
        const {value}=this.state
        const url="https://apis.ccbp.in/wiki-search?search="+value;
        const options={
            method:'GET',
        }
        try {
            const res = await fetch(url);
            const data = await res.json();
        
            if (res.ok) {
              this.setState({ apiStatus: apiStatusConstant.success, data });
            } else {
              this.setState({
                apiStatus: apiStatusConstant.failure,
                error: "Failed to fetch data. Please try again.",
              });
            }
          } catch (error) {
            this.setState({
              apiStatus: apiStatusConstant.failure,
              error: "Failed to connect to the server. Please check your internet connection or try again later.",
            });
          }
        
        if (value===""){
            this.setState({data:[]})
        }
    }


    inputValue=(event)=>{
        this.setState({value:event.target.value})
        const {value}=this.state
        console.log(value);
    }
    go=()=>{
        this.get()
    }
    

    Enter=(event)=>{
        
        if (event.key==="Enter" && event.target.value===""){
            alert("Please Enter some text..")
        }
        else if (event.key==="Enter" && event.target.value!==""){
            console.log("clicked")
           this.go()
           this.setState({value:""})
        }
    }
  
    loadingView = () => (
        <div className="loader-container load" testid="loader">
          <Loader type="TailSpin" color="#D81F26" height={50} width={50}
          strokeWidth={3} />
        </div>
      )
  ret=()=>{
    this.get()
  }
    failureView=()=>{
        return(
            <div>
                <button type="button" onClick={this.ret} className="rbut">Retry</button>
            </div>
        )
    }

    successView=()=>{
    const {value,data}=this.state
    return(
        <div className="ff">
            <ul>
            {data.search_results ? (
            data.search_results.map((each, index) => (
                <li key={index} className="li">
                    <div>
                        <h1 className="hl">{each.title}</h1>
                        <a className="pl" href={each.link} target="_blank">{each.link}</a>
                        <p className="pd">{each.description}</p>
                    </div>
                </li>
            ))
            
        ) : (
            <li className="lino">No results Found <br/>
            Enter some text</li>
        )}
            </ul>
            
        </div>
    )
    }

    finale=()=>{
        const {apiStatus}=this.state
        switch(apiStatus){
            case apiStatusConstant.loading:
                return this.loadingView()
            case apiStatusConstant.success:
                return this.successView()   
            case apiStatusConstant.failure:
                return this.failureView()
            default:
                return null         
        }
    }

    
    render(){
        const {value,data}=this.state
        return(
            <div className="divinp">
                <input placeholder="Type a keyword and press Enter to search"
                 type="text" value={value} onKeyDown={this.Enter} onChange={this.inputValue} className="inp w-100"/>
                {this.finale()}
            </div>
        )
    }
}
export default Text