function _0x3006() {
    const _0x489aa0 = [
        "BakongKHQR",
        "href",
        "932ZFjErI",
        "generateIndividual",
        "6474jMfGZQ",
        "IndividualInfo",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "items",
        "makor-payment",
        "errorCode",
        "initPayment",
        "Error:",
        "Payment\x20initialization\x20failed.\x20",
        "disabled",
        "khr",
        "successUrl",
        "textContent",
        "function",
        "2534888QkukFH",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "USD",
        "1624mjSrvY",
        "/payment/init",
        "1108911yRujvG",
        "currency",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "dave@pras",
        "POST",
        "72jzAysW",
        "khqrData",
        "448430XAVVvU",
        "referenceId",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "storeName",
        "price",
        "click",
        "https://makor.mioceen.com",
        "522233NMbPdS",
        "944000UkuXOa",
        "json",
        "message",
        "Makor",
        "Payment\x20failed:\x20",
        "PHNOM\x20PENH",
        "md5",
        "application/json",
        "addEventListener",
        "usd",
        "cancelUrl",
        "655GDBdjx",
        "location",
        "quantity",
        "data",
        "Bearer\x20",
    ];
    _0x3006 = function () {
        return _0x489aa0;
    };
    return _0x3006();
}
function _0x369e(_0x1a46bc, _0x4474bb) {
    const _0x300630 = _0x3006();
    return (
        (_0x369e = function (_0x369e63, _0x32650c) {
            _0x369e63 = _0x369e63 - 0x1d4;
            let _0x1624c1 = _0x300630[_0x369e63];
            return _0x1624c1;
        }),
        _0x369e(_0x1a46bc, _0x4474bb)
    );
}
(function (_0x417b94, _0x295379) {
    const _0x14e7d4 = _0x369e,
        _0x4f6924 = _0x417b94();
    while (!![]) {
        try {
            const _0x9133e7 =
                -parseInt(_0x14e7d4(0x1f9)) / 0x1 +
                -parseInt(_0x14e7d4(0x1f2)) / 0x2 +
                parseInt(_0x14e7d4(0x1eb)) / 0x3 +
                (parseInt(_0x14e7d4(0x1d6)) / 0x4) *
                    (-parseInt(_0x14e7d4(0x205)) / 0x5) +
                (parseInt(_0x14e7d4(0x1d8)) / 0x6) *
                    (parseInt(_0x14e7d4(0x1e9)) / 0x7) +
                -parseInt(_0x14e7d4(0x1e6)) / 0x8 +
                (-parseInt(_0x14e7d4(0x1f0)) / 0x9) *
                    (-parseInt(_0x14e7d4(0x1fa)) / 0xa);
            if (_0x9133e7 === _0x295379) break;
            else _0x4f6924["push"](_0x4f6924["shift"]());
        } catch (_0x5d5f50) {
            _0x4f6924["push"](_0x4f6924["shift"]());
        }
    }
})(_0x3006, 0x44af5),
    (function () {
        const _0x18aa24 = _0x369e;
        window[_0x18aa24(0x1fd)] = function (_0x57c7f0, _0x4f04c1) {
            const _0x36eaa7 = _0x18aa24;
            _0x57c7f0 = _0x57c7f0 || _0x36eaa7(0x1f8);
            if (!_0x4f04c1) throw new Error(_0x36eaa7(0x1da));
            this[_0x36eaa7(0x1de)] = function (_0x1db01b) {
                const _0x596503 = _0x36eaa7;
                if (
                    !_0x1db01b[_0x596503(0x1f5)] ||
                    !_0x1db01b[_0x596503(0x1ec)] ||
                    !_0x1db01b["successUrl"] ||
                    !_0x1db01b[_0x596503(0x204)] ||
                    !_0x1db01b[_0x596503(0x1db)]
                )
                    throw new Error(
                        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items."
                    );
                let _0x418fb9 = 0x0;
                for (const _0x4f938f of _0x1db01b["items"]) {
                    if (
                        !_0x4f938f["name"] ||
                        !_0x4f938f[_0x596503(0x207)] ||
                        !_0x4f938f[_0x596503(0x1f6)]
                    )
                        throw new Error(_0x596503(0x1f4));
                    _0x418fb9 +=
                        _0x4f938f[_0x596503(0x207)] *
                        _0x4f938f[_0x596503(0x1f6)];
                }
                const _0x440910 = document["getElementById"](_0x596503(0x1dc));
                if (!_0x440910) throw new Error(_0x596503(0x1e7));
                const _0x5c42c5 = new BakongKHQR[_0x596503(0x1d4)](),
                    _0x3d2434 = BakongKHQR[_0x596503(0x1f1)],
                    _0x8de658 = {
                        currency:
                            _0x1db01b[_0x596503(0x1ec)] == _0x596503(0x1e8)
                                ? _0x3d2434[_0x596503(0x1ec)][_0x596503(0x203)]
                                : _0x3d2434["currency"][_0x596503(0x1e2)],
                        amount: _0x418fb9,
                    },
                    _0x5960ae = new BakongKHQR[_0x596503(0x1d9)](
                        _0x596503(0x1ee),
                        _0x1db01b["storeName"],
                        _0x596503(0x1ff),
                        _0x8de658
                    ),
                    _0x2ec38a = _0x5c42c5[_0x596503(0x1d7)](_0x5960ae),
                    _0x4ba827 = _0x2ec38a[_0x596503(0x208)]["qr"],
                    _0x14f880 = _0x2ec38a[_0x596503(0x208)][_0x596503(0x200)];
                _0x440910[_0x596503(0x202)](_0x596503(0x1f7), async () => {
                    const _0xb8fd7a = _0x596503;
                    (_0x440910[_0xb8fd7a(0x1e1)] = !![]),
                        (_0x440910[_0xb8fd7a(0x1e4)] = "Processing...");
                    try {
                        const _0x2079c4 = await fetch(
                            _0x57c7f0 + _0xb8fd7a(0x1ea),
                            {
                                method: _0xb8fd7a(0x1ef),
                                headers: {
                                    "Content-Type": _0xb8fd7a(0x201),
                                    Authorization: _0xb8fd7a(0x209) + _0x4f04c1,
                                },
                                body: JSON["stringify"]({
                                    storeName: _0x1db01b[_0xb8fd7a(0x1f5)],
                                    currency: _0x1db01b[_0xb8fd7a(0x1ec)],
                                    qrcode: _0x4ba827,
                                    md5: _0x14f880,
                                    items: _0x1db01b["items"],
                                    amount: _0x418fb9,
                                    callbackUrl: _0x1db01b["callbackUrl"],
                                }),
                            }
                        );
                        if (!_0x2079c4["ok"]) throw new Error(_0xb8fd7a(0x1ed));
                        const _0x4d5ce1 = await _0x2079c4[_0xb8fd7a(0x1fb)]();
                        if (
                            _0x4d5ce1[_0xb8fd7a(0x1dd)] === 0x0 &&
                            _0x4d5ce1[_0xb8fd7a(0x208)] &&
                            _0x4d5ce1[_0xb8fd7a(0x208)][_0xb8fd7a(0x1f3)]
                        ) {
                            const _0x245ea3 =
                                    _0x4d5ce1[_0xb8fd7a(0x208)][
                                        _0xb8fd7a(0x1f3)
                                    ],
                                _0x10d543 =
                                    typeof _0x1db01b[_0xb8fd7a(0x1e3)] ===
                                    _0xb8fd7a(0x1e5)
                                        ? _0x1db01b[_0xb8fd7a(0x1e3)](_0x245ea3)
                                        : _0x1db01b[_0xb8fd7a(0x1e3)];
                            window[_0xb8fd7a(0x206)]["href"] = _0x10d543;
                        } else
                            throw new Error(
                                _0xb8fd7a(0x1e0) + _0x4d5ce1["message"]
                            );
                    } catch (_0x1577ae) {
                        console["error"](
                            _0xb8fd7a(0x1df),
                            _0x1577ae[_0xb8fd7a(0x1fc)]
                        ),
                            alert(_0xb8fd7a(0x1fe) + _0x1577ae["message"]);
                        const _0x5229eb =
                            typeof _0x1db01b[_0xb8fd7a(0x204)] ===
                            _0xb8fd7a(0x1e5)
                                ? _0x1db01b["cancelUrl"]()
                                : _0x1db01b[_0xb8fd7a(0x204)];
                        window[_0xb8fd7a(0x206)][_0xb8fd7a(0x1d5)] = _0x5229eb;
                    } finally {
                        (_0x440910[_0xb8fd7a(0x1e1)] = ![]),
                            (_0x440910["textContent"] = "Pay\x20Now");
                    }
                });
            };
        };
    })();
