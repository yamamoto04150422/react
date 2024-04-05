import React, { MouseEventHandler, memo } from "react"

type Props = {
    open: boolean
    onClose: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Callback:React.FC<Props> = memo(({open, onClose}) => {
    
    const data = Array.from({ length: 3000}, (_, i:number) => ({
        id:i
    }))
    data.forEach(() =>{
        console.log("///")
    })

    return (
        <>
            {open && 
                <>
                    <div>callbackの検証です。開きました</div>
                    <div>closeのcallbackを外すと関数が毎回生成されmemo化をしても遅くなる</div>
                    <button onClick={onClose}>閉じる</button>
                </>
            }
        </>
    )
},)