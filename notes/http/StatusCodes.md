# HTTP Status Codes Reference

A comprehensive table listing all standard HTTP status codes, their names, and brief descriptions, organized by category (1xx, 2xx, 3xx, 4xx, 5xx). This table is based on standard HTTP specifications, including those from IETF (e.g., RFC 9110) and additional registered codes from IANA.

## 1xx Informational

| Status Code | Name | Description |
|-------------|------|-------------|
| 100 | Continue | Server received request headers, client should proceed with request body. |
| 101 | Switching Protocols | Server agrees to switch protocols as requested (e.g., WebSocket upgrade). |
| 102 | Processing | Server is processing request but not yet complete (WebDAV). |
| 103 | Early Hints | Server sends preliminary headers (e.g., preload resources) before final response. |

## 2xx Success

| Status Code | Name | Description |
|-------------|------|-------------|
| 200 | OK | Request succeeded, response contains requested data. |
| 201 | Created | Request fulfilled, new resource created. |
| 202 | Accepted | Request accepted for processing, but not completed. |
| 203 | Non-Authoritative Information | Response from a third-party source, not original server. |
| 204 | No Content | Request succeeded, no response body returned. |
| 205 | Reset Content | Request succeeded, client should reset form/view. |
| 206 | Partial Content | Partial resource returned due to range request. |
| 207 | Multi-Status | Multiple status codes for multiple operations (WebDAV). |
| 208 | Already Reported | Resource already reported in a previous binding (WebDAV). |
| 226 | IM Used | Response represents result of instance manipulation (Delta encoding). |

## 3xx Redirection

| Status Code | Name | Description |
|-------------|------|-------------|
| 300 | Multiple Choices | Multiple options for resource, client must choose. |
| 301 | Moved Permanently | Resource permanently moved to new URI. |
| 302 | Found | Resource temporarily moved, use new URI. |
| 303 | See Other | Redirect to another URI, typically using GET. |
| 304 | Not Modified | Resource unchanged since last request (conditional request). |
| 305 | Use Proxy | Resource accessible only through specified proxy (deprecated). |
| 307 | Temporary Redirect | Temporary redirect, preserve original method. |
| 308 | Permanent Redirect | Permanent redirect, preserve original method. |

## 4xx Client Error

| Status Code | Name | Description |
|-------------|------|-------------|
| 400 | Bad Request | Server cannot process due to client error (e.g., malformed syntax). |
| 401 | Unauthorized | Authentication required, client not authenticated. |
| 402 | Payment Required | Reserved, used for digital payment systems (rare). |
| 403 | Forbidden | Client authenticated but lacks permission. |
| 404 | Not Found | Resource not found on server. |
| 405 | Method Not Allowed | HTTP method not supported for resource. |
| 406 | Not Acceptable | Resource format not acceptable per client's headers. |
| 407 | Proxy Authentication Required | Client must authenticate with proxy. |
| 408 | Request Timeout | Client took too long to send request. |
| 409 | Conflict | Request conflicts with resource's state (e.g., edit conflict). |
| 410 | Gone | Resource permanently removed, no forwarding address. |
| 411 | Length Required | Content-Length header missing for request. |
| 412 | Precondition Failed | Precondition in request headers (e.g., If-Match) failed. |
| 413 | Payload Too Large | Request body exceeds server limits. |
| 414 | URI Too Long | Request URI exceeds server limits. |
| 415 | Unsupported Media Type | Request body format not supported. |
| 416 | Range Not Satisfiable | Requested range cannot be fulfilled. |
| 417 | Expectation Failed | Server cannot meet Expect header requirements. |
| 418 | I'm a teapot | April Fools' joke (HTCPCP), not implemented by servers. |
| 421 | Misdirected Request | Request sent to server unable to handle it (e.g., wrong domain). |
| 422 | Unprocessable Entity | Request well-formed but semantically invalid (WebDAV). |
| 423 | Locked | Resource locked, access denied (WebDAV). |
| 424 | Failed Dependency | Request failed due to failure of a previous request (WebDAV). |
| 425 | Too Early | Server unwilling to process request that might be replayed. |
| 426 | Upgrade Required | Client must use upgraded protocol (e.g., TLS). |
| 428 | Precondition Required | Request requires conditional headers (e.g., If-Match). |
| 429 | Too Many Requests | Client sent too many requests (rate limiting). |
| 431 | Request Header Fields Too Large | Headers exceed server limits. |
| 451 | Unavailable For Legal Reasons | Resource blocked due to legal restrictions. |

## 5xx Server Error

| Status Code | Name | Description |
|-------------|------|-------------|
| 500 | Internal Server Error | Generic server error, no specific cause. |
| 501 | Not Implemented | Server does not support requested functionality. |
| 502 | Bad Gateway | Upstream server sent invalid response. |
| 503 | Service Unavailable | Server temporarily unavailable (e.g., maintenance). |
| 504 | Gateway Timeout | Upstream server failed to respond in time. |
| 505 | HTTP Version Not Supported | Server does not support requested HTTP version. |
| 506 | Variant Also Negotiates | Server configuration error in content negotiation. |
| 507 | Insufficient Storage | Server lacks storage to complete request (WebDAV). |
| 508 | Loop Detected | Server detected infinite loop in request (WebDAV). |
| 510 | Not Extended | Server requires further extensions to fulfill request. |
| 511 | Network Authentication Required | Client must authenticate to access network (e.g., captive portal). |

---

This table includes all standard HTTP status codes registered with IANA as of the latest specifications, covering RFCs like 9110, 7231, and extensions like WebDAV. Some codes (e.g., 418) are non-serious, while others (e.g., 305) are deprecated but included for completeness.