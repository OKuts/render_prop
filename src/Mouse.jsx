import {useRef, useState} from "react";

export const Mouse = ({children}) => {
    const [data, setData] = useState({x: 0, y: 0})
    const ref = useRef()

    const mouseHandler = e => {
        const rect = ref.current.getBoundingClientRect()
        setData({x: e.clientX - rect.left, y: e.clientY - rect.top})
    }

    return <div
        className={'card'}
        onMouseMove={mouseHandler}
        ref={ref}
    >
        {children(data)}
    </div>
}

