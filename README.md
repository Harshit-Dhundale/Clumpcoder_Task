# Certificate Manager - MERN Stack Application

A complete certificate management system built with MongoDB, Express.js, React.js, and Node.js.

## Features

- **Category Management**: Create and manage certificate categories
- **Question Management**: Add questions linked to specific categories
- **Real-time Updates**: Instant UI updates after form submissions
- **Responsive Design**: TailAdmin-inspired modern UI
- **Error Handling**: Comprehensive error handling with toast notifications
- **Data Validation**: Server-side validation using Joi

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB Atlas with Mongoose ODM
- Joi validation
- CORS enabled
- Environment variables support

### Frontend
- React.js with Context API
- Tailwind CSS for styling
- Axios for API calls
- React Hot Toast for notifications
- Responsive design

## Database Schema

### CertificateCategories Collection
\`\`\`javascript
{
  _id: ObjectId,
  name: String (required, unique, min: 3 chars),
  createdAt: Date (default: now)
}
\`\`\`

### Questions Collection
\`\`\`javascript
{
  _id: ObjectId,
  text: String (required, min: 10 chars),
  category: ObjectId (ref: CertificateCategories),
  createdAt: Date (default: now)
}
\`\`\`

## API Endpoints

### Categories
- `POST /api/categories` - Create new category
- `GET /api/categories` - Get all categories

### Questions
- `POST /api/questions` - Create new question
- `GET /api/questions` - Get all questions with populated category data

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Backend Setup
1. Navigate to server directory:
   \`\`\`bash
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create `.env` file:
   \`\`\`env
   MONGODB_URI=mongodb+srv://deathdevoe:ZZkKszeOdrmQLmEl@nexus.jzny8.mongodb.net/certificate-manager?retryWrites=true&w=majority&appName=Nexus
   PORT=5000
   NODE_ENV=development
   \`\`\`

4. Start the server:
   \`\`\`bash
   npm run dev
   \`\`\`

### Frontend Setup
1. Navigate to client directory:
   \`\`\`bash
   cd client
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create `.env` file:
   \`\`\`env
   REACT_APP_API_URL=http://localhost:5000/api
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account at https://cloud.mongodb.com
2. Create a new cluster
3. Create a database user with read/write permissions
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and update the `.env` file

## Deployment

### Backend Deployment (Render/Railway)
1. Create a new web service
2. Connect your GitHub repository
3. Set environment variables:
   - `MONGODB_URI`
   - `NODE_ENV=production`
4. Deploy from the `/server` directory

### Frontend Deployment (Vercel/Netlify)
1. Create a new project
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Set environment variable:
   - `REACT_APP_API_URL=https://your-backend-url.com/api`

## Postman Testing

### Create Category
\`\`\`
POST {{baseUrl}}/api/categories
Content-Type: application/json

{
  "name": "Web Development"
}
\`\`\`

### Get All Categories
\`\`\`
GET {{baseUrl}}/api/categories
\`\`\`

### Create Question
\`\`\`
POST {{baseUrl}}/api/questions
Content-Type: application/json

{
  "text": "What is the difference between let and var in JavaScript?",
  "category": "{{categoryId}}"
}
\`\`\`

### Get All Questions
\`\`\`
GET {{baseUrl}}/api/questions
\`\`\`

## Project Structure

\`\`\`
certificate-manager/
├── server/
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   └── validation.js
│   ├── models/
│   │   ├── CertificateCategory.js
│   │   └── Question.js
│   ├── routes/
│   │   ├── categories.js
│   │   └── questions.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard/
    │   │   ├── Forms/
    │   │   ├── Layout/
    │   │   └── Lists/
    │   ├── context/
    │   │   └── AppContext.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   └── index.js
    ├── .env
    ├── package.json
    └── tailwind.config.js
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
