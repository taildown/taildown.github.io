import React from 'react'

interface BarButtonProps {
  label: JSX.Element
  onClick: () => void
  active?: boolean
  disabled?: boolean
}

const BarButton: React.FC<BarButtonProps> = ({ label, onClick, active, disabled }) => {
  return (
        <button
            className={`h-10 min-h-[40px] px-3 py-2 text-gray-600
             hover:bg-gray-100 transition rounded 
             focus:bg-gray-100 focus:outline-none focus:shadow-inner
            ${active !== null && active !== undefined && active && 'bg-gray-100 shadow-inner'} 
            ${disabled !== null && disabled !== undefined && disabled && 'opacity-40 cursor-not-allowed'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
  )
}

export default BarButton
