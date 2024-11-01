export const encryptContent = async (content, key) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(content));
    
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedContent = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );
    
    return {
      iv: Array.from(iv),
      content: Array.from(new Uint8Array(encryptedContent))
    };
  };
  
  export const decryptContent = async (encryptedData, key) => {
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: new Uint8Array(encryptedData.iv) },
      key,
      new Uint8Array(encryptedData.content)
    );
    
    const decoder = new TextDecoder();
    return JSON.parse(decoder.decode(decrypted));
  };  