function _0x422c(_0x1f0fca, _0x4a74d1) {
    const _0x4d756b = _0x4d75();
    return (
        (_0x422c = function (_0x422ca2, _0x1df5cc) {
            _0x422ca2 = _0x422ca2 - 0xc5;
            let _0x9b4bdb = _0x4d756b[_0x422ca2];
            return _0x9b4bdb;
        }),
        _0x422c(_0x1f0fca, _0x4a74d1)
    );
}
function _0x4d75() {
    const _0x4d9f00 = [
        "Makor",
        "PHNOM\x20PENH",
        "href",
        "IndividualInfo",
        "dave@pras",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "1712625zFoYXy",
        "stringify",
        "BakongKHQR",
        "makor-payment",
        "2SmbxUW",
        "storeName",
        "8568340eipioS",
        "callbackUrl",
        "140jjdXTU",
        "initPayment",
        "successUrl",
        "addEventListener",
        "application/json",
        "cancelUrl",
        "Pay\x20Now",
        "usd",
        "textContent",
        "7LVPpIA",
        "currency",
        "1735782DQhzYC",
        "referenceId",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "price",
        "3796560adcNiI",
        "401890xuuXIl",
        "items",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "location",
        "USD",
        "error",
        "json",
        "click",
        "3594726yEmusi",
        "getElementById",
        "quantity",
        "59196DrAuYD",
        "khqrData",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "/payment/init",
        "md5",
        "Payment\x20initialization\x20failed.\x20",
        "function",
        "Error:",
        "https://makor.mioceen.com",
        "message",
        "disabled",
        "generateIndividual",
        "onInitSuccess",
    ];
    _0x4d75 = function () {
        return _0x4d9f00;
    };
    return _0x4d75();
}
(function (_0xe4230, _0x4bb1f7) {
    const _0x5783a4 = _0x422c,
        _0x8a7bc = _0xe4230();
    while (!![]) {
        try {
            const _0x4915cc =
                (parseInt(_0x5783a4(0xe2)) / 0x1) *
                    (-parseInt(_0x5783a4(0xce)) / 0x2) +
                (parseInt(_0x5783a4(0xee)) / 0x3) *
                    (parseInt(_0x5783a4(0xd2)) / 0x4) +
                parseInt(_0x5783a4(0xca)) / 0x5 +
                (-parseInt(_0x5783a4(0xdd)) / 0x6) *
                    (parseInt(_0x5783a4(0xdb)) / 0x7) +
                parseInt(_0x5783a4(0xe1)) / 0x8 +
                parseInt(_0x5783a4(0xeb)) / 0x9 +
                -parseInt(_0x5783a4(0xd0)) / 0xa;
            if (_0x4915cc === _0x4bb1f7) break;
            else _0x8a7bc["push"](_0x8a7bc["shift"]());
        } catch (_0x4867f4) {
            _0x8a7bc["push"](_0x8a7bc["shift"]());
        }
    }
})(_0x4d75, 0x57ac4),
    (function () {
        const _0x57de42 = _0x422c;
        window[_0x57de42(0xfb)] = function (_0x2aaec6, _0x3463db) {
            const _0x460dc3 = _0x57de42;
            _0x2aaec6 = _0x2aaec6 || _0x460dc3(0xf6);
            if (!_0x3463db) throw new Error(_0x460dc3(0xc9));
            this[_0x460dc3(0xd3)] = function (_0x26f3c0) {
                const _0x47ba85 = _0x460dc3;
                if (
                    !_0x26f3c0[_0x47ba85(0xcf)] ||
                    !_0x26f3c0[_0x47ba85(0xdc)] ||
                    !_0x26f3c0["successUrl"] ||
                    !_0x26f3c0[_0x47ba85(0xd7)] ||
                    !_0x26f3c0["items"]
                )
                    throw new Error(_0x47ba85(0xdf));
                let _0xfe6670 = 0x0;
                for (const _0x585e2c of _0x26f3c0["items"]) {
                    if (
                        !_0x585e2c["name"] ||
                        !_0x585e2c["quantity"] ||
                        !_0x585e2c[_0x47ba85(0xe0)]
                    )
                        throw new Error(_0x47ba85(0xe5));
                    _0xfe6670 +=
                        _0x585e2c[_0x47ba85(0xed)] * _0x585e2c["price"];
                }
                const _0x47636c = document[_0x47ba85(0xec)](_0x47ba85(0xcd));
                if (!_0x47636c) throw new Error(_0x47ba85(0xe4));
                const _0x8c248b = new BakongKHQR[_0x47ba85(0xcc)](),
                    _0x5574d8 = BakongKHQR[_0x47ba85(0xef)],
                    _0x762df8 = {
                        currency:
                            _0x26f3c0[_0x47ba85(0xdc)] == _0x47ba85(0xe7)
                                ? _0x5574d8["currency"][_0x47ba85(0xd9)]
                                : _0x5574d8[_0x47ba85(0xdc)]["khr"],
                        amount: _0xfe6670,
                    },
                    _0x565d74 = new BakongKHQR[_0x47ba85(0xc7)](
                        _0x47ba85(0xc8),
                        _0x26f3c0[_0x47ba85(0xcf)],
                        _0x47ba85(0xc5),
                        _0x762df8
                    ),
                    _0x117df2 = _0x8c248b[_0x47ba85(0xf9)](_0x565d74),
                    _0x5cd52d = _0x117df2["data"]["qr"],
                    _0x59db59 = _0x117df2["data"][_0x47ba85(0xf2)];
                _0x47636c[_0x47ba85(0xd5)](_0x47ba85(0xea), async () => {
                    const _0x1aa9f1 = _0x47ba85;
                    (_0x47636c[_0x1aa9f1(0xf8)] = !![]),
                        (_0x47636c[_0x1aa9f1(0xda)] = "Processing...");
                    try {
                        const _0x17a41e = await fetch(
                            _0x2aaec6 + _0x1aa9f1(0xf1),
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": _0x1aa9f1(0xd6),
                                    Authorization: "Bearer\x20" + _0x3463db,
                                },
                                body: JSON[_0x1aa9f1(0xcb)]({
                                    storeName: _0x26f3c0[_0x1aa9f1(0xcf)],
                                    currency: _0x26f3c0["currency"],
                                    qrcode: _0x5cd52d,
                                    md5: _0x59db59,
                                    items: _0x26f3c0[_0x1aa9f1(0xe3)],
                                    amount: _0xfe6670,
                                    callbackUrl: _0x26f3c0[_0x1aa9f1(0xd1)],
                                }),
                            }
                        );
                        if (!_0x17a41e["ok"]) throw new Error(_0x1aa9f1(0xf0));
                        const _0x4c494c = await _0x17a41e[_0x1aa9f1(0xe9)]();
                        if (
                            _0x4c494c["data"] &&
                            _0x4c494c["data"][_0x1aa9f1(0xde)]
                        ) {
                            const _0x3d3591 = _0x4c494c["data"]["referenceId"];
                            typeof _0x26f3c0[_0x1aa9f1(0xfa)] === "function" &&
                                _0x26f3c0[_0x1aa9f1(0xfa)](_0x3d3591);
                            const _0x32cdec =
                                typeof _0x26f3c0[_0x1aa9f1(0xd4)] ===
                                _0x1aa9f1(0xf4)
                                    ? _0x26f3c0[_0x1aa9f1(0xd4)](_0x3d3591)
                                    : _0x26f3c0[_0x1aa9f1(0xd4)];
                            window[_0x1aa9f1(0xe6)][_0x1aa9f1(0xc6)] =
                                _0x32cdec;
                        } else
                            throw new Error(
                                _0x1aa9f1(0xf3) + _0x4c494c[_0x1aa9f1(0xf7)]
                            );
                    } catch (_0x5d579d) {
                        console[_0x1aa9f1(0xe8)](
                            _0x1aa9f1(0xf5),
                            _0x5d579d["message"]
                        ),
                            alert(
                                "Payment\x20failed:\x20" +
                                    _0x5d579d[_0x1aa9f1(0xf7)]
                            );
                        const _0x42649e =
                            typeof _0x26f3c0[_0x1aa9f1(0xd7)] ===
                            _0x1aa9f1(0xf4)
                                ? _0x26f3c0[_0x1aa9f1(0xd7)]()
                                : _0x26f3c0[_0x1aa9f1(0xd7)];
                        window[_0x1aa9f1(0xe6)][_0x1aa9f1(0xc6)] = _0x42649e;
                    } finally {
                        (_0x47636c["disabled"] = ![]),
                            (_0x47636c[_0x1aa9f1(0xda)] = _0x1aa9f1(0xd8));
                    }
                });
            };
        };
    })();
