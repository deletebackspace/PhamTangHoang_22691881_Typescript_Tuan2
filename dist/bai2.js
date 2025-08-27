"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm tính BMI
function tinhBMI(canNang, chieuCao) {
    return canNang / (chieuCao * chieuCao);
}
// Dữ liệu kiểm thử
var data = [
    { mark: { canNang: 78, chieuCao: 1.69 }, john: { canNang: 92, chieuCao: 1.95 } },
    { mark: { canNang: 95, chieuCao: 1.88 }, john: { canNang: 85, chieuCao: 1.76 } },
];
// Chạy kiểm thử cho từng bộ dữ liệu
data.forEach(function (test, index) {
    var bmiMark = tinhBMI(test.mark.canNang, test.mark.chieuCao);
    var bmiJohn = tinhBMI(test.john.canNang, test.john.chieuCao);
    console.log("--- D\u1EEF li\u1EC7u ki\u1EC3m th\u1EED ".concat(index + 1, " ---"));
    if (bmiMark > bmiJohn) {
        console.log("BMI c\u1EE7a Mark (".concat(bmiMark.toFixed(2), ") cao h\u01A1n John (").concat(bmiJohn.toFixed(2), ")!"));
    }
    else if (bmiJohn > bmiMark) {
        console.log("BMI c\u1EE7a John (".concat(bmiJohn.toFixed(2), ") cao h\u01A1n Mark (").concat(bmiMark.toFixed(2), ")!"));
    }
    else {
        console.log("C\u1EA3 Mark v\u00E0 John \u0111\u1EC1u c\u00F3 BMI b\u1EB1ng nhau (".concat(bmiMark.toFixed(2), ")!"));
    }
    console.log("------------------------------------\n");
});
