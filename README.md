# Dexfense Backend Server

**🎯 Game State Validation & Authentication Hub for Dexfense Ecosystem**

_Secure backend infrastructure handling user management, game validation, and real-time communication for the Dexfense GameFi protocol_

  </div>

---

## 🎯 Overview

**Dexfense Backend Server** is a Node.js + TypeScript-based REST API and WebSocket server that serves as the core backend infrastructure for the Dexfense ecosystem. It securely handles all off-chain logic of the GameFi protocol, from game state validation to user authentication and real-time communication.

### 🎮 Key Responsibilities

- **🔐 JWT Authentication System**: User login/signup and token-based authorization management
- **🎯 Game State Validation**: Game progress tracking and result verification
- **📡 Real-time Communication**: Game event broadcasting via WebSocket
- **🗄️ Data Management**: User/game/pool data management through PostgreSQL + Prisma

## 📦 Repository Role

The Dexfense ecosystem consists of 3 repositories, and **this backend server** performs the following core functions:

### 🎮 **Game State Validation & Management**

- Track game start/progress/completion states
- Validate card selection and wave progression logic
- Store game results and analyze statistics
- Calculate Dynamic Adjustment Factor (DAF) for difficulty balancing

### 🔐 **JWT Authentication & User Management**

- Wallet address-based signup/login
- Password security through argon2 encryption
- Role-based access control (USER/ADMIN)
- Track user token balances

### 📡 **Real-time WebSocket Communication**

- Broadcast high-kill notifications (≥400 kills)
- Real-time game progress updates
- Community event notifications

### 🗄️ **Database Management**

- Store user profiles and game records
- Manage liquidity pool states and swap history
- Collect game performance metrics and analytics data

### 📁 Project Structure

```
Dexfense-backend/
├── src/
│   ├── server.ts              # 🚀 Entry point (HTTP + WebSocket)
│   ├── app.ts                 # 📋 Express app & route initialization
│   ├── config/
│   │   └── env.ts            # ⚙️ Environment configuration
│   ├── middleware/
│   │   ├── auth.middleware.ts      # 🔐 JWT verification
│   │   └── requireAdmin.ts         # 👑 Admin role check
│   ├── routes/
│   │   ├── user.routes.ts         # 👤 User route
│   │   ├── code.routes.ts         # 🎫 Code route
│   │   ├── pool.routes.ts         # 💧 Pool route
│   │   └── game.routes.ts         # 🎮 Game route
│   ├── controllers/
│   │   ├── user.controller.ts     # User request handlers
│   │   ├── code.controller.ts     # Code handlers
│   │   ├── pool.controller.ts     # Pool handlers
│   │   └── game.controller.ts     # Game handlers
│   ├── services/
│   │   ├── user.service.ts        # User business logic
│   │   ├── code.service.ts        # Code logic
│   │   ├── pool.service.ts        # Pool & swap logic
│   │   └── game.service.ts        # Game logic
│   ├── utils/
│   │   └── generateJWT.ts         # JWT generation utility
│   └── socketManager.ts           # 📡 WebSocket manager
├── prisma/
│   └── schema.prisma              # 🗄️ Database schema
└── package.json
```

###
