

/**
 * Logger
 * Manages ho conformance logging
 * @class
 */
export default class Logger {
    /**
     * @constructs
     * @param opts <Object>
     */
    constructor( opts ) {

    }

    log() {
        console.log( ...arguments )
    }

    warn() {
        console.log( ...arguments )
    }

    error() {
        console.log( ...arguments )
    }

    verbose() {
        console.log( ...arguments )
    }

}
