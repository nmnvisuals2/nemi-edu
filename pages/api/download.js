import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      // Fetch the file from the URL
      const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream',  // Stream the file directly
      });

      // Extract filename from Content-Disposition header
      const disposition = response.headers['content-disposition'];
      let filename = 'downloaded_file';  // Default filename

      if (disposition && disposition.includes('filename=')) {
        filename = disposition
          .split('filename=')[1]
          .split(';')[0]
          .replace(/['"]/g, '');  // Extract filename and remove quotes
      } else {
        // Fallback to extracting from URL
        filename = url.split('/').pop();
      }

      // Set appropriate headers for the response
      res.setHeader('Content-Type', response.headers['content-type'] || 'application/octet-stream');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

      // Pipe the response data to the client
      response.data.pipe(res);

      response.data.on('end', () => {
        console.log('File streamed successfully.');
      });

      response.data.on('error', (err) => {
        console.error('Error streaming file:', err);
        res.status(500).json({ error: 'Error streaming file' });
      });
    } catch (error) {
      console.error('Error fetching file:', error.message);
      res.status(500).json({ error: 'Failed to download the file' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
