module.exports = function(api) {
    api.cache(true);
    
    const presets = [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ];
    const plugins = [
        '@babel/plugin-transform-duplicate-keys',
        '@babel/plugin-transform-flow-strip-types',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-export-default-from'
    ];
    return {
        presets,
        plugins
    };
};