// generate unique id
export const getUUID = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


// bebounce the user handles
export function debounce (fun: Function, delay: number) {
    let timer: any
    return function (...props: any[]) {
        clearTimeout(timer)
        timer = null
        timer = setTimeout(() => {
            fun.apply(null, props)
        }, delay)
    }
}

/**
 * @example
 * // returns true - as date is in correct format
 * @param {any} date -  date is any type
 * isValidDate('03/05/2022');
 * @example
 * // returns false - as date is not in correct format
 * @param {any} date - date is any type
 * isValidDate('03/05/2022a');
 */
export const isValidDate = (date: any) => {
   return !isNaN(new Date(date).getTime())
}