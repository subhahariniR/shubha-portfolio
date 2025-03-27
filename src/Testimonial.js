import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "John Doe",
      role: "Software Engineer",
      message: "This portfolio is amazing! Great work and attention to detail.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sarah Smith",
      role: "UI/UX Designer",
      message: "I love the clean and modern design. Keep up the great work!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    message: "",
    image: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.role && formData.message) {
      const newTestimonial = {
        ...formData,
        image: formData.image || "https://via.placeholder.com/80", // Default image
      };
      setTestimonials([...testimonials, newTestimonial]);
      setFormData({ name: "", role: "", message: "", image: "" }); // Reset form
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What My Teammates Say</h2>

      {/* Swiper Carousel for Displaying Testimonials */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-message">"{testimonial.message}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Testimonial Submission Form */}
      <div className="testimonial-form">
        <h3>Submit Your Testimonial</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="role" placeholder="Your Role (e.g., Developer)" value={formData.role} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Testimonial" value={formData.message} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL (optional)" value={formData.image} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Testimonial;
