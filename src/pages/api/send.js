// pages/api/send.js

import dbConnect from '../../lib/mongodb';
import Email from '../../models/Email';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { email, subject, message } = req.body;

      
        if (!email || !subject || !message) {
          return res.status(400).json({ success: false, error: 'All fields are required.' });
        }

        
        const newEmail = await Email.create({
          email,
          subject,
          message,
        });

        res.status(201).json({ success: true, data: newEmail });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: 'Invalid request data.' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
