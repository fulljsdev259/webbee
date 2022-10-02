export const getUUID = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

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