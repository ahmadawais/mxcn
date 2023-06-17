/**
 * Mxcn.
 *
 * Utility function to use both &#x60;clsx&#x60; and &#x60;tailwind-merge&#x60; in one go. Where class merging becomes a seamless dance, leaving style conflicts in the dust!
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export default cn;
