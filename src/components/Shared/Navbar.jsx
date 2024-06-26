import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="mx-2 font-semibold text-xl">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-2 font-semibold text-xl">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mx-2 font-semibold text-xl">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="mx-2 font-semibold text-xl">
                            <Link to="/register">Register</Link>
                        </li>
                        <li className="mx-2 font-semibold text-xl">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tasty</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    <li className="mx-2 font-semibold text-xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2 font-semibold text-xl">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2 font-semibold text-xl">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="mx-2 font-semibold text-xl">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="mx-2 font-semibold text-xl">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;