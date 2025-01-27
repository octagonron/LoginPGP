import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Lock, Copy, Download } from 'lucide-react';

const PGPKeyGenerator = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [error, setError] = useState('');

  const generateKeyMaterial = async (username, password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(username + password);
    return crypto.subtle.digest('SHA-256', data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const keyMaterial = await generateKeyMaterial(username, password);
      const keyArray = Array.from(new Uint8Array(keyMaterial));
      const keyBase64 = btoa(String.fromCharCode.apply(null, keyArray));
      
      const formattedKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: Rally Keygen 1.0\n\n${keyBase64}\n-----END PGP PUBLIC KEY BLOCK-----`;
      setGeneratedKey(formattedKey);
      setError('');
    } catch (err) {
      setError('Error generating key. Please try again.');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedKey);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const downloadKey = () => {
    const blob = new Blob([generatedKey], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${username}_rally_key.asc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <Card className="w-96 bg-black/30 backdrop-blur-lg border border-green-500/20 shadow-lg shadow-green-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
        
        <CardHeader className="space-y-2 text-center relative">
          <div className="flex justify-center">
            <Lock className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
            Rally Key Gen
          </h2>
        </CardHeader>
        
        <CardContent className="space-y-4 relative">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full bg-black/50 border border-green-500/30 rounded p-2 text-green-400 placeholder-green-700 focus:outline-none focus:border-green-400 text-sm"
              />
            </div>
            
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-black/50 border border-green-500/30 rounded p-2 text-green-400 placeholder-green-700 focus:outline-none focus:border-green-400 text-sm"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 p-2 rounded transition-colors duration-200"
            >
              Generate
            </button>
          </form>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {generatedKey && (
            <div className="space-y-2">
              <div className="bg-black/50 border border-green-500/30 rounded p-2 font-mono text-xs text-green-400 overflow-auto max-h-32">
                {generatedKey}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 px-2 py-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded text-green-400 text-sm transition-colors duration-200"
                >
                  <Copy className="w-3 h-3" /> Copy
                </button>
                
                <button
                  onClick={downloadKey}
                  className="flex items-center gap-1 px-2 py-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded text-green-400 text-sm transition-colors duration-200"
                >
                  <Download className="w-3 h-3" /> Save
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PGPKeyGenerator;
