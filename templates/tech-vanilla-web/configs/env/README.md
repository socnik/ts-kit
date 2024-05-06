# .env variables

## How add variable?

First, declare variable with development value in `.env`. Add `VITE_` prefix to variable name.

**Example:**

```dotenv
VITE_API_TOKEN = "abcd1234qwerty"
```

And, add variable declaration to `dotenv.d.ts`.

**Example:**

```typescript
interface ImportMetaEnv {
  readonly VITE_API_TOKEN: string
}
```
