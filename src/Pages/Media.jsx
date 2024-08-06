import React from 'react';
import InstagramPosts from '../Components/InstagramPosts';

const Media = () => {
  const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Instagram Feed</h1>
      <InstagramPosts accessToken={accessToken} />
    </div>
  );
};

export default Media;
