var document = window.document,
    storage = window.localStorage,
    XMLHttpRequest = window.XMLHttpRequest,
    selfstorage;

function createTagScript(code) {
    var tag = document.createElement('script');
    tag.innerHTML = code;
    document.body.appendChild(tag);
}

function getSource(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'text/javascript');

    xhr.onreadystatechange = function () {
        var status;

        if (xhr.readyState === xhr.DONE) {
            status = xhr.status;
            if ((status >= 200 && status < 300) || status === 304 || status === 0) {
                createTagScript(xhr.response);

                if (callback !== undefined) {
                    callback();
                }

                storage.setItem(url, xhr.response);

            }
        }
    };

    xhr.send();
}

selfstorage = {
    'use': function (file, callback) {

        if (storage.getItem(file) !== null) {
            createTagScript(storage.getItem(file));
            callback();
            return this;
        }

        getSource(file, callback);

        return this;
    },

    'get': function (key) {
        return storage.getItem(key);
    },

    'remove': function (key) {
        storage.removeItem(key);

        return this;
    },

    'clear': function () {
        storage.clear();

        return this;
    }
};

/**
 * Expose selfstorage
 */
exports = module.exports = selfstorage;