export default function handler(req, res) {
    res.statusCode = 200;
    res.status(200).json({ name: 'John Doe' })
  }
  