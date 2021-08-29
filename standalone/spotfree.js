function sleep(time) {
    new Promise(resolve =>
        setTimeout(resolve, time)
    );
}

const webpack = {
    getModule(filter, retry = true, forever = false) {
        if (Array.isArray(filter)) {
            const keys = filter;
            filter = m => keys.every(key => m.hasOwnProperty(key) || (m.__proto__ && m.__proto__.hasOwnProperty(key)));
        }

        if (!retry) {
            return webpack._getModules(filter);
        }
    },

    /**
       * Initializes the injection into Webpack
       * @returns {Promise<void>}
       */
    async init() {
        delete webpack.init;

        // Wait until webpack is ready
        while (!window.webpackJsonp) {
            await sleep(1e3);
        }

        // Extract values from webpack
        const instance = webpackJsonp.push([
            [],
            {
                _powercord: (_, e, r) => {
                    e.cache = r.c;
                    e.require = r;
                }
            },
            [['_powercord']]
        ]);
        delete instance.cache._powercord;
        webpack.instance = instance;
    },

    _getModules(filter, all = false) {
        const moduleInstances = Object.values(webpack.instance.cache).filter(m => m.exports);
        if (all) {
            const exports = moduleInstances.filter(m => filter(m.exports)).map(m => m.exports);
            const expDefault = moduleInstances.filter(m => m.exports.default && filter(m.exports.default)).map(m => m.exports.default);
            return exports.concat(expDefault);
        }

        const exports = moduleInstances.find(m => filter(m.exports));
        if (exports) {
            return exports.exports;
        }
        const expDefault = moduleInstances.find(m => m.exports.default && filter(m.exports.default));
        if (expDefault) {
            return expDefault.exports.default;
        }
        return null;
    }
};

webpack.init()
let spotify = webpack.getModule(
    ["isSpotifyPremium"],
    false
)

spotify.isSpotifyPremium = () => {
    console.log("yes! you are totally premium!")
    return true;
};

spotify.ensureSpotifyPremium = () => {
    return Promise.resolve();
}
