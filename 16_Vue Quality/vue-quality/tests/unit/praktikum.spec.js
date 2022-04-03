import { Penjumlahan, Pengurangan, Pembagian, Perkalian, average, sisaBagi, luasPersegi, luasLingkaran, luasKubus, volumeKubus } from "@/utils/commonUtils.js";

describe("Melakukan Penjumlahan", () => {
    test("Penjumlahan dua bilangan positif", () => {
        expect(Penjumlahan(2,4)).toBe(6);
    });
    test("Penjumlahan dua bilangan negatif", () => {
        expect(Penjumlahan(-10,-2)).toBe(-12);
    });
});

describe("Melakukan Pengurangan", () => {
    test("Pengurangan dua bilangan positif", () => {
        expect(Pengurangan(5,3)).toBe(2);
    });
    test("Pengurangan dua bilangan negatif", () => {
        expect(Pengurangan(-4,-6)).toBe(2);
    });
});

describe("Melakukan Pembagian", () => {
    test("Pembagian dua bilangan negatif", () => {
        expect(Pembagian(-15,-3)).toBe(5);
    });
    test("Pembagian dua bilangan positif", () => {
        expect(Pembagian(20,4)).toBe(5);
    });
});

describe("Melakukan Perkalian", () => {
    test("Perkalian dua bilangan negatif", () => {
        expect(Perkalian(-15,-3)).toBe(45);
    });
    test("Perkalian dua bilangan positif", () => {
        expect(Perkalian(15,3)).toBe(45);
    });
});

describe("Melakukan average", () => {
    test("average dua bilangan negatif", () => {
        expect(average(-10,-20,-2, -3, -4)).toBeNaN;
    });
    test("average dua bilangan positif", () => {
        expect(average(5, 8, 2, 10, 20)).toBe(7.5);
    });
    test("average dua bilangan non numerik", () => {
        expect(average("10","20","4","7", "9")).toBe(255);
    });
    test("average dua bilangan not to be", () => {
        expect(average(6, 8, 4, 3,2)).not.toBe(3);
    });
});

describe("Melakukan sisaBagi", () => {
    test("sisaBagi dua bilangan positif", () => {
        expect(sisaBagi(7,3)).toBe(1);
    });
    test("sisaBagi dua bilangan non numerik", () => {
        expect(sisaBagi("9","3")).toBe(0);
    });
});

describe("Melakukan luasPersegi", () => {
    test("luasPersegi dua bilangan positif", () => {
        expect(luasPersegi(7,3)).toBe(21);
    });
    test("luasPersegi dua bilangan non numerik", () => {
        expect(luasPersegi("9","3")).toBe(27);
    });
});

describe("Melakukan luas Lingkaran", () => {
    test("luasLingkaran dua bilangan positif", () => {
        expect(luasLingkaran(1,1)).toBe(3.14);
    });
    test("luasLingkaran dua bilangan negatif", () => {
        expect(luasLingkaran(-1,-1)).toBe(3.14);
    });
});

describe("Melakukan luas Kubus", () => {
    test("luas kubus dua bilangan positif", () => {
        expect(luasKubus(6,1,1)).toBe(6);
    });
    test("luasLingkaran dua bilangan negatif", () => {
        expect(luasKubus(6,-1,-1)).toBe(6);
    });
    test("luasLingkaran dua bilangan non numerik", () => {
        expect(luasKubus("6","-1","-1")).toBe(6);
    });
});

describe("Melakukan volume Kubus", () => {
    test("volume Kubus dua bilangan positif", () => {
        expect(volumeKubus(6,1,1)).toBe(6);
    });
    test("volume Kubus dua bilangan negatif", () => {
        expect(volumeKubus(6,-1,-1)).toBe(6);
    });
    test("volume Kubus dua bilangan non numerik", () => {
        expect(volumeKubus("6","-1","-1")).toBe(6);
    });
});