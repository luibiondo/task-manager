'use client'
interface IButton {
    children: string
    onClick: () => void
}

function Button({children, onClick,}: IButton) {
    return(
        <button onClick={onClick} className="bg-[#000] p-2 rounded-sm text-[#fff] bg-neutral-800 hover:bg-neutral-700">
            {children}
        </button>
    )
}

export { Button }