
/**
 * Represents common file utility functions
 * @author Nishma Shah
 * @version 1.0.0
 */
export const generateUniqueArray = () => {
    var arr = [];
    while(arr.length < 6){
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}
