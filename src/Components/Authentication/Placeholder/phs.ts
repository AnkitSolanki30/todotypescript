var phsFunction = {

const InputElement: any = document.getElementById('my-input')
const suffixElement = document.getElementById('my-suffix')


function updateSuffix() {
    const width = getTextWidth(inputElement.value, '12px arial');
    suffixElement.style.left = width + 'px';
}

inputElement.addEventListener('input', updateSuffix());

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */

 function getTextWidth(text: string, font: string) {
    // re-use canvas object for better performance
    var canvas: any = getTextWidth || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics: any = context.measureText(text);
    return metrics.width;
}
}

export default phsFunction;

function updateSuffix() {
    throw new Error("Function not implemented.");
}
