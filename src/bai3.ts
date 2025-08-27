// Hàm tính trung bình từ mảng điểm
function tinhTrungBinh(scores: number[]): number {
    const tong = scores.reduce((acc, cur) => acc + cur, 0);
    return tong / scores.length;
}

// Hàm so sánh và in kết quả
function soSanhDoi(dolphins: number[], koalas: number[]) {
    const avgDolphins = tinhTrungBinh(dolphins);
    const avgKoalas = tinhTrungBinh(koalas);

    console.log(`Điểm trung bình Dolphins: ${avgDolphins.toFixed(2)}`);
    console.log(`Điểm trung bình Koalas:   ${avgKoalas.toFixed(2)}`);

    // Bonus: luật điểm tối thiểu 100
    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        console.log("🏆 Dolphins chiến thắng!");
    } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
        console.log("🏆 Koalas chiến thắng!");
    } else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
        console.log("🤝 Hai đội hòa nhau!");
    } else {
        console.log("❌ Không đội nào thắng cúp!");
    }

    console.log("------------------------------------\n");
}

// --- Test dữ liệu ---
// Data 1
console.log("Dữ liệu 1:");
soSanhDoi([96, 108, 89], [88, 91, 110]);

// Data Bonus 1
console.log("Dữ liệu Bonus 1:");
soSanhDoi([97, 112, 101], [109, 95, 123]);

// Data Bonus 2
console.log("Dữ liệu Bonus 2:");
soSanhDoi([97, 112, 101], [109, 95, 106]);
