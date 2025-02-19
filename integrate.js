const _0x329c6a = _0xd1b4;
function _0xd1b4(_0x847cdd, _0x4af56d) {
    const _0x1afcf6 = _0x1afc();
    return (
        (_0xd1b4 = function (_0xd1b44, _0x4ebdf1) {
            _0xd1b44 = _0xd1b44 - 0x1b5;
            let _0x34cad8 = _0x1afcf6[_0xd1b44];
            return _0x34cad8;
        }),
        _0xd1b4(_0x847cdd, _0x4af56d)
    );
}
(function (_0x221f6b, _0x30e665) {
    const _0xb00077 = _0xd1b4,
        _0x34d326 = _0x221f6b();
    while (!![]) {
        try {
            const _0x586312 =
                -parseInt(_0xb00077(0x1c8)) / 0x1 +
                parseInt(_0xb00077(0x1c6)) / 0x2 +
                -parseInt(_0xb00077(0x1bf)) / 0x3 +
                (-parseInt(_0xb00077(0x1d0)) / 0x4) *
                    (-parseInt(_0xb00077(0x1bd)) / 0x5) +
                (parseInt(_0xb00077(0x1c1)) / 0x6) *
                    (-parseInt(_0xb00077(0x1c5)) / 0x7) +
                parseInt(_0xb00077(0x1b5)) / 0x8 +
                (parseInt(_0xb00077(0x1d4)) / 0x9) *
                    (-parseInt(_0xb00077(0x1de)) / 0xa);
            if (_0x586312 === _0x30e665) break;
            else _0x34d326["push"](_0x34d326["shift"]());
        } catch (_0x218729) {
            _0x34d326["push"](_0x34d326["shift"]());
        }
    }
})(_0x1afc, 0xc1ff2),
    (baseUrl = _0x329c6a(0x1ba)),
    (function () {
        const _0x1e5b3f = _0x329c6a;
        window[_0x1e5b3f(0x1d1)] = function (_0x2fe0d6) {
            const _0x46d519 = _0x1e5b3f;
            if (!_0x2fe0d6)
                throw new Error(
                    "Token\x20is\x20required\x20to\x20initialize\x20Makor."
                );
            this[_0x46d519(0x1bc)] = function (_0x53338d) {
                const _0x575c85 = _0x46d519;
                if (
                    !_0x53338d["storeName"] ||
                    !_0x53338d["currency"] ||
                    !_0x53338d["successUrl"] ||
                    !_0x53338d[_0x575c85(0x1cb)] ||
                    !_0x53338d[_0x575c85(0x1c4)]
                )
                    throw new Error(_0x575c85(0x1cd));
                let _0x13081e = 0x0;
                for (const _0x3f5697 of _0x53338d[_0x575c85(0x1c4)]) {
                    if (
                        !_0x3f5697[_0x575c85(0x1d9)] ||
                        !_0x3f5697["quantity"] ||
                        !_0x3f5697[_0x575c85(0x1bb)]
                    )
                        throw new Error(
                            "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price."
                        );
                    _0x13081e += _0x3f5697["quantity"] * _0x3f5697["price"];
                }
                const _0x17367f = document["getElementById"]("makor-payment");
                if (!_0x17367f)
                    throw new Error(
                        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!"
                    );
                const _0x62afdb = new BakongKHQR[_0x575c85(0x1d8)](),
                    _0x4044ee = BakongKHQR["khqrData"],
                    _0x59eb7c = {
                        currency:
                            _0x53338d[_0x575c85(0x1da)] == "USD"
                                ? _0x4044ee[_0x575c85(0x1da)][_0x575c85(0x1c2)]
                                : _0x4044ee[_0x575c85(0x1da)][_0x575c85(0x1d2)],
                        amount: _0x13081e,
                    },
                    _0x1bc0ed = new BakongKHQR["IndividualInfo"](
                        _0x575c85(0x1d6),
                        _0x53338d[_0x575c85(0x1ce)],
                        _0x575c85(0x1dc),
                        _0x59eb7c
                    ),
                    _0x5d54e3 = _0x62afdb[_0x575c85(0x1db)](_0x1bc0ed),
                    _0x5ce752 = _0x5d54e3["data"]["qr"],
                    _0x286f27 = _0x5d54e3[_0x575c85(0x1b6)][_0x575c85(0x1cf)];
                _0x17367f[_0x575c85(0x1be)](_0x575c85(0x1b9), async () => {
                    const _0x5b5847 = _0x575c85;
                    try {
                        const _0x2494b0 = await fetch(
                            baseUrl + _0x5b5847(0x1c0),
                            {
                                method: _0x5b5847(0x1d3),
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: _0x5b5847(0x1d7) + _0x2fe0d6,
                                },
                                body: JSON["stringify"]({
                                    storeName: _0x53338d[_0x5b5847(0x1ce)],
                                    currency: _0x53338d[_0x5b5847(0x1da)],
                                    qrcode: _0x5ce752,
                                    md5: _0x286f27,
                                    successUrl: _0x53338d[_0x5b5847(0x1c3)],
                                    cancelUrl: _0x53338d[_0x5b5847(0x1cb)],
                                    items: _0x53338d["items"],
                                    amount: _0x13081e,
                                }),
                            }
                        );
                        if (!_0x2494b0["ok"]) throw new Error(_0x5b5847(0x1b8));
                        const _0x2b7a8f = await _0x2494b0[_0x5b5847(0x1d5)]();
                        if (
                            _0x2b7a8f[_0x5b5847(0x1b7)] === 0x0 &&
                            _0x2b7a8f[_0x5b5847(0x1b6)] &&
                            _0x2b7a8f[_0x5b5847(0x1b6)][_0x5b5847(0x1cc)]
                        ) {
                            const _0x316013 =
                                _0x2b7a8f[_0x5b5847(0x1b6)][_0x5b5847(0x1cc)];
                            window[_0x5b5847(0x1dd)]["href"] =
                                baseUrl + "/payment/checkout/" + _0x316013;
                        } else
                            throw new Error(
                                _0x5b5847(0x1c7) + _0x2b7a8f[_0x5b5847(0x1c9)]
                            );
                    } catch (_0x5c6cf0) {
                        console[_0x5b5847(0x1ca)](
                            "Error:",
                            _0x5c6cf0[_0x5b5847(0x1c9)]
                        ),
                            alert(
                                "Payment\x20failed:\x20" +
                                    _0x5c6cf0[_0x5b5847(0x1c9)]
                            );
                    }
                });
            };
        };
    })();
function _0x1afc() {
    const _0x296802 = [
        "successUrl",
        "items",
        "7pqnBYB",
        "2830196zUpnjB",
        "Payment\x20initialization\x20failed.\x20",
        "556649VQuuBa",
        "message",
        "error",
        "cancelUrl",
        "referenceId",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20successUrl,\x20cancelUrl,\x20or\x20items.",
        "storeName",
        "md5",
        "2431148FVUYMQ",
        "Makor",
        "khr",
        "POST",
        "3951SulgXa",
        "json",
        "dave@pras",
        "Bearer\x20",
        "BakongKHQR",
        "name",
        "currency",
        "generateIndividual",
        "PHNOM\x20PENH",
        "location",
        "19270slZgBi",
        "5485944NgxKZa",
        "data",
        "errorCode",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "click",
        "https://makor.mioceen.com",
        "price",
        "initPayment",
        "5NnoFIB",
        "addEventListener",
        "1010946SitveZ",
        "/payment/init",
        "1046604YBuRsS",
        "usd",
    ];
    _0x1afc = function () {
        return _0x296802;
    };
    return _0x1afc();
}
