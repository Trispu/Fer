
import React ,{ Component}from "react"
export default class Navigation extends Component {

    render() {
    return (
    
        <div>
        <nav>
             <ul>
                <li>
                    <input type="text" name='Search' />
                    <input type="submit" value='Search'/>
                </li>
                
                <li><a href='/services'>Services</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/view profile'>View profile</a></li>
                <li><a href='/view package'>View package</a></li>
            </ul> 

            
        </nav>
        </div>
    )
    }
}
