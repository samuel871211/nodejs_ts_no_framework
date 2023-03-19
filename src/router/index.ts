import { Server } from 'http';

export default addRouter;

function addRouter (server: Server) {
  server.on('request', (req, res) => {
    switch (req.url) {
      case '/taskStatus':
        return
    }
  });
}