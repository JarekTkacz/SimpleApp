import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home  </Link>
                <Link to="/List">  List</Link>
            </nav>
        </div>

    )

}

export default NavBar;