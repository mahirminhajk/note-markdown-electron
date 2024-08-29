import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

//TODO: try to get this from the system
const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Asia/Kolkata'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
