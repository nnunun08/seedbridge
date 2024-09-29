flatpickr.localize(flatpickr.l10ns.ko);
flatpickr(".flatpickr", {
    // mode: "range",
    monthNumbers: true,
    dateFormat: "Y-m-d",
    conjunction: " ~ ",
    locale: {
        months: { // 이거 넣어줘야 Numember=>11로 표시
            shorthand: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            longhand: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        }
    }
});
flatpickr(".flatpickrRange", {
    mode: "range",
    monthNumbers: true,
    dateFormat: "Y-m-d",
    conjunction: " ~ ",
    locale: {
        months: { // 이거 넣어줘야 Numember=>11로 표시
            shorthand: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            longhand: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        }
    }
});