import navigationEvent from "../components/const"

export function navegateFunction (href) {
  window.history.pushState({}, '', href)
  //crear evento personalizado para avisar que hemos cambiado la URL
  const navigateE = new Event(navigationEvent.pushState)
  window.dispatchEvent(navigateE)
}

export function Link ({target, to, ... props}){
    const handlerClick = (event) =>{

        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault();
            navegateFunction(to)
        }
    }

    return (
        <a onClick={handlerClick} href={to} target={target} {...props}></a>
    )
}

