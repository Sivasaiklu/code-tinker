import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About CodeTinker</h2>
      <p>
        <strong>CodeTinker</strong> is a web-based code editor that allows you to write and preview HTML, CSS, and JavaScript in real time. 
        It provides an interactive and beginner-friendly platform for experimenting with web development concepts.
      </p>

      <h4 className="mt-4">✨ Features:</h4>
      <ul>
        <li>📝 Live code editing for HTML, CSS, and JavaScript</li>
        <li>🔍 Real-time preview of your code</li>
        <li>📂 Download your project files as a ZIP</li>
        <li>🔄 Reset code with a single click</li>
        <li>🎨 User-friendly interface for beginners and professionals</li>
      </ul>

      <h4 className="mt-4">🚀 How to Use:</h4>
      <ol>
        <li>Select the language (HTML, CSS, or JavaScript) from the navigation.</li>
        <li>Write your code in the editor.</li>
        <li>See the live preview on the right side.</li>
        <li>Download your code as a ZIP file for future use.</li>
      </ol>

      <h4 className="mt-4">📢 About the Developer:</h4>
      <p>
        This project was built using React and aims to make coding fun and accessible. If you have suggestions or feedback, feel free to contribute!
      </p>
    </div>
  );
}

export default About;
