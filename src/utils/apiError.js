// a custom error class for your API, so you can throw errors with an HTTP status code and a consistent response shape.

class ApiError extends Error{ // class ApiError extends Error ---> Creates a new class ApiError that inherits from JavaScript’s built-in Error class
    constructor(
        statusCode, // statusCode: HTTP code you want (e.g. 400, 401, 404, 500)
        message="Something went wrong", // message: human-readable error message (defaults to "Something went wrong")
        error=[], // error: extra details (defaults to empty array). Often used for validation errors, field errors, etc.
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.error=error
        this.name="ApiError" // this will change error name to ApiError
    }
}