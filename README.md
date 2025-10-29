# 👕 LoreZone - Outfit Recommendation System

**LoreZone** is an intelligent, full-stack outfit recommendation platform built using **React.js**, **Node.js**, and **Express**.  
It provides personalized clothing suggestions based on user preferences and characteristics, while also showcasing trending outfits and connecting fashion designers with job opportunities.

---

## 🚀 Features

- 🎯 **Personalized Outfit Recommendations**  
  Suggests the best outfit combinations based on user inputs like:
  - Gender
  - Height
  - Skin tone
  - Budget
  - Occasion (e.g., festival, party, casual)

- 🌍 **Location-Based Trends**  
  Displays trending outfit styles depending on the user’s city or region.

- 🛍️ **Real-Time Offers Integration**  
  Aggregates and shows current clothing deals from major platforms such as:
  - Meesho
  - Flipkart
  - Amazon

- ☁️ **AWS S3 Image Storage**  
  All outfit and product images are securely stored in **Amazon S3** for fast access and scalability.

- 👩‍🎨 **Fashion Designer Job Portal**  
  A dedicated portal for fashion designers to explore job opportunities in the fashion industry.

- 💻 **Separate Frontend and Backend Architecture**  
  The project is modular, with independent `frontend` and `backend` folders.

- 📱 **Responsive and Modern UI**  
  Designed for mobile and desktop users with a smooth and interactive experience.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend** | React.js, HTML, CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB / MySQL |
| **Cloud Storage** | AWS S3 Bucket |
| **Version Control** | Git & GitHub |

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Arpenaboyina/LoreZone.git

# Navigate into the project folder
cd LoreZone

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Start the frontend
npm start

# Start the backend server
node server.js
