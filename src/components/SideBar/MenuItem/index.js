
import React from 'react'
import { useRouter } from 'hooks/use-router'


const MenuItem = ({ label, subMenuSubtitle, items, children: icon }) => {

    const router = useRouter();
    const isMultiple = Array.isArray(items) && items.length > 1

    const goToRoute = (route) => {
        router.push(route)
    }

    return (
        isMultiple ? (
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={`#colapse${label}`}
                    aria-expanded="true" aria-controls={`colapse${label}`}>
                    <i>
                        {icon}
                    </i>
                    <span>{label}</span>
                </a>
                <div id={`colapse${label}`} className="collapse" aria-labelledby={`headingTwo${label}`} data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{subMenuSubtitle} </h6>
                        {items.map((child, i) => <Item key={`${child.label}${i}`} className="collapse-item" onClick={() => goToRoute(child.route)} icon={child.icon} label={child.label} />)}
                    </div>
                </div>
            </li>
        ) : (
            <li className="nav-item">
                {items.map((child, i) =>
                    <Item key={`${child.label}${i}`} className="nav-link" onClick={() => goToRoute(child.route)} icon={child.icon} label={child.label}>
                        {child.icon ? child.icon : icon}
                    </Item>
                )}
            </li>
        )

    )
}

const Item = ({ className, onClick, children: icon, label }) => {

    return (
        <a className={className} onClick={onClick} style={{
            cursor: "pointer"
        }}>
            <i>
                {icon}
            </i>
            <span> {label}</span >
        </a>
    )
}

{/* <li className="nav-item">
    <a className="nav-link" href="charts.html">
        <i>
            <FontAwesomeIcon icon={faChartArea} />
        </i>
        <span>Charts</span></a>
</li> */}

export default MenuItem
