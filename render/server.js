const WebSocket = require('ws');
const http = require('http');
const server = http.createServer(); // 需基于HTTP服务（适配Render的端口机制）
const wss = new WebSocket.Server({ server });

// 存储所有客户端连接
const clients = new Set();

// 监听连接
wss.on('connection', (ws) => {
  console.log('新客户端连接');
  clients.add(ws);

  // 接收并广播消息
  ws.on('message', (data) => {
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data); // 转发给所有客户端
      }
    });
  });

  // 断开连接清理
  ws.on('close', () => {
    console.log('客户端断开');
    clients.delete(ws);
  });

  ws.on('error', (err) => {
    console.error('连接错误:', err);
    clients.delete(ws);
  });
});

// 适配平台的端口（Render会自动分配PORT环境变量）
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`WebSocket服务运行在端口 ${PORT}`);
});
