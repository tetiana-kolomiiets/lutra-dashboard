import { useEffect, useRef, useState, useCallback } from 'react';

/**
 *
 * @param {string} url - WebSocket server URL
 * @returns {
 *   sendMessage: (msg: string) => void,
 *   lastMessage: string | null,
 *   readyState: number,
 *   error: Event | null
 * }
 */
function useWebSocket(url) {
  const ws = useRef(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [readyState, setReadyState] = useState(WebSocket.CLOSED);
  const [error, setError] = useState(null);

  // Connect and handle events
  useEffect(() => {
    if (!url) return;
    ws.current = new window.WebSocket(url);
    setReadyState(ws.current.readyState);

    ws.current.onopen = () => setReadyState(ws.current.readyState);
    ws.current.onclose = () => setReadyState(ws.current.readyState);
    ws.current.onerror = (e) => setError(e);
    ws.current.onmessage = (event) => setLastMessage(event.data);

    return () => {
      ws.current && ws.current.close();
    };
  }, [url]);

  // Send message
  const sendMessage = useCallback((msg) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(msg);
    }
  }, []);

  return { sendMessage, lastMessage, readyState, error };
}

export default useWebSocket; 