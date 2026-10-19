from http.server import HTTPServer, BaseHTTPRequestHandler

class MeuServidor(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain; charset=utf-8')
        self.end_headers()
        self.wfile.write('Olá mundo do Python!'.encode('utf-8'))

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain; charset=utf-8')
        self.end_headers()
        self.wfile.write('O Post deve retornar Olá mundo do POST!'.encode('utf-8'))

# Roda o servidor na porta 3001
servidor = HTTPServer(('localhost', 3001), MeuServidor)
print('Servidor Python rodando na porta 3001!')
servidor.serve_forever()