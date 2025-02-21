# Integration

When you integrate, you need to paste these scripts in your website.

## Payment

```html
<script src="https://cdn.jsdelivr.net/gh/davidhuotkeo/makor@generate/bakong-khqr-1.0.17.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/davidhuotkeo/makor@generate/makor-integrate-1.0.1.js"></script>
```

```html
<script>
    const makor = new window.Makor(
        "https://makor.mioceen.com",
        "your-secret-key"
    );
    makor.initPayment({
        storeName: "Store Name",
        currency: "KHR",
        successUrl: "http://localhost:5000/success",
        cancelUrl: "http://localhost:5000/cancel",
        items: [
            { name: "Somlar", price: 200, quantity: 1 },
            { name: "Maju", price: 400, quantity: 2 },
        ],
    });
</script>
```
