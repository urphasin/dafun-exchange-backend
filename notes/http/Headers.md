# Custom HTTP Headers Guide - Express.js & TypeScript

## What is Content-Type?

**Definition**: The Content-Type HTTP header specifies the media type (MIME type) of the data in the request or response body.

**Purpose**: It tells the client (e.g., browser, API consumer) how to interpret the body (e.g., as JSON, HTML, or PDF).

**Example**:
In your Express route:
```typescript
res.status(200).json({ status: "ok" });
```
`res.json()` automatically sets `Content-Type: application/json`, indicating the body is JSON (`{"status":"ok"}`).

**Other common values**:
- `text/plain`: Plain text
- `text/html`: HTML document
- `application/pdf`: PDF file

**In Your Project**: Your use of `res.json()` in routes (e.g., `/health` or Mongoose queries) relies on `Content-Type: application/json` to ensure clients parse the response as JSON.

## What is X-Custom and What Does the X- Mean?

**Definition**: X-Custom is an example of a custom HTTP header, where `X-` is a conventional prefix used to denote non-standard, application-specific headers.

### What is the X- About?

**Historical Context**:
- The `X-` prefix originated in the early days of HTTP to mark experimental or extension headers not part of the official HTTP specification (RFC 7231).
- It was used to avoid naming collisions with future standard headers (e.g., Content-Type, Authorization).
- Example: `X-Forwarded-For`, `X-API-Key`, or `X-Custom` were used for proxy, authentication, or app-specific metadata.

**Modern Status**:
- The `X-` prefix is no longer strictly required or recommended. RFC 6648 (2012) deprecated it, encouraging custom headers to use meaningful names without `X-` (e.g., `API-Key` instead of `X-API-Key`).
- However, `X-` is still widely used in practice due to legacy systems and convention, especially in APIs.
- Example: Many APIs use `X-Request-ID` for tracing or `X-Custom` for proprietary metadata.

### Why Use X-?

- **Clarity**: Signals the header is non-standard, helping developers understand it's specific to your application or middleware.
- **Compatibility**: Avoids conflicts with standard headers or future HTTP specs.
- **Flexibility**: Allows you to pass metadata (e.g., versioning, debugging info) not covered by standard headers.

### Example in Express:

```typescript
app.get('/health', (req: Request, res: Response) => {
  res.set('X-Custom', 'MyApp-v1.0').status(200).json({ status: "ok" });
});
```

**Response Headers**:
```
Content-Type: application/json
X-Custom: MyApp-v1.0
```

**Use Case**: `X-Custom: MyApp-v1.0` might indicate the API version or environment for debugging or client tracking.

### In Your Project:

You might use X-Custom headers in your Express routes to:
- Pass metadata (e.g., `X-Request-ID` for logging MongoDB queries).
- Identify your backend version or environment (e.g., `X-Custom: dev`).
- Support custom client requirements (e.g., `X-Custom: tenant-id` for multi-tenancy).

**Example with Mongoose**:
```typescript
app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  res.set('X-Custom', `User-Query-${req.params.id}`).status(200).json({ status: "ok", data: user });
});
```

## Key Differences and Usage

| Header | Purpose | Standard? | Example Value |
|--------|---------|-----------|---------------|
| Content-Type | Specifies the media type of the body | Yes | application/json, text/html |
| X-Custom | Application-specific metadata or extensions | No | MyApp-v1.0, Request-ID-123 |

### Content-Type:
- **Standardized**: Defined in HTTP/1.1 (RFC 7231) and MIME specs.
- **Required for Bodies**: Essential for responses with data (e.g., JSON, HTML).
- **Set Automatically**: By `res.json()` in Express, or manually via `res.type()` or `res.set('Content-Type', 'value')`.

### X-Custom:
- **Non-Standard**: Application-defined, often with `X-` to mark as custom (though deprecated per RFC 6648).
- **Optional**: Used for extra context (e.g., debugging, versioning, or client-specific info).
- **Set Manually**: Via `res.set('X-Custom', 'value')` or `res.header('X-Custom', 'value')` in Express.

## Why X- Still Matters

- **Legacy**: Many APIs and tools (e.g., proxies, load balancers) expect `X-` headers (e.g., `X-Forwarded-For` in Nginx).
- **Convention**: Developers recognize `X-` as custom, reducing confusion (e.g., `X-Custom` vs. a standard-sounding `Custom`).
- **Your Project**: If you're building an API, you might use `X-Custom` for:
  - Logging request metadata with Mongoose queries.
  - Passing client-specific info (e.g., `X-Custom: user-agent-data`).
  - Debugging your Express server in development (`ts-node-dev --watch src/**/*.ts`).

## Modern Alternatives to X-

Per RFC 6648, you can omit `X-` for custom headers:

```typescript
res.set('App-Version', '1.0').json({ status: "ok" }); // Instead of X-App-Version
```

**Pros**: Cleaner, aligns with modern standards.
**Cons**: Risk of future collisions with new standard headers, less immediate recognition as custom.
**Your Choice**: Stick with `X-` for clarity or use plain names if you control the API and clients.

## What is the Point of a Custom Header?

Custom HTTP headers serve to extend HTTP communication by passing additional information between client and server, tailored to your application's needs.

### Key Purposes

#### 1. Metadata for Debugging or Logging:
Custom headers can include info to track or debug requests, such as request IDs or environment details.

**Example**:
```typescript
res.set('X-Request-ID', 'abc123').status(200).json({ status: "ok" });
```
Logs on the server or client can correlate `X-Request-ID` to trace a request's lifecycle (e.g., through MongoDB queries).

#### 2. API Versioning or Configuration:
Indicate the API version, feature flags, or environment to clients.

**Example**:
```typescript
res.set('X-API-Version', '1.0.0').json({ status: "ok" });
```
Clients can adjust behavior based on the version (e.g., deprecated endpoints).

#### 3. Client-Specific Context:
Pass data like tenant IDs, user preferences, or session metadata for multi-tenant or personalized APIs.

**Example**:
```typescript
app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  res.set('X-Tenant-ID', req.headers['tenant-id'] || 'default').json({ data: user });
});
```
Useful for SaaS apps or microservices.

#### 4. Middleware or Proxy Communication:
Share info with proxies, load balancers, or middleware (e.g., `X-Forwarded-For` for client IP in Nginx).

**Example**:
```typescript
app.use((req, res, next) => {
  res.set('X-Processed-By', 'Middleware-v1').next();
});
```
Helps track which middleware processed the request.

#### 5. Feature Toggles or Experiments:
Signal A/B testing groups or feature rollouts to clients.

**Example**:
```typescript
res.set('X-Experiment-Group', 'B').json({ status: "ok" });
```
Clients (e.g., a frontend) can render different UI based on the group.

#### 6. Security or Authentication Metadata:
Include tokens, rate-limiting info, or CSRF markers (though sensitive data is better in Authorization).

**Example**:
```typescript
res.set('X-Rate-Limit-Remaining', '99').json({ status: "ok" });
```
Informs clients of API quota status.

### Why Use Custom Headers?

- **Flexibility**: HTTP headers are a standard way to pass metadata without altering the response body (e.g., `{"status":"ok"}` stays clean).
- **Interoperability**: Clients, proxies, and servers understand headers, making them universal for metadata.
- **Separation of Concerns**: Keep payload data (body) separate from operational metadata (headers).
- **Non-Invasive**: Headers don't affect the core response data, so clients can ignore unknown headers.

## In Your Project Context

Your Setup: Your Express backend (`src/server.ts`, `ts-node-dev --watch src/**/*.ts`) with Mongoose/MongoDB likely uses `res.status(200).json({ status: "ok" })` in routes. Custom headers can enhance your API's functionality.

### Use Cases:

#### Logging Mongoose Queries:
```typescript
app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  res.set('X-Query-Time', `${Date.now() - startTime}ms`).json({ status: "ok", data: user });
});
```
Tracks query performance for debugging.

#### API Health Check:
```typescript
app.get('/health', async (req: Request, res: Response) => {
  await mongoose.connection.db.admin().ping();
  res.set('X-Server-Env', process.env.NODE_ENV || 'dev').json({ status: "ok" });
});
```
Indicates environment (dev, prod) to monitoring tools.

#### Client Metadata:
```typescript
res.set('X-User-ID', req.user?.id || 'anonymous').json({ status: "ok" });
```
Passes user context to frontend or other services.

**TypeScript**: With `@types/express`, `res.set()` is type-safe:
```typescript
res.set('X-Custom', 'value').status(200).json({ status: "ok" }); // OK
```

## Testing in Your Project

To see Content-Type and X-Custom in action:

```typescript
import { Request, Response } from 'express';

app.get('/test', (req: Request, res: Response) => {
  res.set('X-Custom', 'Test-Value').status(200).json({ status: "ok" });
});
```

1. Run `npm run dev` (`ts-node-dev --watch src/**/*.ts src/server.ts`).
2. Test with curl:
```bash
curl -i http://localhost:3000/test
```

**Expected output**:
```
HTTP/1.1 200 OK
X-Custom: Test-Value
Content-Type: application/json; charset=utf-8
...
{"status":"ok"}
```

## Considerations

- **Naming**: Use `X-` (e.g., `X-Custom`) for clarity or omit it (e.g., `Custom`) per RFC 6648. `X-` is still common for legacy and recognition.
- **Size**: Headers add overhead to HTTP requests/responses, so avoid large or numerous custom headers.
- **Security**: Don't put sensitive data (e.g., passwords) in headers; use Authorization or body for secrets.
- **Client Support**: Ensure clients (e.g., frontend, Postman) can read and use your custom headers.

## Alternatives to Custom Headers

### Response Body:
Include metadata in the JSON body:
```typescript
res.json({ status: "ok", meta: { requestId: "abc123" } });
```
**Pros**: Simpler for clients to parse.
**Cons**: Mixes data with metadata, less standard for operational info.

### Query Params or URL:
For requests, metadata can go in URLs (e.g., `/api?requestId=abc123`), but this doesn't apply to responses.

### Cookies:
For client-side storage, but less suited for transient metadata.

### Why Custom Headers Over Alternatives?

- **Standardized**: Headers are part of HTTP, understood by all HTTP clients and servers.
- **Non-Invasive**: Clients can ignore unknown headers without breaking.
- **Operational Focus**: Headers are ideal for metadata (e.g., logging, versioning) vs. payload data.

## Final Answer

**Point of Custom Headers**: They allow you to pass application-specific metadata (e.g., request IDs, API versions, debugging info) in HTTP requests/responses, extending functionality beyond standard headers like Content-Type.

**Examples**: `X-Request-ID` for logging, `X-API-Version` for versioning, `X-Tenant-ID` for multi-tenancy.

**Your Project**: In your Express/TypeScript backend, use `res.set('X-Custom', 'value')` to add metadata to routes (e.g., query timing for Mongoose, environment for `/health`). Test with `curl -i` to verify headers alongside `Content-Type: application/json` from `res.json()`.

**Why X-?**: Historically marks non-standard headers, still used for clarity despite RFC 6648 deprecation.