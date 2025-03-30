const db = require("../config/db");

class Post {
  static async getTopLikedPost(filters) {
    const { skin_tone, height, gender, body_type, occasion, theme } = filters;

    const query = `
      SELECT * FROM posts 
      WHERE skin_tone = ? AND height = ? AND gender = ? 
      AND body_type = ? AND occasion = ? AND theme = ?
      ORDER BY likes_count DESC
      LIMIT 1
    `;

    try {
      const [rows] = await db.execute(query, [
        skin_tone,
        height,
        gender,
        body_type,
        occasion,
        theme,
      ]);
      return rows[0] || null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Post;
