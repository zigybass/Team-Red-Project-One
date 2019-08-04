$(document).ready(function(){

    //Location API

    $("#locationIcon").on("click", function () {

        let ipAddress= ["4.101.220.2","210.101.220.234","89.90.67.89","38.101.220.234","220.101.220.234"];

        for(let i=0; i<ipAddress.length; i++) {
        let queryURL ="http://ip-api.com/json/"+ipAddress[i]+"?fields=country,countryCode,city";

         $.ajax({
            url: queryURL,
            method: "GET"
         }).then(function(response) {
            
            console.log(response);

            let cityName = response.city;

            console.log(cityName)
            $("#cityName").html("<h3>Welcome to "+cityName+"</h3>");

         }).catch(function(error){
             console.log(error)
         })
        }
         
     });

    // Currency Exchange API ------------------------------------------
    

    // Builds AJAX URL:
    const baseUrl = "https://openexchangerates.org/api/latest.json?";
    const apiId = "app_id=50c687c3304e40edbf02595e616bb76a";
    let currencyString = baseUrl + apiId;


    let userCountryCode;
    let targetCurrencyCode;
  //AJAX request for daily currency exchange rates.
    $.ajax({
        url: currencyString,
        method: "GET",
    }).then(function (response) {
        userCountryCode = response.rates.USD;


    // AJAX request data for exchange rates. All rates are compared to USD. (Basically hard data that I used because I didn't have real input data)
     let exchangeRatios = { AED: 3.672978,
    AFN: 78.9545,
    ALL: 109.175,
    AMD: 475.894023,
    ANG: 1.785302,
    AOA: 351.876,
    ARS: 44.295,
    AUD: 1.471229,
    AWG: 1.799996,
    AZN: 1.7025,
    BAM: 1.766461,
    BBD: 2,
    BDT: 84.510268,
    BGN: 1.764405,
    BHD: 0.377013,
    BIF: 1844.286476,
    BMD: 1,
    BND: 1.350597,
    BOB: 6.916225,
    BRL: 3.8404,
    BSD: 1,
    BTC: 0.000095971749,
    BTN: 69.082211,
    BWP: 10.801378,
    BYN: 2.046549,
    BZD: 2.016106,
    CAD: 1.321153,
    CDF: 1659.888609,
    CHF: 0.990489,
    CLF: 0.024777,
    CLP: 706.694441,
    CNH: 6.958379,
    CNY: 6.898698,
    COP: 3266.355979,
    CRC: 571.808864,
    CUC: 1,
    CUP: 25.75,
    CVE: 99.29975,
    CZK: 23.274386,
    DJF: 178.05,
    DKK: 6.737286,
    DOP: 51.1975,
    DZD: 120.041975,
    EGP: 16.5785,
    ERN: 14.999624,
    ETB: 29.05,
    EUR: 0.90225,
    FJD: 2.163204,
    FKP: 0.825133,
    GBP: 0.825133,
    GEL: 2.95,
    GGP: 0.825133,
    GHS: 5.383593,
    GIP: 0.825133,
    GMD: 49.98,
    GNF: 9202.889502,
    GTQ: 7.681465,
    GYD: 208.654182,
    HKD: 7.82619,
    HNL: 24.660007,
    HRK: 6.6618,
    HTG: 94.716052,
    HUF: 295.236667,
    IDR: 14114.052433,
    ILS: 3.5098,
    IMP: 0.825133,
    INR: 69.3075,
    IQD: 1189.75,
    IRR: 42105,
    ISK: 122.989929,
    JEP: 0.825133,
    JMD: 135.628777,
    JOD: 0.709003,
    JPY: 107.32759381,
    KES: 103.26,
    KGS: 69.626901,
    KHR: 4080,
    KMF: 442.29616,
    KPW: 900,
    KRW: 1195.42,
    KWD: 0.304653,
    KYD: 0.833515,
    KZT: 385.279473,
    LAK: 8705,
    LBP: 1508.983024,
    LKR: 176.798097,
    LRD: 202.849957,
    LSL: 14.21,
    LYD: 1.40481,
    MAD: 9.642911,
    MDL: 17.826989,
    MGA: 3667.011968,
    MKD: 55.748404,
    MMK: 1512.854519,
    MNT: 2663.908423,
    MOP: 8.061371,
    MRO: 357,
    MRU: 36.795,
    MUR: 36.2485,
    MVR: 15.400026,
    MWK: 743.991248,
    MXN: 19.236883,
    MYR: 4.145509,
    MZN: 61.335969,
    NAD: 14.21,
    NGN: 360,
    NIO: 33.52,
    NOK: 8.89459,
    NPR: 110.538214,
    NZD: 1.524561,
    OMR: 0.385011,
    PAB: 1,
    PEN: 3.314892,
    PGK: 3.377,
    PHP: 51.264963,
    PKR: 160.667368,
    PLN: 3.886519,
    PYG: 5993.608665,
    QAR: 3.640804,
    RON: 4.275893,
    RSD: 106.217331,
    RUB: 64.3071,
    RWF: 916.405181,
    SAR: 3.751,
    SBD: 8.207869,
    SCR: 13.68551,
    SDG: 45.126924,
    SEK: 9.661324,
    SGD: 1.37742,
    SHP: 0.825133,
    SLL: 7156.043409,
    SOS: 579.163614,
    SRD: 7.458,
    SSP: 130.26,
    STD: 21560.79,
    STN: 22.075,
    SVC: 8.752031,
    SYP: 516.60993,
    SZL: 14.21,
    THB: 30.9,
    TJS: 9.432056,
    TMT: 3.50998,
    TND: 2.891601,
    TOP: 2.297876,
    TRY: 5.615119,
    TTD: 6.7696,
    TWD: 31.326928,
    TZS: 2299.008511,
    UAH: 25.397449,
    UGX: 3700.713748,
    USD: 1,
    UYU: 34.347441,
    UZS: 8661.571715,
    VEF: 248487.642241,
    VES: 11251.072811,
    VND: 23101.661374,
    VUV: 115.761388,
    WST: 2.629653,
    XAF: 591.837072,
    XAG: 0.06126888,
    XAU: 0.00069146,
    XCD: 2.70255,
    XDR: 0.729538,
    XOF: 591.837072,
    XPD: 0.00070079,
    XPF: 107.66704,
    XPT: 0.00117372,
    YER: 250.349279,
    ZAR: 14.67079,
    ZMW: 12.877607,
    ZWL: 322.000001,
    } 

    // 2-letter country ID matched to corresponding currency.
    const countryIdToCurrencyId = {
        AD:"EUR",
        AE: "AED",
        AF: "AFN",
        AG: "XCD",
        AI: "XCD",
        AL: "ALL",
        AM: "AMD",
        AN: "ANG",
        AO: "AOA",
        AQ: "AQD",
        AR: "ARS",
        AS: "EUR",
        AT: "EUR",
        AU: "AUD",
        AW: "ANG",
        AX: "EUR",
        AZ: "AZN",
        BA: "BAM",
        BB: "BBD",
        BD: "BDT",
        BE: "EUR",
        BF: "XOF",
        BG: "BGN",
        BH: "BHD",
        BI: "BIF",
        BJ: "XOF",
        BL: "EUR",
        BM: "BMD",
        BN: "BND",
        BO: "BOB",
        BR: "BRL",
        BS: "BSD",
        BT: "INR",
        BV: "NOK",
        BW: "BWP",
        BY: "BYR",
        BZ: "BZD",
        CA: "CAD",
        CC: "AUD",
        CD: "CDF",
        CF: "XAF",
        CG: "XAF",
        CH: "CHF",
        CI: "XOF",
        CK: "NZD",
        CL: "CLP",
        CM: "XAF",
        CN: "CNY",
        CO: "COP",
        CR: "CRC",
        CU: "CUP",
        CV: "CVE",
        CX: "AUD",
        CY: "CYP",
        CZ: "CZK",
        DE: "EUR",
        DJ: "DJF",
        DK: "DKK",
        DM: "XCD",
        DO: "DOP",
        DZ: "DZD",
        EC: "ECS",
        EE: "EEK",
        EG: "EGP",
        EH: "MAD",
        ER: "ETB",
        ES: "EUR",
        ET: "ETB",
        FI: "EUR",
        FJ: "FJD",
        FK: "FKP",
        FM: "USD",
        FO: "DKK",
        FR: "EUR",
        GA: "XAF",
        GB: "GBP",
        GD: "XCD",
        GE: "GEL",
        GF: "EUR",
        GG: "GGP",
        GH: "GHS",
        GI: "GIP",
        GL: "DKK",
        GM: "GMD",
        GN: "GNF",
        GP: "EUR",
        GQ: "XAF",
        GR: "EUR",
        GS: "GBP",
        GT: "GTQ",
        GU: "USD",
        GW: "XOF",
        GY: "GYD",
        HK: "HKD",
        HM: "AUD",
        HN: "HNL",
        HR: "HRK",
        HT: "HTG",
        HU: "HUF",
        ID: "IDR",
        IE: "EUR",
        IL: "ILS",
        IM: "GBP",
        IN: "INR",
        IO: "USD",
        IQ: "IQD",
        IR: "IRR",
        IS: "ISK",
        IT: "EUR",
        JE: "GBP",
        JM: "JMD",
        JO: "JOD",
        JP: "JPY",
        KE: "KES",
        KG: "KGS",
        KH: "KHR",
        KI: "AUD",
        KM: "KMF",
        KN: "XCD",
        KP: "KPW",
        KR: "KRW",
        KW: "KWD",
        KY: "KYD",
        KZ: "KZT",
        LA: "LAK",
        LB: "LBP",
        LC: "XCD",
        LI: "CHF",
        LK: "LKR",
        LR: "LRD",
        LS: "LSL",
        LT: "LTL",
        LU: "EUR",
        LV: "LVL",
        LY: "LYD",
        MA: "MAD",
        MC: "EUR",
        MD: "MDL",
        ME: "EUR",
        MF: "ANG",
        MG: "MGA",
        MH: "USD",
        MK: "MKD",
        ML: "XOF",
        MM: "MMK",
        MN: "MNT",
        MO: "MOP",
        MP: "USD",
        MQ: "EUR",
        MR: "MRO",
        MS: "XCD",
        MT: "MTL",
        MU: "MUR",
        MV: "MVR",
        MW: "MWK",
        MX: "MXN",
        MY: "MYR",
        MZ: "MZN",
        NA: "NAD",
        NC: "XPF",
        NE: "XOF",
        NF: "AUD",
        NG: "NGN",
        NI: "NIO",
        NL: "EUR",
        NO: "NOK",
        NP: "NPR",
        NR: "AUD",
        NU: "NZD",
        NZ: "NZD",
        OM: "OMR",
        PA: "PAB",
        PE: "PEN",
        PF: "XPF",
        PG: "PGK",
        PH: "PHP",
        PK: "PKR",
        PL: "PLN",
        PM: "EUR",
        PN: "NZD",
        PR: "USD",
        PS: "JOD",
        PT: "EUR",
        PW: "USD",
        PY: "PYG",
        QA: "QAR",
        RE: "EUR",
        RO: "RON",
        RS: "RSD",
        RU: "RUB",
        RW: "RWF",
        SA: "SAR",
        SB: "SBD",
        SC: "SCR",
        SD: "SDG",
        SE: "SEK",
        SG: "SGD",
        SH: "GBP",
        SI: "EUR",
        SJ: "NOK",
        SK: "SKK",
        SL: "SLL",
        SM: "EUR",
        SN: "XOF",
        SO: "SOS",
        SR: "SRD",
        ST: "STD",
        SV: "SVC",
        SY: "SYP",
        SZ: "SZL",
        TC: "USD",
        TD: "XAF",
        TF: "EUR",
        TG: "XOF",
        TH: "THB",
        TJ: "TJS",
        TK: "NZD",
        TM: "TMT",
        TN: "TND",
        TO: "TOP",
        TP: "IDR",
        TR: "TRY",
        TT: "TTD",
        TV: "AUD",
        TW: "TWD",
        TZ: "TZS",
        UA: "UAH",
        UG: "UGX",
        UM: "USD",
        US: "USD",
        UY: "UYU",
        UZ: "UZS",
        VA: "EUR",
        VC: "XCD",
        VE: "VEF",
        VG: "USD",
        VI: "USD",
        VN: "VND",
        VU: "VUV",
        WF: "XPF",
        WS: "EUR",
        YE: "YER",
        YT: "EUR",
        ZA: "ZAR",
        ZM: "ZMK",
        ZW: "ZWD"
    }


    // Creates array of Currency IDs for form
    const currencyIdArray = Object.keys(response.rates);
    console.log(currencyIdArray);

    // Appends country IDs into dropdown for currency selections
    function dropdownCurr (arr) {
        for (let i = 0; i < arr.length; i++) {
            const aTag = $("<option>");
            aTag.text((arr[i]));
            $(".currency").append(aTag);
        }
    }
    dropdownCurr(currencyIdArray); 
    
    // Converts input country data to country's currency
    let countryId = "ES"; //this value should be equal to 2-Letter country code from IP-API or input box. 

    let countryCurr = countryIdToCurrencyId[countryId];
    console.log(countryCurr)
    let ratio = exchangeRatios[countryCurr];
    console.log(ratio);



// Converts USD to target Currency.
function currencyConverter (x, ratio) {
    return x * ratio;
};
// Converts target Currency back to USD
function flipConverter (x, ratio) {
    return x / ratio;
}

// WIP: converts currencies on click. Maybe Coti's performs better?
$("#convert").on("click", function () {
    let baseCurr = $("base").val();
    $("#target").text(currencyConverter(baseCurr, ratio));
});

$("#currSwitch").on("click", function () {
    let target = $("target").val();
    $("#base").text(flipConverter(target, ratio));
})



})
}); // end document */


