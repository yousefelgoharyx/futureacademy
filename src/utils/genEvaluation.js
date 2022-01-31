function genEvaluation(n) {
    let evaluation = "";
    switch (n) {
        case 0:
            evaluation = "ممتاز";
            break;
        case 1:
            evaluation = "جيد جدا";
            break;
        case 2:
            evaluation = "جيد";
            break;
        case 3:
            evaluation = "مقبول";
            break;

        default:
            break;
    }
    return evaluation;
}

export default genEvaluation;
