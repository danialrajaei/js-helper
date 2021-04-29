import PipeTypes from "./pipe-types";
import minify from 'minify';
import beautify from 'js-beautify';

const base64Encode = (str) => {
    return btoa(str);
}

const base64Decode = (str) => {
    return atob(str);
}

const minifyAll = async (str) => {
    return await minify(str);
}

const beautifyAll = (str) => {
    return beautify(str);
}

const associatedFunc = (str, pipe) => {
    switch (pipe.type) {
        case PipeTypes.BASE64_ENCODE:
            return base64Encode(str);
        case PipeTypes.BASE64_DECODE:
            return base64Decode(str);
        case PipeTypes.MINIFY:
            return minifyAll(str);
        case PipeTypes.BEAUTIFY:
            return beautifyAll(str);
        default:
            return str;
    }
}

function process(input, pipes) {
    let output = input;
    return pipes.filter(p => p.type !== PipeTypes.INPUT).map((p) => {
        output = associatedFunc(output, p);
        return {
            ...p,
            output
        };
    });
}

export default process;