# 🌟 Neon Login Interface

A cyberpunk-styled login interface with glowing neon accents.

![Preview of login interface](login-preview.png)

## 🚀 Quick Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/neon-login.git

# Navigate to project directory
cd neon-login

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your app!

## 📁 Project Structure
```
neon-login/
├── public/
│   ├── login-bg.png       # Login background
│   └── signup-bg.png      # Signup background
├── src/
│   ├── app/
│   │   └── page.js        # Main page
│   └── components/
│       └── LoginForm.js   # Login component
├── package.json
└── README.md
```

## 📦 Dependencies

## 🎨 Features
- Sleek neon design
- Responsive layout
- Easy to customize
- Dark mode optimized

## 📱 Usage
1. Place your background images in the `public` folder
2. Update the image paths in `LoginForm.js`:
```javascript
style={{ backgroundImage: 'url("/your-image.png")' }}
```

3. Customize text and colors in the component:
```javascript
// In LoginForm.js
<h1 className="text-4xl font-bold text-white">Your Title</h1>
```

## 🛠️ Development

Want to contribute? Great!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -am 'Add something amazing'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 💫 Customization

Edit styles in `LoginForm.js`:
```javascript
// Change background
className="min-h-screen bg-cover bg-center"

// Modify input fields
className="w-full bg-black/50 border border-green-500/30"

// Update button styles
className="w-full bg-black/50 text-white"
```

## 📄 License
MIT

## 🤝 Contributing
1. Fork it
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request
