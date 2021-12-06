"use strict";
// Enum
// Biasa digunakan untuk menyimpan data konstan dalam level aplikasi
// numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
console.log(Month.MAR);
// String Enums
var MonthString;
(function (MonthString) {
    MonthString["JAN"] = "Januari";
    MonthString["FEB"] = "Februari";
    MonthString["MAR"] = "Maret";
    MonthString["APR"] = "April";
    MonthString["MAY"] = "Mei";
})(MonthString || (MonthString = {}));
console.log(MonthString.FEB);
