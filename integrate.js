function _0x1f05() {
    const _0x3f372e = [
        "USD",
        "initPayment",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "md5",
        "66UmXlCw",
        "Payment\x20initialization\x20failed.\x20",
        "json",
        "price",
        "click",
        "application/json",
        "generateIndividual",
        "Makor",
        "onSuccess",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "href",
        "630755qVRUiu",
        "355943llfoXI",
        "698216GCTnnI",
        "items",
        "error",
        "1704468cxqykk",
        "stringify",
        "makor-payment",
        "name",
        "addEventListener",
        "getElementById",
        "khr",
        "BakongKHQR",
        "dave@pras",
        "Payment\x20failed:\x20",
        "errorCode",
        "1516116HuKDMy",
        "message",
        "data",
        "storeName",
        "599182oirlxo",
        "onCancel",
        "2488040OwqDhO",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "referenceId",
        "quantity",
        "currency",
        "POST",
        "function",
    ];
    _0x1f05 = function () {
        return _0x3f372e;
    };
    return _0x1f05();
}
function _0x2c8f(_0x42af98, _0x1e8999) {
    const _0x1f05fd = _0x1f05();
    return (
        (_0x2c8f = function (_0x2c8f98, _0x15edb2) {
            _0x2c8f98 = _0x2c8f98 - 0xd2;
            let _0x1c20f2 = _0x1f05fd[_0x2c8f98];
            return _0x1c20f2;
        }),
        _0x2c8f(_0x42af98, _0x1e8999)
    );
}
(function (_0x8aa58f, _0xe8b2ec) {
    const _0x193bbe = _0x2c8f,
        _0x1dafdf = _0x8aa58f();
    while (!![]) {
        try {
            const _0x584e9c =
                -parseInt(_0x193bbe(0xfb)) / 0x1 +
                parseInt(_0x193bbe(0xe9)) / 0x2 +
                -parseInt(_0x193bbe(0xec)) / 0x3 +
                parseInt(_0x193bbe(0xf7)) / 0x4 +
                -parseInt(_0x193bbe(0xe7)) / 0x5 +
                (parseInt(_0x193bbe(0xdc)) / 0x6) *
                    (parseInt(_0x193bbe(0xe8)) / 0x7) +
                parseInt(_0x193bbe(0xfd)) / 0x8;
            if (_0x584e9c === _0xe8b2ec) break;
            else _0x1dafdf["push"](_0x1dafdf["shift"]());
        } catch (_0x4b7df8) {
            _0x1dafdf["push"](_0x1dafdf["shift"]());
        }
    }
})(_0x1f05, 0x4a760),
    (function () {
        const _0x107ca6 = _0x2c8f;
        window[_0x107ca6(0xe3)] = function (_0x21ea64, _0x327a96) {
            const _0x4cb595 = _0x107ca6;
            _0x21ea64 = _0x21ea64 || "https://makor.mioceen.com";
            if (!_0x327a96)
                throw new Error(
                    "Token\x20is\x20required\x20to\x20initialize\x20Makor."
                );
            this[_0x4cb595(0xd9)] = function (_0x4f6108) {
                const _0xcaf7ce = _0x4cb595;
                if (
                    !_0x4f6108[_0xcaf7ce(0xfa)] ||
                    !_0x4f6108[_0xcaf7ce(0xd5)] ||
                    !_0x4f6108["items"]
                )
                    throw new Error(_0xcaf7ce(0xe5));
                let _0x25e78a = 0x0;
                for (const _0x4bfbdb of _0x4f6108[_0xcaf7ce(0xea)]) {
                    if (
                        !_0x4bfbdb[_0xcaf7ce(0xef)] ||
                        !_0x4bfbdb[_0xcaf7ce(0xd4)] ||
                        !_0x4bfbdb[_0xcaf7ce(0xdf)]
                    )
                        throw new Error(_0xcaf7ce(0xda));
                    _0x25e78a +=
                        _0x4bfbdb[_0xcaf7ce(0xd4)] * _0x4bfbdb[_0xcaf7ce(0xdf)];
                }
                const _0x3a9950 = document[_0xcaf7ce(0xf1)](_0xcaf7ce(0xee));
                if (!_0x3a9950)
                    throw new Error(
                        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!"
                    );
                const _0x24a4f0 = new BakongKHQR[_0xcaf7ce(0xf3)](),
                    _0xc7d348 = BakongKHQR["khqrData"],
                    _0x3be7f2 = {
                        currency:
                            _0x4f6108["currency"] == _0xcaf7ce(0xd8)
                                ? _0xc7d348[_0xcaf7ce(0xd5)]["usd"]
                                : _0xc7d348["currency"][_0xcaf7ce(0xf2)],
                        amount: _0x25e78a,
                    },
                    _0x26db4e = new BakongKHQR["IndividualInfo"](
                        _0xcaf7ce(0xf4),
                        _0x4f6108["storeName"],
                        "PHNOM\x20PENH",
                        _0x3be7f2
                    ),
                    _0x1dcf5c = _0x24a4f0[_0xcaf7ce(0xe2)](_0x26db4e),
                    _0x23e885 = _0x1dcf5c[_0xcaf7ce(0xf9)]["qr"],
                    _0x4636fb = _0x1dcf5c[_0xcaf7ce(0xf9)][_0xcaf7ce(0xdb)];
                _0x3a9950[_0xcaf7ce(0xf0)](_0xcaf7ce(0xe0), async () => {
                    const _0x37e5c2 = _0xcaf7ce;
                    try {
                        const _0x22130f = await fetch(
                            _0x21ea64 + "/payment/init",
                            {
                                method: _0x37e5c2(0xd6),
                                headers: {
                                    "Content-Type": _0x37e5c2(0xe1),
                                    Authorization: "Bearer\x20" + _0x327a96,
                                },
                                body: JSON[_0x37e5c2(0xed)]({
                                    storeName: _0x4f6108[_0x37e5c2(0xfa)],
                                    currency: _0x4f6108[_0x37e5c2(0xd5)],
                                    qrcode: _0x23e885,
                                    md5: _0x4636fb,
                                    items: _0x4f6108[_0x37e5c2(0xea)],
                                    amount: _0x25e78a,
                                }),
                            }
                        );
                        if (!_0x22130f["ok"]) throw new Error(_0x37e5c2(0xd2));
                        const _0x5c93ed = await _0x22130f[_0x37e5c2(0xde)]();
                        if (
                            _0x5c93ed[_0x37e5c2(0xf6)] === 0x0 &&
                            _0x5c93ed[_0x37e5c2(0xf9)] &&
                            _0x5c93ed["data"][_0x37e5c2(0xd3)]
                        ) {
                            const _0x11c27e =
                                _0x5c93ed[_0x37e5c2(0xf9)][_0x37e5c2(0xd3)];
                            typeof _0x4f6108[_0x37e5c2(0xe4)] ===
                                _0x37e5c2(0xd7) &&
                                _0x4f6108[_0x37e5c2(0xe4)](_0x11c27e),
                                (window["location"][_0x37e5c2(0xe6)] =
                                    _0x21ea64 +
                                    "/payment/checkout/" +
                                    _0x11c27e);
                        } else
                            throw new Error(
                                _0x37e5c2(0xdd) + _0x5c93ed[_0x37e5c2(0xf8)]
                            );
                    } catch (_0x12a7de) {
                        console[_0x37e5c2(0xeb)](
                            "Error:",
                            _0x12a7de[_0x37e5c2(0xf8)]
                        ),
                            alert(_0x37e5c2(0xf5) + _0x12a7de[_0x37e5c2(0xf8)]),
                            typeof _0x4f6108["onCancel"] === _0x37e5c2(0xd7) &&
                                _0x4f6108[_0x37e5c2(0xfc)](
                                    _0x12a7de[_0x37e5c2(0xf8)]
                                );
                    }
                });
            };
        };
    })();
