(function (_0x5aabf4, _0x70e45a) {
    const _0xb77d36 = _0xe571,
        _0x4fef33 = _0x5aabf4();
    while (!![]) {
        try {
            const _0x1908ed =
                (-parseInt(_0xb77d36(0xdc)) / 0x1) *
                    (parseInt(_0xb77d36(0xe2)) / 0x2) +
                -parseInt(_0xb77d36(0xcb)) / 0x3 +
                -parseInt(_0xb77d36(0xf1)) / 0x4 +
                (-parseInt(_0xb77d36(0xd9)) / 0x5) *
                    (-parseInt(_0xb77d36(0xd4)) / 0x6) +
                -parseInt(_0xb77d36(0xc4)) / 0x7 +
                parseInt(_0xb77d36(0xdb)) / 0x8 +
                (parseInt(_0xb77d36(0xe9)) / 0x9) *
                    (parseInt(_0xb77d36(0xdf)) / 0xa);
            if (_0x1908ed === _0x70e45a) break;
            else _0x4fef33["push"](_0x4fef33["shift"]());
        } catch (_0x55780f) {
            _0x4fef33["push"](_0x4fef33["shift"]());
        }
    }
})(_0xd030, 0x6f188),
    (function () {
        const _0x566821 = _0xe571;
        window[_0x566821(0xf0)] = function (_0x13edb9, _0x34767d) {
            const _0x322693 = _0x566821;
            _0x13edb9 = _0x13edb9 || "https://makor.mioceen.com";
            if (!_0x34767d) throw new Error(_0x322693(0xde));
            this["initPayment"] = function (_0x4a14a7) {
                const _0x25422c = _0x322693;
                if (
                    !_0x4a14a7[_0x25422c(0xd8)] ||
                    !_0x4a14a7["currency"] ||
                    !_0x4a14a7[_0x25422c(0xe8)] ||
                    !_0x4a14a7["cancelUrl"] ||
                    !_0x4a14a7[_0x25422c(0xc7)]
                )
                    throw new Error(_0x25422c(0xc3));
                let _0x1eaff9 = 0x0;
                for (const _0x2a8968 of _0x4a14a7[_0x25422c(0xc7)]) {
                    if (
                        !_0x2a8968["name"] ||
                        !_0x2a8968[_0x25422c(0xe1)] ||
                        !_0x2a8968[_0x25422c(0xcc)]
                    )
                        throw new Error(_0x25422c(0xc8));
                    _0x1eaff9 +=
                        _0x2a8968[_0x25422c(0xe1)] * _0x2a8968["price"];
                }
                const _0x8ec43d = document[_0x25422c(0xc9)](_0x25422c(0xec));
                if (!_0x8ec43d)
                    throw new Error(
                        "Payment\x20button\x20with\x20ID\x20\x27makor-payment\x27\x20not\x20found!"
                    );
                const _0x44959f = new BakongKHQR[_0x25422c(0xc6)](),
                    _0x41478f = BakongKHQR["khqrData"],
                    _0x53866f = {
                        currency:
                            _0x4a14a7[_0x25422c(0xef)] == "USD"
                                ? _0x41478f[_0x25422c(0xef)]["usd"]
                                : _0x41478f[_0x25422c(0xef)][_0x25422c(0xf2)],
                        amount: _0x1eaff9,
                    },
                    _0x3752f6 = new BakongKHQR[_0x25422c(0xe7)](
                        _0x25422c(0xc5),
                        _0x4a14a7[_0x25422c(0xd8)],
                        _0x25422c(0xd0),
                        _0x53866f
                    ),
                    _0xfc0460 = _0x44959f[_0x25422c(0xd2)](_0x3752f6),
                    _0xb73c84 = _0xfc0460[_0x25422c(0xe5)]["qr"],
                    _0x5e8a8a = _0xfc0460[_0x25422c(0xe5)][_0x25422c(0xe0)];
                _0x8ec43d[_0x25422c(0xcd)](_0x25422c(0xd3), async () => {
                    const _0x30b202 = _0x25422c;
                    try {
                        const _0xae1313 = await fetch(
                            _0x13edb9 + _0x30b202(0xcf),
                            {
                                method: _0x30b202(0xe4),
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: _0x30b202(0xd7) + _0x34767d,
                                },
                                body: JSON[_0x30b202(0xeb)]({
                                    storeName: _0x4a14a7["storeName"],
                                    currency: _0x4a14a7[_0x30b202(0xef)],
                                    qrcode: _0xb73c84,
                                    md5: _0x5e8a8a,
                                    items: _0x4a14a7[_0x30b202(0xc7)],
                                    amount: _0x1eaff9,
                                    successUrl: _0x4a14a7[_0x30b202(0xe8)],
                                    cancelUrl: _0x4a14a7["cancelUrl"],
                                }),
                            }
                        );
                        if (!_0xae1313["ok"]) throw new Error(_0x30b202(0xda));
                        const _0x1f7ab1 = await _0xae1313[_0x30b202(0xea)]();
                        if (
                            _0x1f7ab1["errorCode"] === 0x0 &&
                            _0x1f7ab1[_0x30b202(0xe5)] &&
                            _0x1f7ab1[_0x30b202(0xe5)][_0x30b202(0xd5)]
                        ) {
                            const _0x3b6b80 =
                                _0x1f7ab1["data"][_0x30b202(0xd5)];
                            typeof _0x4a14a7[_0x30b202(0xdd)] ===
                                _0x30b202(0xe3) &&
                                _0x4a14a7["onSuccess"](_0x3b6b80),
                                (window[_0x30b202(0xca)][_0x30b202(0xee)] =
                                    _0x13edb9 +
                                    "/payment/checkout/" +
                                    _0x3b6b80);
                        } else
                            throw new Error(
                                "Payment\x20initialization\x20failed.\x20" +
                                    _0x1f7ab1[_0x30b202(0xd1)]
                            );
                    } catch (_0x1d6e36) {
                        console[_0x30b202(0xed)](
                            _0x30b202(0xd6),
                            _0x1d6e36["message"]
                        ),
                            alert(_0x30b202(0xce) + _0x1d6e36[_0x30b202(0xd1)]),
                            typeof _0x4a14a7[_0x30b202(0xe6)] === "function" &&
                                _0x4a14a7[_0x30b202(0xe6)](
                                    _0x1d6e36["message"]
                                );
                    }
                });
            };
        };
    })();
function _0xe571(_0xea6541, _0x38a9e8) {
    const _0xd03018 = _0xd030();
    return (
        (_0xe571 = function (_0xe57174, _0x25e3c3) {
            _0xe57174 = _0xe57174 - 0xc3;
            let _0x4a6b3f = _0xd03018[_0xe57174];
            return _0x4a6b3f;
        }),
        _0xe571(_0xea6541, _0x38a9e8)
    );
}
function _0xd030() {
    const _0x3a5501 = [
        "generateIndividual",
        "click",
        "12sQUHmP",
        "referenceId",
        "Error:",
        "Bearer\x20",
        "storeName",
        "2151260FlWdRu",
        "Failed\x20to\x20initialize\x20payment.\x20Please\x20try\x20again.",
        "7099488aimByf",
        "2LFGINw",
        "onSuccess",
        "Token\x20is\x20required\x20to\x20initialize\x20Makor.",
        "10rxxPyt",
        "md5",
        "quantity",
        "256522gUkjew",
        "function",
        "POST",
        "data",
        "onCancel",
        "IndividualInfo",
        "successUrl",
        "5639895GTcCnJ",
        "json",
        "stringify",
        "makor-payment",
        "error",
        "href",
        "currency",
        "Makor",
        "1691888LDpyLh",
        "khr",
        "Missing\x20required\x20fields:\x20storeName,\x20currency,\x20or\x20items.",
        "5095440oDTBAl",
        "dave@pras",
        "BakongKHQR",
        "items",
        "Each\x20item\x20must\x20have\x20name,\x20quantity,\x20and\x20price.",
        "getElementById",
        "location",
        "1536399OqZxda",
        "price",
        "addEventListener",
        "Payment\x20failed:\x20",
        "/payment/init",
        "PHNOM\x20PENH",
        "message",
    ];
    _0xd030 = function () {
        return _0x3a5501;
    };
    return _0xd030();
}
