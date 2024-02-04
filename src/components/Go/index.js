import {Component} from 'react'
import Home from '../Home';
import './index.css'

class Hi extends Component{
    state={time:0,green:false,red:false}
    id=null;
    go=()=>{
        {this.start()}
    }
    start = () => {
        if (this.id !== null) {
            clearInterval(this.id);
        }
    
        this.id = setInterval(() => {
            this.setState((prevstate) => {
                const newTime = prevstate.time + 1;
                if (newTime == 110) {
                    clearInterval(this.id);
                    this.setState({time:0})
                    {this.go()}
                }
    
                return {
                    time: newTime,
                    green: !prevstate.green,
                    red: false
                };
            });
        }, 100);
    };
    
    stop=()=>{
        this.setState((prevState)=>({
            red:!prevState.red,green:false
        }))
        clearInterval(this.id);
    }
    render(){
        const {time,green,red}=this.state;
        return (
            <div className='divt'>
                <Home/>
                <div >
                    <h1>Timer</h1>
                    <p className='p'>{time}</p>
                </div>
                <div>
                    <button type='button' disabled={green} className='green' onClick={this.start}>Start timer</button>
                    <button type='button' disabled={red} className='red' onClick={this.stop}>Stop timer</button>
                </div>
            </div>
        )
    }
}
export default Hi