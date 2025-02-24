function _0x21c0(_0x34bda5, _0x486311) {
    const _0x553970 = _0x5539();
    return (
        (_0x21c0 = function (_0x21c0fb, _0x394f4a) {
            _0x21c0fb = _0x21c0fb - 0xa0;
            let _0x1020da = _0x553970[_0x21c0fb];
            return _0x1020da;
        }),
        _0x21c0(_0x34bda5, _0x486311)
    );
}
function _0x5539() {
    const _0xada50e = [
        "onInitSuccess",
        "Processing...",
        "4249017tmxOZa",
        "items",
        "initPayment",
        "IndividualInfo",
        "699128DIFMrx",
        "usd",
        "3880919mPgdIt",
        "Bearer\x20",
        "6368768iShygd",
        "2lSrkek",
        "Makor",
        "successUrl",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "Payment\x20failed:\x20",
        "error",
        "disabled",
        "application/json",
        "POST",
        "3669834IyetVo",
        "cancelUrl",
        "9QaXxfI",
        "generateIndividual",
        "name",
        "makor-payment",
        "md5",
        "errorCode",
        "https://makor.mioceen.com",
        "function",
        "click",
        "href",
        "referenceId",
        "data",
        "454587DXuqTW",
        "price",
        "message",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "storeName",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "location",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "/payment/init",
        "khr",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "quantity",
        "textContent",
        "callbackUrl",
        "currency",
        "477625EZTHsl",
        "Error:",
    ];
    _0x5539 = function () {
        return _0xada50e;
    };
    return _0x5539();
}
(function (_0x423b00, _0x56edc0) {
    const _0x43e0d4 = _0x21c0,
        _0x154341 = _0x423b00();
    while (!![]) {
        try {
            const _0x136179 =
                (parseInt(_0x43e0d4(0xb2)) / 0x1) *
                    (parseInt(_0x43e0d4(0xce)) / 0x2) +
                (-parseInt(_0x43e0d4(0xa6)) / 0x3) *
                    (-parseInt(_0x43e0d4(0xc9)) / 0x4) +
                -parseInt(_0x43e0d4(0xc1)) / 0x5 +
                parseInt(_0x43e0d4(0xa4)) / 0x6 +
                -parseInt(_0x43e0d4(0xcb)) / 0x7 +
                -parseInt(_0x43e0d4(0xcd)) / 0x8 +
                parseInt(_0x43e0d4(0xc5)) / 0x9;
            if (_0x136179 === _0x56edc0) break;
            else _0x154341["push"](_0x154341["shift"]());
        } catch (_0xe61fe8) {
            _0x154341["push"](_0x154341["shift"]());
        }
    }
})(_0x5539, 0x968c7),
    (function () {
        const _0x263f5a = _0x21c0;
        window[_0x263f5a(0xcf)] = function (_0x41ec57, _0x2a5fb0) {
            const _0x4345e5 = _0x263f5a;
            _0x41ec57 = _0x41ec57 || _0x4345e5(0xac);
            if (!_0x2a5fb0) throw new Error(_0x4345e5(0xb5));
            this[_0x4345e5(0xc7)] = function (_0x57ae20) {
                const _0xfa99a7 = _0x4345e5;
                if (
                    !_0x57ae20[_0xfa99a7(0xb6)] ||
                    !_0x57ae20[_0xfa99a7(0xc0)] ||
                    !_0x57ae20[_0xfa99a7(0xd0)] ||
                    !_0x57ae20[_0xfa99a7(0xa5)] ||
                    !_0x57ae20["items"]
                )
                    throw new Error(_0xfa99a7(0xd1));
                let _0x448f97 = 0x0;
                for (const _0x2ddb91 of _0x57ae20["items"]) {
                    if (
                        !_0x2ddb91[_0xfa99a7(0xa8)] ||
                        !_0x2ddb91[_0xfa99a7(0xbd)] ||
                        !_0x2ddb91[_0xfa99a7(0xb3)]
                    )
                        throw new Error(_0xfa99a7(0xb9));
                    _0x448f97 +=
                        _0x2ddb91[_0xfa99a7(0xbd)] * _0x2ddb91[_0xfa99a7(0xb3)];
                }
                const _0x570e23 = document["getElementById"](_0xfa99a7(0xa9));
                if (!_0x570e23) throw new Error(_0xfa99a7(0xbc));
                const _0x47054f = new BakongKHQR["BakongKHQR"](),
                    _0x5151ee = BakongKHQR["khqrData"],
                    _0x1d069e = {
                        currency:
                            _0x57ae20[_0xfa99a7(0xc0)] == "USD"
                                ? _0x5151ee[_0xfa99a7(0xc0)][_0xfa99a7(0xca)]
                                : _0x5151ee[_0xfa99a7(0xc0)][_0xfa99a7(0xbb)],
                        amount: _0x448f97,
                    },
                    _0xe7ea76 = new BakongKHQR[_0xfa99a7(0xc8)](
                        "dave@pras",
                        _0x57ae20[_0xfa99a7(0xb6)],
                        "PHNOM\x20PENH",
                        _0x1d069e
                    ),
                    _0x1d7098 = _0x47054f[_0xfa99a7(0xa7)](_0xe7ea76),
                    _0x4ea10d = _0x1d7098[_0xfa99a7(0xb1)]["qr"],
                    _0x219fce = _0x1d7098[_0xfa99a7(0xb1)][_0xfa99a7(0xaa)];
                _0x570e23["addEventListener"](_0xfa99a7(0xae), async () => {
                    const _0x4d0418 = _0xfa99a7;
                    (_0x570e23[_0x4d0418(0xa1)] = !![]),
                        (_0x570e23[_0x4d0418(0xbe)] = _0x4d0418(0xc4));
                    try {
                        const _0x329ac4 = await fetch(
                            _0x41ec57 + _0x4d0418(0xba),
                            {
                                method: _0x4d0418(0xa3),
                                headers: {
                                    "Content-Type": _0x4d0418(0xa2),
                                    Authorization: _0x4d0418(0xcc) + _0x2a5fb0,
                                },
                                body: JSON["stringify"]({
                                    storeName: _0x57ae20[_0x4d0418(0xb6)],
                                    currency: _0x57ae20[_0x4d0418(0xc0)],
                                    qrcode: _0x4ea10d,
                                    md5: _0x219fce,
                                    items: _0x57ae20[_0x4d0418(0xc6)],
                                    amount: _0x448f97,
                                    callbackUrl: _0x57ae20[_0x4d0418(0xbf)],
                                }),
                            }
                        );
                        if (!_0x329ac4["ok"]) throw new Error(_0x4d0418(0xb7));
                        const _0x5a69fb = await _0x329ac4["json"]();
                        if (
                            _0x5a69fb[_0x4d0418(0xab)] === 0x0 &&
                            _0x5a69fb["data"] &&
                            _0x5a69fb[_0x4d0418(0xb1)][_0x4d0418(0xb0)]
                        ) {
                            const _0xc7a383 =
                                _0x5a69fb[_0x4d0418(0xb1)][_0x4d0418(0xb0)];
                            typeof _0x57ae20[_0x4d0418(0xc3)] === "function" &&
                                _0x57ae20[_0x4d0418(0xc3)](_0xc7a383);
                            const _0x12a5c4 =
                                typeof _0x57ae20[_0x4d0418(0xd0)] ===
                                _0x4d0418(0xad)
                                    ? _0x57ae20["successUrl"](_0xc7a383)
                                    : _0x57ae20[_0x4d0418(0xd0)];
                            window[_0x4d0418(0xb8)][_0x4d0418(0xaf)] =
                                _0x12a5c4;
                        } else
                            throw new Error(
                                "Payment\x20initialization\x20failed.\x20" +
                                    _0x5a69fb["message"]
                            );
                    } catch (_0x1e491e) {
                        console[_0x4d0418(0xa0)](
                            _0x4d0418(0xc2),
                            _0x1e491e["message"]
                        ),
                            alert(_0x4d0418(0xd2) + _0x1e491e[_0x4d0418(0xb4)]);
                        const _0x8ead6c =
                            typeof _0x57ae20[_0x4d0418(0xa5)] === "function"
                                ? _0x57ae20[_0x4d0418(0xa5)]()
                                : _0x57ae20["cancelUrl"];
                        window[_0x4d0418(0xb8)][_0x4d0418(0xaf)] = _0x8ead6c;
                    } finally {
                        (_0x570e23["disabled"] = ![]),
                            (_0x570e23[_0x4d0418(0xbe)] = "Pay\x20Now");
                    }
                });
            };
        };
    })();
