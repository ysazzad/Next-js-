import Image from "next/image";
import Link from "next/link";
import logo from '/public/images/logo.png'


const Navbar = ({ children }) => {
    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar shadow-lg lg:shadow-none pt-0 lg:pt-12 px-0  lg:px-24">
                    <div className="flex-1 px-2 mx-2"> <a className="btn bg-blue text-white btn-ghost normal-case text-xl">Gym</a>
                        <p className="text-blue text-xl ml-2.5 font-serif">baran</p></div>

                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link href="/">Home</Link></li>
                            <li><a href="/program">Program</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about"> About Us</a></li>
                            <div className="invisible lg:visible ">
                                <a className="btn bg-light-blue  normal-case shadow-2xl text-base">Log in</a>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Home</a></li>
                    <li><a>Program</a></li>
                    <li><a>Blog</a></li>
                    <li><a> About Us</a></li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;