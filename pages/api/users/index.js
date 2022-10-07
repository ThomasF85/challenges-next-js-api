export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = [];
    return;
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
