import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <div class="">
            <ul>
                <li>
                    <Link to="/" class="">Home</Link>
                </li>
                <li>
                    <Link to="/airbnb" class="">AirBnB Listings</Link>
                </li>
            </ul>
        </div>
    )
}