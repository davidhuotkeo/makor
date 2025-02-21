function _0x1b1f() {
    const _0x4862c2 = [
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "Bearer\x20",
        "usd",
        "45crFYtW",
        "704075iRcFor",
        "data",
        "Payment\x20initialization\x20failed.\x20",
        "BakongKHQR",
        "2120776sjjvRV",
        "IndividualInfo",
        "553245gAOdoX",
        "items",
        "successUrl",
        "addEventListener",
        "href",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "Processing...",
        "cancelUrl",
        "6cWBVqS",
        "function",
        "19506320CLiboK",
        "834799QuvxfE",
        "https://makor.mioceen.com",
        "storeName",
        "referenceId",
        "Pay\x20Now",
        "8KSvVdz",
        "227974tRzYth",
        "json",
        "USD",
        "makor-payment",
        "Payment\x20failed:\x20",
        "khqrData",
        "currency",
        "message",
        "click",
        "price",
        "textContent",
        "stringify",
        "location",
        "POST",
        "generateIndividual",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "md5",
        "1066864YEjaTy",
    ];
    _0x1b1f = function () {
        return _0x4862c2;
    };
    return _0x1b1f();
}
function _0x1907(_0x32578d, _0x6ddced) {
    const _0x1b1fc7 = _0x1b1f();
    return (
        (_0x1907 = function (_0x1907af, _0x54806d) {
            _0x1907af = _0x1907af - 0x80;
            let _0x331b76 = _0x1b1fc7[_0x1907af];
            return _0x331b76;
        }),
        _0x1907(_0x32578d, _0x6ddced)
    );
}
(function (_0x3f5227, _0x2b0c81) {
    const _0x7c7514 = _0x1907,
        _0x411ea1 = _0x3f5227();
    while (!![]) {
        try {
            const _0x367514 =
                parseInt(_0x7c7514(0xa0)) / 0x1 +
                (-parseInt(_0x7c7514(0x9f)) / 0x2) *
                    (parseInt(_0x7c7514(0x8f)) / 0x3) +
                -parseInt(_0x7c7514(0x8d)) / 0x4 +
                (parseInt(_0x7c7514(0x89)) / 0x5) *
                    (parseInt(_0x7c7514(0x97)) / 0x6) +
                parseInt(_0x7c7514(0x9a)) / 0x7 +
                (parseInt(_0x7c7514(0x84)) / 0x8) *
                    (-parseInt(_0x7c7514(0x88)) / 0x9) +
                parseInt(_0x7c7514(0x99)) / 0xa;
            if (_0x367514 === _0x2b0c81) break;
            else _0x411ea1["push"](_0x411ea1["shift"]());
        } catch (_0x34c0ff) {
            _0x411ea1["push"](_0x411ea1["shift"]());
        }
    }
})(_0x1b1f, 0x7b0e2),
    (function () {
        window["Makor"] = function (_0xda06d1, _0x3b4673) {
            const _0x32b7bc = _0x1907;
            _0xda06d1 = _0xda06d1 || _0x32b7bc(0x9b);
            if (!_0x3b4673)
                throw new Error(
                    "Token\x20is\x20required\x20to\x20initialize\x20Makor."
                );
            this["initPayment"] = function (_0x5572fe) {
                const _0x2dbcdb = _0x32b7bc;
                if (
                    !_0x5572fe[_0x2dbcdb(0x9c)] ||
                    !_0x5572fe[_0x2dbcdb(0xa6)] ||
                    !_0x5572fe[_0x2dbcdb(0x91)] ||
                    !_0x5572fe["cancelUrl"] ||
                    !_0x5572fe[_0x2dbcdb(0x90)]
                )
                    throw new Error(_0x2dbcdb(0x82));
                let _0xd40411 = 0x0;
                for (const _0x31e739 of _0x5572fe[_0x2dbcdb(0x90)]) {
                    if (
                        !_0x31e739["name"] ||
                        !_0x31e739["quantity"] ||
                        !_0x31e739[_0x2dbcdb(0xa9)]
                    )
                        throw new Error(
                            "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price."
                        );
                    _0xd40411 +=
                        _0x31e739["quantity"] * _0x31e739[_0x2dbcdb(0xa9)];
                }
                const _0x34bdec = document["getElementById"](_0x2dbcdb(0xa3));
                if (!_0x34bdec) throw new Error(_0x2dbcdb(0x94));
                const _0xf66039 = new BakongKHQR[_0x2dbcdb(0x8c)](),
                    _0x3c7541 = BakongKHQR[_0x2dbcdb(0xa5)],
                    _0x3e165d = {
                        currency:
                            _0x5572fe[_0x2dbcdb(0xa6)] == _0x2dbcdb(0xa2)
                                ? _0x3c7541[_0x2dbcdb(0xa6)][_0x2dbcdb(0x87)]
                                : _0x3c7541["currency"]["khr"],
                        amount: _0xd40411,
                    },
                    _0x566d2f = new BakongKHQR[_0x2dbcdb(0x8e)](
                        "dave@pras",
                        _0x5572fe[_0x2dbcdb(0x9c)],
                        "PHNOM\x20PENH",
                        _0x3e165d
                    ),
                    _0x44daea = _0xf66039[_0x2dbcdb(0x81)](_0x566d2f),
                    _0x2ed01e = _0x44daea[_0x2dbcdb(0x8a)]["qr"],
                    _0xd4b664 = _0x44daea[_0x2dbcdb(0x8a)][_0x2dbcdb(0x83)];
                _0x34bdec[_0x2dbcdb(0x92)](_0x2dbcdb(0xa8), async () => {
                    const _0x3f2dd7 = _0x2dbcdb;
                    (_0x34bdec["disabled"] = !![]),
                        (_0x34bdec[_0x3f2dd7(0xaa)] = _0x3f2dd7(0x95));
                    try {
                        const _0x13a249 = await fetch(
                            _0xda06d1 + "/payment/init",
                            {
                                method: _0x3f2dd7(0x80),
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: _0x3f2dd7(0x86) + _0x3b4673,
                                },
                                body: JSON[_0x3f2dd7(0xab)]({
                                    storeName: _0x5572fe["storeName"],
                                    currency: _0x5572fe[_0x3f2dd7(0xa6)],
                                    qrcode: _0x2ed01e,
                                    md5: _0xd4b664,
                                    items: _0x5572fe[_0x3f2dd7(0x90)],
                                    amount: _0xd40411,
                                }),
                            }
                        );
                        if (!_0x13a249["ok"]) throw new Error(_0x3f2dd7(0x85));
                        const _0x4c6f4e = await _0x13a249[_0x3f2dd7(0xa1)]();
                        if (
                            _0x4c6f4e["errorCode"] === 0x0 &&
                            _0x4c6f4e[_0x3f2dd7(0x8a)] &&
                            _0x4c6f4e["data"][_0x3f2dd7(0x9d)]
                        ) {
                            const _0x7c92e7 =
                                    _0x4c6f4e[_0x3f2dd7(0x8a)][_0x3f2dd7(0x9d)],
                                _0x355e06 =
                                    typeof _0x5572fe[_0x3f2dd7(0x91)] ===
                                    "function"
                                        ? _0x5572fe[_0x3f2dd7(0x91)](_0x7c92e7)
                                        : _0x5572fe["successUrl"];
                            window[_0x3f2dd7(0xac)][_0x3f2dd7(0x93)] =
                                _0x355e06;
                        } else
                            throw new Error(
                                _0x3f2dd7(0x8b) + _0x4c6f4e[_0x3f2dd7(0xa7)]
                            );
                    } catch (_0x6e3ba7) {
                        console["error"]("Error:", _0x6e3ba7["message"]),
                            alert(_0x3f2dd7(0xa4) + _0x6e3ba7[_0x3f2dd7(0xa7)]);
                        const _0x12323a =
                            typeof _0x5572fe[_0x3f2dd7(0x96)] ===
                            _0x3f2dd7(0x98)
                                ? _0x5572fe[_0x3f2dd7(0x96)]()
                                : _0x5572fe["cancelUrl"];
                        window[_0x3f2dd7(0xac)][_0x3f2dd7(0x93)] = _0x12323a;
                    } finally {
                        (_0x34bdec["disabled"] = ![]),
                            (_0x34bdec["textContent"] = _0x3f2dd7(0x9e));
                    }
                });
            };
        };
    })();
