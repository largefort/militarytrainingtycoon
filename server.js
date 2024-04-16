const express = require('express');
const http = require('http');
const { Server } = require('colyseus');

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Attach WebSocket server to HTTP server
const gameServer = new Server({
  server,
});

// Define a room handler
class MyRoom extends Room {
  onCreate(options) {
    this.setState({
      players: {},
    });
  }

  onJoin(client, options) {
    // Add player to state
    this.state.players[client.sessionId] = { /* player data */ };
  }

  onLeave(client, consented) {
    // Remove player from state
    delete this.state.players[client.sessionId];
  }

  onMessage(client, message) {
    // Handle incoming messages from clients
  }

  onDispose() {
    // Cleanup code when room is disposed
  }
}

// Register the room
gameServer.define('my_room', MyRoom);

// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
