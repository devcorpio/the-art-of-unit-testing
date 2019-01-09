function memCalculator() {
    /**
     * @type {number}
     */
    let sum = 0;

    /**
     * @param {number} number
     */
    function add(number) {
        sum += number;
    }

    /**
     * @return {number}
     */
    function result() {
        /**
         * @type {number};
         */
        const temp = sum;
        sum = 0;

        return temp;
    }
}

module.exports = memCalculator;
