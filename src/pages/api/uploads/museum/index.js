// pages/api/uploads/museum.js
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Matikan agar formidable bisa ambil stream
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const uploadDir = path.join(process.cwd(), '/public/uploads/museum');
      await fs.mkdir(uploadDir, { recursive: true }); // Buat folder jika belum ada
      
      const form = formidable({
        uploadDir,
        keepExtensions: true,
        filename: (name, ext, part) => {
          return Date.now() + '_' + part.originalFilename.replace(/\s/g, '_');
        },
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Upload error:', err);
          return res.status(500).json({ success: false, message: 'Upload failed' });
        }

        const file = files.file?.[0] || files.file;
        if (!file) {
          return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const relativePath = path.relative(path.join(process.cwd(), 'public'), file.filepath);

        return res.status(201).json({
          success: true,
          message: 'Upload successful',
          path: '/' + relativePath.replace(/\\/g, '/'), // Windows fix
        });
      });
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
