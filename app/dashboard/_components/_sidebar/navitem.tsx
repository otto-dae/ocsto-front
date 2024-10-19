import Link from "next/link";

interface NavItemProps{
    icon: JSX.Element
    path: string
}


const NavItem = ({ icon, path}: NavItemProps) => {
    return (
        <Link href={path}>
            {icon}
        </Link>
        
    )
}

export default NavItem;