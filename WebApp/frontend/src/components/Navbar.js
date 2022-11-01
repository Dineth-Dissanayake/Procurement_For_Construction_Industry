import { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Avatar } from '@mui/material';

import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";

const Navbar = ({title="Procurement for Construction Industry"}) => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const { toast } = useContext(ToastContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">{title}</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarColor02" 
                    aria-controls="navbarColor02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">{user.username}</a>
                                </li>

                                <li className="nav-item">
                                    <Avatar 
                                        src="/broken-image.jpg"
                                        sx={{ width: 30, height: 30, marginTop: 0.5, marginRight: 1}} 
                                    /> 
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => {
                                        setUser(null);
                                        localStorage.clear();
                                        toast.success("Logged out.");
                                        navigate("/login", { replace: true });
                                    }}
                                >
                                    <button className="btn btn-danger">Logout</button>
                                </li>
                            </>
                        ) : (

                        <></>
                        
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;