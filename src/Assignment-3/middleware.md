## Middleware 
Middleware in Node.js refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
These functions are executed sequentially, forming a chain that processes incoming requests before they reach their final destination (like a route handler) and can also handle outgoing responses. 

## Use Cases of Middleware in Node.js:
- Authentication and Authorization
- Logging
- Request Body Parsing
- Error Handling
- Data Validation
- Setting HTTP Headers