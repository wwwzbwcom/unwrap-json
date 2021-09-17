function unwrapJson(data) {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch {
            return data;
        }
    }
    if (typeof data === 'object') {
        for (let key of Object.keys(data || {})) {
            data[key] = unwrapJson(data[key]);
        }
    }

    return data;
}

module.exports = {
    unwrapJson
}