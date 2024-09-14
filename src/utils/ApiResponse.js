class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 
        //setting standard for limiting the status code, > 400 would be server error and is handled by ApiError file  
    }
}

export { ApiResponse }