module.exports = {
    rules: {
        /**
         * 相同类型的 require 必须放在一起
         *
         * @category nodejs-and-commonjs
         * @reason 太严格了
         */
        'no-mixed-requires': 'off'
    }
};
