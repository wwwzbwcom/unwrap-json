# Unwrap JSON

Unwrap / Unescape / Decode JSON which nested many layers to prevent strange API response hurt your eyes :eyes:

## Before

```json
{
    "code": 0,
    "error": null,
    "timestamp": 1631877538538,
    "data": "{\"code\":0,\"error\":null,\"timestamp\":1631877538538,\"data\":\"{\\\"code\\\":0,\\\"error\\\":null,\\\"timestamp\\\":1631877538538,\\\"data\\\":\\\"{\\\\\\\"code\\\\\\\":0,\\\\\\\"error\\\\\\\":null,\\\\\\\"timestamp\\\\\\\":1631877538538}\\\"}\"}"
}
```

## After

```json
{
    "code": 0,
    "error": null,
    "timestamp": 1631877538538,
    "data": {
        "code": 0,
        "error": null,
        "timestamp": 1631877538538,
        "data": {
            "code": 0,
            "error": null,
            "timestamp": 1631877538538,
            "data": {
                "code": 0,
                "error": null,
                "timestamp": 1631877538538
            }
        }
    }
}
```

## Usage

### Install

```bash
npm i unwrap-json
```

### Stdin Input and Stdout Output

```bash
unwrap-json
{
    "code": 0,
    "error": null,
    "timestamp": 1631877538538,
    "data": "{\"code\":0,\"error\":null,\"timestamp\":1631877538538,\"data\":\"{\\\"code\\\":0,\\\"error\\\":null,\\\"timestamp\\\":1631877538538,\\\"data\\\":\\\"{\\\\\\\"code\\\\\\\":0,\\\\\\\"error\\\\\\\":null,\\\\\\\"timestamp\\\\\\\":1631877538538}\\\"}\"}"
}

# {
#     "code": 0,
#     "error": null,
#     "timestamp": 1631877538538,
#     "data": {
#         "code": 0,
#         "error": null,
#         "timestamp": 1631877538538,
#         "data": {
#             "code": 0,
#             "error": null,
#             "timestamp": 1631877538538,
#             "data": {
#                 "code": 0,
#                 "error": null,
#                 "timestamp": 1631877538538
#             }
#         }
#     }
# }
```


### File Input

```bash
node index.js < input.json
```

### File Output

```bash
node index.js > output.json
```

### File Input and File Output

```bash
node index.js < input.json > output.json
```

### Programmatic Usage

```
const { unwrapJson } = require('unwrap-json');
unwrapJson({
    "code": 0,
    "error": null,
    "timestamp": 1631877538538,
    "data": "{\"code\":0,\"error\":null,\"timestamp\":1631877538538,\"data\":\"{\\\"code\\\":0,\\\"error\\\":null,\\\"timestamp\\\":1631877538538,\\\"data\\\":\\\"{\\\\\\\"code\\\\\\\":0,\\\\\\\"error\\\\\\\":null,\\\\\\\"timestamp\\\\\\\":1631877538538}\\\"}\"}"
});
```