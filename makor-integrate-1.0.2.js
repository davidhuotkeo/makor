function _0x22fc(_0x5a2ef6, _0x56c34c) {
    const _0x2143e8 = _0x2143();
    return (
        (_0x22fc = function (_0x22fc40, _0xa9f349) {
            _0x22fc40 = _0x22fc40 - 0xe1;
            let _0x8b9992 = _0x2143e8[_0x22fc40];
            return _0x8b9992;
        }),
        _0x22fc(_0x5a2ef6, _0x56c34c)
    );
}
function _0x2143() {
    const _0x15c274 = [
        "10irBdjQ",
        "72PIRcsK",
        "click",
        "textContent",
        "json",
        "cancelUrl",
        "currency",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "message",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "error",
        "disabled",
        "Processing...",
        "onInitSuccess",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "href",
        "data",
        "referenceId",
        "price",
        "quantity",
        "dave@pras",
        "application/json",
        "205045wjNLsz",
        "items",
        "IndividualInfo",
        "callbackUrl",
        "https://makor.mioceen.com",
        "usd",
        "127520CWEVoh",
        "successUrl",
        "storeName",
        "md5",
        "makor-payment",
        "Payment\x20failed:\x20",
        "addEventListener",
        "/payment/checkout/",
        "28444enVXuo",
        "khqrData",
        "initPayment",
        "location",
        "Makor",
        "4380134rDmNOr",
        "6kgSgeE",
        "name",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "BakongKHQR",
        "1013586nyZVzo",
        "236752reaShP",
        "242250KaLQFF",
        "/payment/init",
        "PHNOM\x20PENH",
        "Pay\x20Now",
        "stringify",
        "6TlMyGt",
        "Payment\x20initialization\x20failed.\x20",
        "khr",
        "getElementById",
    ];
    _0x2143 = function () {
        return _0x15c274;
    };
    return _0x2143();
}
(function (_0x1b3099, _0x10e822) {
    const _0x5480e4 = _0x22fc,
        _0x3c9759 = _0x1b3099();
    while (!![]) {
        try {
            const _0x49dc77 =
                -parseInt(_0x5480e4(0xeb)) / 0x1 +
                (-parseInt(_0x5480e4(0x119)) / 0x2) *
                    (-parseInt(_0x5480e4(0xf0)) / 0x3) +
                -parseInt(_0x5480e4(0xea)) / 0x4 +
                parseInt(_0x5480e4(0x10b)) / 0x5 +
                (parseInt(_0x5480e4(0xe5)) / 0x6) *
                    (-parseInt(_0x5480e4(0xe9)) / 0x7) +
                (-parseInt(_0x5480e4(0x111)) / 0x8) *
                    (-parseInt(_0x5480e4(0xf5)) / 0x9) +
                (-parseInt(_0x5480e4(0xf4)) / 0xa) *
                    (-parseInt(_0x5480e4(0xe4)) / 0xb);
            if (_0x49dc77 === _0x10e822) break;
            else _0x3c9759["push"](_0x3c9759["shift"]());
        } catch (_0x263e42) {
            _0x3c9759["push"](_0x3c9759["shift"]());
        }
    }
})(_0x2143, 0x245c3),
    (function () {
        const _0x29de40 = _0x22fc;
        window[_0x29de40(0xe3)] = function (_0x35b103, _0x11bc43) {
            const _0x4a2d15 = _0x29de40;
            _0x35b103 = _0x35b103 || _0x4a2d15(0x10f);
            if (!_0x11bc43) throw new Error(_0x4a2d15(0xfe));
            this[_0x4a2d15(0xe1)] = function (_0x50ae07) {
                const _0x5df07d = _0x4a2d15;
                if (
                    !_0x50ae07[_0x5df07d(0x113)] ||
                    !_0x50ae07[_0x5df07d(0xfa)] ||
                    !_0x50ae07[_0x5df07d(0x112)] ||
                    !_0x50ae07[_0x5df07d(0xf9)] ||
                    !_0x50ae07[_0x5df07d(0x10c)]
                )
                    throw new Error(_0x5df07d(0xfc));
                let _0x2db75a = 0x0;
                for (const _0x3c3e2a of _0x50ae07["items"]) {
                    if (
                        !_0x3c3e2a[_0x5df07d(0xe6)] ||
                        !_0x3c3e2a[_0x5df07d(0x108)] ||
                        !_0x3c3e2a[_0x5df07d(0x107)]
                    )
                        throw new Error(_0x5df07d(0xfb));
                    _0x2db75a +=
                        _0x3c3e2a[_0x5df07d(0x108)] *
                        _0x3c3e2a[_0x5df07d(0x107)];
                }
                const _0x2ef07e = document[_0x5df07d(0xf3)](_0x5df07d(0x115));
                if (!_0x2ef07e) throw new Error(_0x5df07d(0x103));
                const _0x4825c6 = new BakongKHQR[_0x5df07d(0xe8)](),
                    _0x4a6ecb = BakongKHQR[_0x5df07d(0x11a)],
                    _0x350a41 = {
                        currency:
                            _0x50ae07[_0x5df07d(0xfa)] == "USD"
                                ? _0x4a6ecb[_0x5df07d(0xfa)][_0x5df07d(0x110)]
                                : _0x4a6ecb[_0x5df07d(0xfa)][_0x5df07d(0xf2)],
                        amount: _0x2db75a,
                    },
                    _0x2a31e2 = new BakongKHQR[_0x5df07d(0x10d)](
                        _0x5df07d(0x109),
                        _0x50ae07[_0x5df07d(0x113)],
                        _0x5df07d(0xed),
                        _0x350a41
                    ),
                    _0x236087 = _0x4825c6["generateIndividual"](_0x2a31e2),
                    _0x54fed6 = _0x236087[_0x5df07d(0x105)]["qr"],
                    _0x2bac17 = _0x236087[_0x5df07d(0x105)][_0x5df07d(0x114)];
                _0x2ef07e[_0x5df07d(0x117)](_0x5df07d(0xf6), async () => {
                    const _0x2a2c18 = _0x5df07d;
                    (_0x2ef07e[_0x2a2c18(0x100)] = !![]),
                        (_0x2ef07e[_0x2a2c18(0xf7)] = _0x2a2c18(0x101));
                    try {
                        const _0x25a4e5 = await fetch(
                            _0x35b103 + _0x2a2c18(0xec),
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": _0x2a2c18(0x10a),
                                    Authorization: "Bearer\x20" + _0x11bc43,
                                },
                                body: JSON[_0x2a2c18(0xef)]({
                                    currency: _0x50ae07[_0x2a2c18(0xfa)],
                                    md5: _0x2bac17,
                                    qrcode: _0x54fed6,
                                    successUrl: _0x50ae07[_0x2a2c18(0x112)],
                                    cancelUrl: _0x50ae07[_0x2a2c18(0xf9)],
                                    storeName: _0x50ae07["storeName"],
                                    callbackUrl: _0x50ae07[_0x2a2c18(0x10e)],
                                    items: _0x50ae07["items"],
                                    amount: _0x2db75a,
                                }),
                            }
                        );
                        if (!_0x25a4e5["ok"]) throw new Error(_0x2a2c18(0xe7));
                        const _0x9428c9 = await _0x25a4e5[_0x2a2c18(0xf8)]();
                        if (
                            _0x9428c9["errorCode"] === 0x0 &&
                            _0x9428c9[_0x2a2c18(0x105)] &&
                            _0x9428c9[_0x2a2c18(0x105)]["referenceId"]
                        ) {
                            const _0x5062b3 =
                                _0x9428c9["data"][_0x2a2c18(0x106)];
                            typeof _0x50ae07["onInitSuccess"] === "function" &&
                                _0x50ae07[_0x2a2c18(0x102)](_0x5062b3);
                            const _0x15afad =
                                _0x35b103 + _0x2a2c18(0x118) + _0x5062b3;
                            window[_0x2a2c18(0xe2)][_0x2a2c18(0x104)] =
                                _0x15afad;
                        } else
                            throw new Error(
                                _0x2a2c18(0xf1) + _0x9428c9[_0x2a2c18(0xfd)]
                            );
                    } catch (_0x3e8916) {
                        console[_0x2a2c18(0xff)](
                            "Error:",
                            _0x3e8916[_0x2a2c18(0xfd)]
                        ),
                            alert(
                                _0x2a2c18(0x116) + _0x3e8916[_0x2a2c18(0xfd)]
                            );
                        const _0x389d6a =
                            typeof _0x50ae07[_0x2a2c18(0xf9)] === "function"
                                ? _0x50ae07[_0x2a2c18(0xf9)]()
                                : _0x50ae07["cancelUrl"];
                        window[_0x2a2c18(0xe2)][_0x2a2c18(0x104)] = _0x389d6a;
                    } finally {
                        (_0x2ef07e[_0x2a2c18(0x100)] = ![]),
                            (_0x2ef07e[_0x2a2c18(0xf7)] = _0x2a2c18(0xee));
                    }
                });
            };
        };
    })();
