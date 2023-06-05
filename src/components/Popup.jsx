
import React, { useState } from 'react';
import Head from 'next/head';

export default function HomeP() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Head>
        <title>Pop-up Example</title>
        <link rel="stylesheet" href="/styles/styles.css" />
      </Head>

      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={togglePopup}
        >
          Show Pop-up
        </button>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Pop-up Content</h2>
              <p>This is a pop-up with Tailwind CSS!</p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={togglePopup}
              >
                Close Pop-up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
