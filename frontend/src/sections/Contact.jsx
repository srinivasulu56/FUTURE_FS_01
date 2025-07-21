import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Contact = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [suggestion, setSuggestion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      rating,
      suggestion,
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://future-fs-01-3.onrender.com/api/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setRating(0);
        setSuggestion("");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        console.error("Server response:", errorData);
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
        {/* Star Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <button
                type="button"
                key={index}
                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              >
                <FaStar
                  size={24}
                  color={
                    currentRating <= (hover || rating)
                      ? "#ffc107"
                      : "#e4e5e9"
                  }
                />
              </button>
            );
          })}
        </div>

        {/* Suggestion */}
        <textarea
          placeholder="Suggestions for improvement"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="p-2 rounded bg-[#1f2937] text-white focus:outline-none"
          rows={3}
        />

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 rounded bg-[#1f2937] text-white focus:outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded bg-[#1f2937] text-white focus:outline-none"
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="p-2 rounded bg-[#1f2937] text-white focus:outline-none"
          rows={5}
        />

        <button
          type="submit"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2 rounded"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`text-sm mt-2 ${
              status.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
