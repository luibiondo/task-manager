'use client'
interface IButton {
    children: string
    onClick: () => void
}

function Button({children, onClick}: IButton) {
    return(
        <button onClick={onClick} className="bg-[#000] p-2 rounded-sm text-[#fff]">
            {children}
        </button>
    )
}

export { Button }