// Hàm tính BMI
function tinhBMI(canNang: number, chieuCao: number): number {
    return canNang / (chieuCao * chieuCao);
}

// Dữ liệu kiểm thử
const data = [
    { mark: { canNang: 78, chieuCao: 1.69 }, john: { canNang: 92, chieuCao: 1.95 } },
    { mark: { canNang: 95, chieuCao: 1.88 }, john: { canNang: 85, chieuCao: 1.76 } },
];

// Chạy kiểm thử cho từng bộ dữ liệu
data.forEach((test, index) => {
    const bmiMark = tinhBMI(test.mark.canNang, test.mark.chieuCao);
    const bmiJohn = tinhBMI(test.john.canNang, test.john.chieuCao);

    const markHigherBMI = bmiMark > bmiJohn;

    console.log(`--- Dữ liệu kiểm thử ${index + 1} ---`);
    console.log(`BMI của Mark: ${bmiMark.toFixed(2)}`);
    console.log(`BMI của John: ${bmiJohn.toFixed(2)}`);
    console.log(`Mark có BMI cao hơn John? ${markHigherBMI ? "Có" : "Không"}`);
    console.log("------------------------------------\n");
});
