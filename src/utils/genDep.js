function genDep(n) {
    let evaluation = "";
    switch (n) {
        case 0:
            evaluation = "سباحة";
            break;
        case 1:
            evaluation = "كرة قدم";
            break;
        case 2:
            evaluation = "كرة يد";
            break;

        default:
            break;
    }
    return evaluation;
}

export default genDep;
