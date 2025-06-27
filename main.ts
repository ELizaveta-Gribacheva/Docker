export function brackets(expr: string): boolean {
    let exprNew = expr.replace(/[^()/[\]{}]/g, '');
    let stack: string[] = [], c = "(){}[]";

    for (let char of exprNew) {
        if ("({[".includes(char)) {
            stack.push(c[c.indexOf(char) + 1]);
        } else if (")]}".includes(char) && stack.pop() !== char) {
            return false;
        }
    }
    return stack.length === 0;
}