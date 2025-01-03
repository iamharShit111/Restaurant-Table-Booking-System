import React from "react";
import { ChevronRight, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8">
          <div className="text-2xl font-bold text-orange-50">RESTURANT</div>
          <div className="hidden md:flex space-x-8 text-orange-50">
            <Link className="hover:text-orange-300" href="/confirmation">
              Booking
            </Link>
            <a href="#about" className="hover:text-orange-300">
              About
            </a>
            <a href="#contact" className="hover:text-orange-300">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-50 mb-6">
            Experience Fine Dining
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl">
            Indulge in an unforgettable culinary journey with our award-winning
            chefs
          </p>
          <Link href="/reservation">
            <button
              className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-orange-700 transition-colors duration-300 flex items-center"
            >
              Book Now <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:bg-orange-50 rounded-lg transition-colors duration-300">
            <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown-800 mb-2">
              Opening Hours
            </h3>
            <p className="text-gray-600">Mon-Sun: 11:30 AM - 9:30 PM</p>
          </div>

          <div className="text-center p-6 hover:bg-orange-50 rounded-lg transition-colors duration-300">
            <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown-800 mb-2">
              Reservations
            </h3>
            <p className="text-gray-600">Call us: 1234567890</p>
          </div>

          <div className="text-center p-6 hover:bg-orange-50 rounded-lg transition-colors duration-300">
            <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brown-800 mb-2">
              Location
            </h3>
            <p className="text-gray-600">123 Gourmet Street, Foodville</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-orange-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.shutterstock.com/image-photo/restaurant-setting-luxurious-dinner-meet-260nw-2474962447.jpg"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-brown-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010, Savoria has been serving exceptional cuisine that
              combines traditional flavors with modern culinary techniques. Our
              passionate team of chefs creates unforgettable dining experiences
              for our guests.
            </p>
            <button
              className="bg-orange-600 text-white px-6 py-2 rounded-full 
                             hover:bg-orange-700 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-orange-500 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Gourmet Street</p>
            <p>Foodville, FV 12345</p>
            <p>(555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>Monday - Sunday</p>
            <p>11:00 AM - 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="hover:text-orange-300">
                Facebook
              </a>
              <a href="#" className="hover:text-orange-300">
                Instagram
              </a>
              <a href="#" className="hover:text-orange-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
