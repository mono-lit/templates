/**
 * Mint the fake session JWT for the mock login. It is UNSIGNED — nothing ever
 * verifies the signature (there is no auth server; the route guards only check
 * the cookie exists) — but it keeps mono-utils' `isJwt` shape
 * (`<header>.<payload>.<signature>`, base64url) so `monoJwt()` / `monoState().jwt`
 * decode it like any real token.
 *
 * Payload: the mock user's `ID` / `USERNAME` / `NAME` plus `iat` / `exp`.
 */
export function createMockJwtHost(
    { id, username, name }: { id: number | string; username: string; name: string },
    lifetimeHours = 8,
): string {
    const toBase64Url = (input: object) => {
        const bytes = new TextEncoder().encode(JSON.stringify(input))
        let binary = ''
        bytes.forEach((byte) => (binary += String.fromCharCode(byte)))
        // No padding: mono-utils' `isJwt` regex allows `=` only in the signature.
        return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    }

    const issuedAt = Math.floor(Date.now() / 1000)

    const header = { alg: 'none', typ: 'JWT' }
    const payload = {
        ID: id,
        USERNAME: username,
        NAME: name,
        iat: issuedAt,
        exp: issuedAt + lifetimeHours * 3600,
    }

    return `${toBase64Url(header)}.${toBase64Url(payload)}.mock-signature`
}
