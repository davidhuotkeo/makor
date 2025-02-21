function _0x2596(_0xb68213, _0x5a208a) {
    const _0x1dbf9d = _0x1dbf();
    return (
        (_0x2596 = function (_0x259653, _0x1a3d4c) {
            _0x259653 = _0x259653 - 0x11f;
            let _0x10b6e1 = _0x1dbf9d[_0x259653];
            return _0x10b6e1;
        }),
        _0x2596(_0xb68213, _0x5a208a)
    );
}
function _0x1dbf() {
    const _0x5bfe08 = [
        "USD",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "json",
        "message",
        "application/json",
        "addEventListener",
        "getElementById",
        "stringify",
        "18520404rhOjGj",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "Error:",
        "function",
        "PHNOM\x20PENH",
        "Bearer\x20",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "referenceId",
        "makor-payment",
        "href",
        "/payment/checkout/",
        "onCancel",
        "khr",
        "name",
        "errorCode",
        "3441621LeWDAW",
        "onSuccess",
        "BakongKHQR",
        "Payment\x20failed:\x20",
        "items",
        "1417521eMdjGQ",
        "5823820rlizRY",
        "Makor",
        "9551802LSsQQV",
        "storeName",
        "md5",
        "price",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "quantity",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "dave@pras",
        "currency",
        "successUrl",
        "Processing...",
        "location",
        "IndividualInfo",
        "Payment\x20initialization\x20failed.\x20",
        "427158udtxep",
        "cancelUrl",
        "https://makor.mioceen.com",
        "khqrData",
        "5477124DXylEJ",
        "data",
        "disabled",
    ];
    _0x1dbf = function () {
        return _0x5bfe08;
    };
    return _0x1dbf();
}
(function (_0x1e0c14, _0xe12c50) {
    const _0x28a999 = _0x2596,
        _0xc61160 = _0x1e0c14();
    while (!![]) {
        try {
            const _0x4391d7 =
                -parseInt(_0x28a999(0x150)) / 0x1 +
                -parseInt(_0x28a999(0x12d)) / 0x2 +
                parseInt(_0x28a999(0x14b)) / 0x3 +
                parseInt(_0x28a999(0x131)) / 0x4 +
                parseInt(_0x28a999(0x151)) / 0x5 +
                parseInt(_0x28a999(0x11f)) / 0x6 +
                -parseInt(_0x28a999(0x13c)) / 0x7;
            if (_0x4391d7 === _0xe12c50) break;
            else _0xc61160["push"](_0xc61160["shift"]());
        } catch (_0x57aa87) {
            _0xc61160["push"](_0xc61160["shift"]());
        }
    }
})(_0x1dbf, 0xf33fb),
    (function () {
        const _0x2d5c78 = _0x2596;
        window[_0x2d5c78(0x152)] = function (_0x57f62b, _0x380701) {
            const _0x55a245 = _0x2d5c78;
            _0x57f62b = _0x57f62b || _0x55a245(0x12f);
            if (!_0x380701) throw new Error(_0x55a245(0x13d));
            this["initPayment"] = function (_0x513c08) {
                const _0x4acb24 = _0x55a245;
                if (
                    !_0x513c08["storeName"] ||
                    !_0x513c08[_0x4acb24(0x127)] ||
                    !_0x513c08["successUrl"] ||
                    !_0x513c08["cancelUrl"] ||
                    !_0x513c08[_0x4acb24(0x14f)]
                )
                    throw new Error(_0x4acb24(0x125));
                let _0x2dfd5b = 0x0;
                for (const _0x88512e of _0x513c08[_0x4acb24(0x14f)]) {
                    if (
                        !_0x88512e[_0x4acb24(0x149)] ||
                        !_0x88512e[_0x4acb24(0x124)] ||
                        !_0x88512e[_0x4acb24(0x122)]
                    )
                        throw new Error(_0x4acb24(0x123));
                    _0x2dfd5b +=
                        _0x88512e[_0x4acb24(0x124)] *
                        _0x88512e[_0x4acb24(0x122)];
                }
                const _0xc35382 = document[_0x4acb24(0x13a)](_0x4acb24(0x144));
                if (!_0xc35382) throw new Error(_0x4acb24(0x135));
                const _0x11db3b = new BakongKHQR[_0x4acb24(0x14d)](),
                    _0x15b14f = BakongKHQR[_0x4acb24(0x130)],
                    _0xc813fb = {
                        currency:
                            _0x513c08[_0x4acb24(0x127)] == _0x4acb24(0x134)
                                ? _0x15b14f["currency"]["usd"]
                                : _0x15b14f[_0x4acb24(0x127)][_0x4acb24(0x148)],
                        amount: _0x2dfd5b,
                    },
                    _0x1462cd = new BakongKHQR[_0x4acb24(0x12b)](
                        _0x4acb24(0x126),
                        _0x513c08[_0x4acb24(0x120)],
                        _0x4acb24(0x140),
                        _0xc813fb
                    ),
                    _0xf078d2 = _0x11db3b["generateIndividual"](_0x1462cd),
                    _0x43721b = _0xf078d2[_0x4acb24(0x132)]["qr"],
                    _0x787c48 = _0xf078d2[_0x4acb24(0x132)][_0x4acb24(0x121)];
                _0xc35382[_0x4acb24(0x139)]("click", async () => {
                    const _0x225487 = _0x4acb24;
                    (_0xc35382[_0x225487(0x133)] = !![]),
                        (_0xc35382["textContent"] = _0x225487(0x129));
                    try {
                        const _0xf298eb = await fetch(
                            _0x57f62b + "/payment/init",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": _0x225487(0x138),
                                    Authorization: _0x225487(0x141) + _0x380701,
                                },
                                body: JSON[_0x225487(0x13b)]({
                                    storeName: _0x513c08[_0x225487(0x120)],
                                    currency: _0x513c08["currency"],
                                    qrcode: _0x43721b,
                                    md5: _0x787c48,
                                    items: _0x513c08[_0x225487(0x14f)],
                                    amount: _0x2dfd5b,
                                    successUrl: _0x513c08[_0x225487(0x128)],
                                    cancelUrl: _0x513c08[_0x225487(0x12e)],
                                }),
                            }
                        );
                        if (!_0xf298eb["ok"]) throw new Error(_0x225487(0x142));
                        const _0x3cfd89 = await _0xf298eb[_0x225487(0x136)]();
                        if (
                            _0x3cfd89[_0x225487(0x14a)] === 0x0 &&
                            _0x3cfd89["data"] &&
                            _0x3cfd89[_0x225487(0x132)]["referenceId"]
                        ) {
                            const _0x29dcee =
                                _0x3cfd89[_0x225487(0x132)][_0x225487(0x143)];
                            typeof _0x513c08[_0x225487(0x14c)] ===
                                _0x225487(0x13f) &&
                                _0x513c08[_0x225487(0x14c)](_0x29dcee),
                                (window[_0x225487(0x12a)][_0x225487(0x145)] =
                                    _0x57f62b + _0x225487(0x146) + _0x29dcee);
                        } else
                            throw new Error(
                                _0x225487(0x12c) + _0x3cfd89[_0x225487(0x137)]
                            );
                    } catch (_0x25603f) {
                        console["error"](
                            _0x225487(0x13e),
                            _0x25603f["message"]
                        ),
                            alert(_0x225487(0x14e) + _0x25603f["message"]),
                            typeof _0x513c08[_0x225487(0x147)] ===
                                _0x225487(0x13f) &&
                                _0x513c08[_0x225487(0x147)](
                                    _0x25603f[_0x225487(0x137)]
                                );
                    } finally {
                        _0xc35382[_0x225487(0x133)] = ![];
                    }
                });
            };
        };
    })();
