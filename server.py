#!/usr/bin/env python3
"""
Simple HTTP Server for BAJWA ENTERPRISES LTD. Website
Serves the current directory on an available port and opens the browser.
"""
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
})

def find_open_port(start_port):
    port = start_port
    while port < start_port + 100:
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                return port
        except OSError:
            port += 1
    return start_port

if __name__ == "__main__":
    port = find_open_port(PORT)
    url = f"http://localhost:{port}"
    print(f"================================================================")
    print(f"  BAJWA ENTERPRISES LTD. - Agricultural Commodity Export Platform")
    print(f"  Serving live at: {url}")
    print(f"  Headquarters: Nampula, Mozambique | Maritime Port: Nacala Port")
    print(f"  Press Ctrl+C to stop the server.")
    print(f"================================================================")
    
    try:
        webbrowser.open(url)
    except Exception:
        pass

    with socketserver.TCPServer(("", port), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            sys.exit(0)
