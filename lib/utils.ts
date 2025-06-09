import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//  ensure we dont have conflicting tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
