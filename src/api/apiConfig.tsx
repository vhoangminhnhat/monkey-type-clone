export const PATHS = {
    QUOTES: getPaths('/quotes'),
    WORDS: getPaths('/words')
};

console.log(process.env.NEXT_BASE_URL)

function getPaths(path:string){
    return `${process.env.NEXT_BASE_URL}/api${path}`
};

export default PATHS;