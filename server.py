from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
from urllib.parse import parse_qs, urlparse

class RequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        # Define routes
        if path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            
            # Simple HTML response
            html = """
            <!DOCTYPE html>
            <html>
            <head>
                <title>Python Web Server</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f0f2f5;
                    }
                    .container {
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #1a73e8;
                    }
                    .api-link {
                        color: #1a73e8;
                        text-decoration: none;
                    }
                    .api-link:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to Python Web Server</h1>
                    <p>This is a simple web server built with Python's standard library.</p>
                    <p>Try our API endpoint: <a href="/api/hello" class="api-link">/api/hello</a></p>
                </div>
            </body>
            </html>
            """
            self.wfile.write(html.encode())
            
        elif path == '/api/hello':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            response = {
                'message': 'Hello from Python!',
                'status': 'success'
            }
            self.wfile.write(json.dumps(response).encode())
            
        else:
            self.send_response(404)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            response = {
                'error': 'Not Found',
                'status': 404
            }
            self.wfile.write(json.dumps(response).encode())

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, RequestHandler)
    print(f'Server running on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()