import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'Note Title'
  return (
    <div className="w-[100%] fixed">
      <div className={twMerge('bg-black/20', className)} {...props}>
        <span className="text-gray-400 pl-2">{title}</span>
      </div>
    </div>
  )
}
