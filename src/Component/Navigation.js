
import React ,{ Component}from "react"
import { Link } from "react-router-dom"
export default class Navigation extends Component {

    render() {
    return (
    
        <div>
        <nav>
             <ul>
                <li>
                    <img src='assets/images/cake.png'
                    alt="Cake"
                    style={{ width: '60px', height: '60px' }}/>
                </li>
                <li>
                    <input type="text" name='Search' />
                    <input type="submit" value='Search'/>
                </li>
                
                 <li><Link to='/services'>Services</Link></li>
                <li><Link  to='/about'>About</Link></li>
                <li><Link to='/view profile'>View profile</Link></li>
                <li><Link to='/view package'>View package</Link></li>
            </ul> 

            
        </nav>
        </div>
    )
    }
}
