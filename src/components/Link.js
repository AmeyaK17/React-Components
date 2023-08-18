import useNavigation from "../hooks/useNavigation"
import classNames from "classnames"

function Link({children, to, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation()

    const classes = classNames(
        'text-blue-500', 
        className,
        to === currentPath && activeClassName
    )

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return
        }
        event.preventDefault()

        navigate(to)
    }

    return(
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    )
}

export default Link