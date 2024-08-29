// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Asia/Kolkata'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
