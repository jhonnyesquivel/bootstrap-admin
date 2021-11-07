import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faCog, faFolder, faLaugh, faTable, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas">
                        <FontAwesomeIcon icon={faLaugh} />
                    </i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw">
                        <FontAwesomeIcon icon={faTachometerAlt} />
                    </i>
                    <span>Dashboard</span></a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* Nav Item - Pages Collapse Menu */}

            <MenuItem label="Components" subMenuSubtitle="Custom Components:" key="menuComponents"
                items={[{
                    route: "/buttons",
                    label: "Buttons"
                },
                {
                    route: "/cards",
                    label: "Cards"
                }]}>
                <FontAwesomeIcon icon={faCog} />
            </MenuItem>

            {/* Nav Item - Utilities Collapse Menu */}

            <MenuItem label="Utilities" subMenuSubtitle="Custom Utilities:"
                items={[{
                    route: "/Colors",
                    label: "Colors"
                },
                {
                    route: "/borders",
                    label: "Borders"
                }, {
                    route: "/animations",
                    label: "Animations"
                },
                {
                    route: "/other",
                    label: "Other"
                }]}>
                <FontAwesomeIcon icon={faWrench} />
            </MenuItem>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* Nav Item - Pages Collapse Menu */}

            <MenuItem label="Pages" subMenuSubtitle="Login screen:"
                items={[{
                    route: "/Login",
                    label: "Login"
                },
                {
                    route: "/Register",
                    label: "Register"
                }, {
                    route: "/Forgot Password",
                    label: "Forgot Password"
                }]}>
                <FontAwesomeIcon icon={faFolder} />
            </MenuItem>

            {/* Nav Item - Charts */}

            <MenuItem
                items={[{
                    route: "/Charts",
                    label: "Charts"
                }]}>
                <FontAwesomeIcon icon={faChartArea} />
            </MenuItem>


            <MenuItem
                items={[{
                    route: "/tables",
                    label: "tables"
                }]}>
                <FontAwesomeIcon icon={faChartArea} />
            </MenuItem>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}

export default Sidebar
