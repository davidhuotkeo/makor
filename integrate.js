function _0x308e() {
    const _0x5221cf = [
        "415699indEWw",
        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!",
        "errorCode",
        "USD",
        "json",
        "usd",
        "IndividualInfo",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "name",
        "cancelUrl",
        "generateIndividual",
        "4355712MLVlbz",
        "425394xjXBgo",
        "48agMpcf",
        "makor-payment",
        "8nIZdKu",
        "click",
        "successUrl",
        "function",
        "755CdMgPb",
        "115746iegsPp",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "https://makor.mioceen.com",
        "referenceId",
        "quantity",
        "PHNOM\x20PENH",
        "Payment\x20failed:\x20",
        "Error:",
        "message",
        "data",
        "md5",
        "dave@pras",
        "7019243ObKEaZ",
        "/payment/init",
        "currency",
        "onCancel",
        "42090YjBpjL",
        "31281210agmxHA",
        "application/json",
        "khr",
        "initPayment",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "getElementById",
        "items",
        "/payment/checkout/",
        "BakongKHQR",
        "khqrData",
        "price",
        "Payment\x20initialization\x20failed.\x20",
        "storeName",
        "onSuccess",
        "error",
    ];
    _0x308e = function () {
        return _0x5221cf;
    };
    return _0x308e();
}
function _0x1a04(_0x414435, _0x4973ba) {
    const _0x308e18 = _0x308e();
    return (
        (_0x1a04 = function (_0x1a04ae, _0x15828f) {
            _0x1a04ae = _0x1a04ae - 0x137;
            let _0xcc6df2 = _0x308e18[_0x1a04ae];
            return _0xcc6df2;
        }),
        _0x1a04(_0x414435, _0x4973ba)
    );
}
(function (_0x294464, _0x17678b) {
    const _0x26edea = _0x1a04,
        _0x125817 = _0x294464();
    while (!![]) {
        try {
            const _0x3573b6 =
                -parseInt(_0x26edea(0x165)) / 0x1 +
                (-parseInt(_0x26edea(0x145)) / 0x2) *
                    (parseInt(_0x26edea(0x13e)) / 0x3) +
                -parseInt(_0x26edea(0x13c)) / 0x4 +
                (-parseInt(_0x26edea(0x144)) / 0x5) *
                    (parseInt(_0x26edea(0x155)) / 0x6) +
                (parseInt(_0x26edea(0x151)) / 0x7) *
                    (parseInt(_0x26edea(0x140)) / 0x8) +
                -parseInt(_0x26edea(0x13d)) / 0x9 +
                parseInt(_0x26edea(0x156)) / 0xa;
            if (_0x3573b6 === _0x17678b) break;
            else _0x125817["push"](_0x125817["shift"]());
        } catch (_0xfcb731) {
            _0x125817["push"](_0x125817["shift"]());
        }
    }
})(_0x308e, 0x90f50),
    (function () {
        window["Makor"] = function (_0x44e074, _0x29abfb) {
            const _0x2b55ca = _0x1a04;
            _0x44e074 = _0x44e074 || _0x2b55ca(0x147);
            if (!_0x29abfb) throw new Error(_0x2b55ca(0x146));
            this[_0x2b55ca(0x159)] = function (_0x4ef7e4) {
                const _0x5ffc7 = _0x2b55ca;
                if (
                    !_0x4ef7e4[_0x5ffc7(0x162)] ||
                    !_0x4ef7e4[_0x5ffc7(0x153)] ||
                    !_0x4ef7e4[_0x5ffc7(0x142)] ||
                    !_0x4ef7e4["cancelUrl"] ||
                    !_0x4ef7e4["items"]
                )
                    throw new Error(
                        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items."
                    );
                let _0x5d38aa = 0x0;
                for (const _0x4eaa41 of _0x4ef7e4[_0x5ffc7(0x15c)]) {
                    if (
                        !_0x4eaa41[_0x5ffc7(0x139)] ||
                        !_0x4eaa41[_0x5ffc7(0x149)] ||
                        !_0x4eaa41[_0x5ffc7(0x160)]
                    )
                        throw new Error(_0x5ffc7(0x15a));
                    _0x5d38aa +=
                        _0x4eaa41["quantity"] * _0x4eaa41[_0x5ffc7(0x160)];
                }
                const _0x4b6a7b = document[_0x5ffc7(0x15b)](_0x5ffc7(0x13f));
                if (!_0x4b6a7b) throw new Error(_0x5ffc7(0x166));
                const _0x5b2183 = new BakongKHQR[_0x5ffc7(0x15e)](),
                    _0x5b9aa8 = BakongKHQR[_0x5ffc7(0x15f)],
                    _0x35de60 = {
                        currency:
                            _0x4ef7e4[_0x5ffc7(0x153)] == _0x5ffc7(0x168)
                                ? _0x5b9aa8["currency"][_0x5ffc7(0x16a)]
                                : _0x5b9aa8[_0x5ffc7(0x153)][_0x5ffc7(0x158)],
                        amount: _0x5d38aa,
                    },
                    _0x1d3c93 = new BakongKHQR[_0x5ffc7(0x137)](
                        _0x5ffc7(0x150),
                        _0x4ef7e4[_0x5ffc7(0x162)],
                        _0x5ffc7(0x14a),
                        _0x35de60
                    ),
                    _0x2f685a = _0x5b2183[_0x5ffc7(0x13b)](_0x1d3c93),
                    _0x562884 = _0x2f685a["data"]["qr"],
                    _0x2dcd6e = _0x2f685a["data"][_0x5ffc7(0x14f)];
                _0x4b6a7b["addEventListener"](_0x5ffc7(0x141), async () => {
                    const _0x98c6f2 = _0x5ffc7;
                    try {
                        const _0xefa560 = await fetch(
                            _0x44e074 + _0x98c6f2(0x152),
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": _0x98c6f2(0x157),
                                    Authorization: "Bearer\x20" + _0x29abfb,
                                },
                                body: JSON["stringify"]({
                                    storeName: _0x4ef7e4["storeName"],
                                    currency: _0x4ef7e4[_0x98c6f2(0x153)],
                                    qrcode: _0x562884,
                                    md5: _0x2dcd6e,
                                    items: _0x4ef7e4["items"],
                                    amount: _0x5d38aa,
                                    successUrl: _0x4ef7e4[_0x98c6f2(0x142)],
                                    cancelUrl: _0x4ef7e4[_0x98c6f2(0x13a)],
                                }),
                            }
                        );
                        if (!_0xefa560["ok"]) throw new Error(_0x98c6f2(0x138));
                        const _0x2e3d93 = await _0xefa560[_0x98c6f2(0x169)]();
                        if (
                            _0x2e3d93[_0x98c6f2(0x167)] === 0x0 &&
                            _0x2e3d93[_0x98c6f2(0x14e)] &&
                            _0x2e3d93["data"]["referenceId"]
                        ) {
                            const _0x10727a =
                                _0x2e3d93["data"][_0x98c6f2(0x148)];
                            typeof _0x4ef7e4["onSuccess"] ===
                                _0x98c6f2(0x143) &&
                                _0x4ef7e4[_0x98c6f2(0x163)](_0x10727a),
                                (window["location"]["href"] =
                                    _0x44e074 + _0x98c6f2(0x15d) + _0x10727a);
                        } else
                            throw new Error(
                                _0x98c6f2(0x161) + _0x2e3d93[_0x98c6f2(0x14d)]
                            );
                    } catch (_0x3c8e10) {
                        console[_0x98c6f2(0x164)](
                            _0x98c6f2(0x14c),
                            _0x3c8e10[_0x98c6f2(0x14d)]
                        ),
                            alert(_0x98c6f2(0x14b) + _0x3c8e10["message"]),
                            typeof _0x4ef7e4[_0x98c6f2(0x154)] === "function" &&
                                _0x4ef7e4[_0x98c6f2(0x154)](
                                    _0x3c8e10[_0x98c6f2(0x14d)]
                                );
                    }
                });
            };
        };
    })();
