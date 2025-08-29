"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle file downloads
  const handleDownload = (fileType: string) => {
    setIsMenuOpen(false);

    // Create a temporary link element for downloading
    const link = document.createElement("a");

    if (fileType === "report") {
      link.href = "/documents/report.pdf"; 
      link.download = "Spam_Detection_Report.pdf";
    } else if (fileType === "ppt") {
      link.href = "/documents/Spam_Detection_Presentation.pptx"; 
      link.download = "Spam_Detection_Presentation.pptx";
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to redirect to GitHub
  const handleGitHubRedirect = () => {
    setIsMenuOpen(false);
    window.open("https://github.com/your-username/your-repo", "_blank"); // Replace with your repo URL
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-950 text-white relative">
      {/* Hamburger Menu */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 rounded-md bg-black hover:bg-gray-800 transition-colors"
          aria-label="Open menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg py-1 z-10">
            <button
              onClick={() => handleDownload("report")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
            >
              Report
            </button>
            <button
              onClick={() => handleDownload("ppt")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
            >
              PPT
            </button>
            <button
              onClick={handleGitHubRedirect}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
            >
              GitHub
            </button>
          </div>
        )}
      </div>

      {/* Close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          🛡️ Email Spam Detector
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Paste your email or message and instantly check if it's <br />
          <span className="text-blue-400 font-semibold">Spam</span> or{" "}
          <span className="text-green-400 font-semibold">Not Spam</span>.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push("/check")}
            className="px-8 py-4 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 transition-all font-semibold shadow-lg"
          >
            Start Checking Spam →
          </button>

          <button
            onClick={() => router.push("/ai")}
            className="px-8 py-4 text-lg rounded-xl bg-purple-600 hover:bg-purple-700 transition-all font-semibold shadow-lg"
          >
            Check Spam with AI →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mb-4">
        Made by <span className="text-white font-semibold">Adree & Ankit</span> | CST 3rd Year
      </footer>
    </main>
  );
}