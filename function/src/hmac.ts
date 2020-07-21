const enc = new TextEncoder()

async function generateKey(): Promise<CryptoKey> {
  return window.crypto.subtle.importKey(
    'raw',
    enc.encode(process.env.REACT_APP_CLUSTER_HMAC),
    {
      name: 'HMAC',
      hash: {name: 'SHA-256'}
    },
    false,
    ['sign']
  )
}

export async function sign(message: string): Promise<string> {
  const sigBuffer = await window.crypto.subtle.sign(
    'HMAC',
    await generateKey(),
    enc.encode(message),
  )
  const sigByteArray = Array.from(new Uint8Array(sigBuffer))
  return sigByteArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}
