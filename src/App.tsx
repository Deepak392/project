import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface Representative {
  title: string;
  name: string;
  description: string;
  email: string;
  image: string;
  department?: string;
}

const representatives: Representative[] = [
  // Student Government
  {
    title: "President",
    name: "Sricharan Srivatsa",
    description: "Leads the student government, represents student interests, and ensures smooth communication between students and administration.",
    email: "president.student@sai.university",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Student Government"
  },
  {
    title: "Vice President",
    name: "Driti Modi",
    description: "Assists the President and oversees various student committees to enhance campus life.",
    email: "vp.student@sai.university",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Student Government"
  },
  {
    title: "Treasurer",
    name: "Deepak Kumar Patro",
    description: "Manages student government funds, allocates budgets, and ensures financial transparency.",
    email: "treasurer.student@sai.university",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Student Government"
  },
  // Academic Department
  {
    title: "Academic Secretary",
    name: "Arjun Thilak",
    description: "Works on academic policies, organizes educational events, and addresses student academic concerns.",
    email: "academic.sec@sai.university",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Academic Department"
  },
  {
    title: "CDS Academic Rep",
    name: "M.L Goutham Reddy",
    description: "Acts as a liaison between students and faculty, ensuring academic concerns are heard.",
    email: "cds.rep@sai.university",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Academic Department"
  },
  {
    title: "SAS Academic Rep",
    name: "Laya",
    description: "Acts as a liaison between students and faculty, ensuring academic concerns are heard.",
    email: "sas.rep@sai.university",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Academic Department"
  },
  {
    title: "LAW Academic Rep",
    name: "Aswath Prakash",
    description: "Acts as a liaison between students and faculty, ensuring academic concerns are heard.",
    email: "law.rep@sai.university",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Academic Department"
  },
  // Residence Department
  {
    title: "Residence Secretary",
    name: "Mehan Mahesh",
    description: "Handles student accommodation-related concerns and works to improve hostel facilities.",
    email: "residence.sec@sai.university",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Residence Department"
  },
  {
    title: "Food Committee Member",
    name: "Lavakusha Reddy",
    description: "Handles student accommodation-related concerns and works to improve hostel facilities.",
    email: "food.committee1@sai.university",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Residence Department"
  },
  {
    title: "Food Committee Member",
    name: "Khushi Tudekar",
    description: "Handles student accommodation-related concerns and works to improve hostel facilities.",
    email: "food.committee2@sai.university",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Residence Department"
  },
  // Cultural Society
  {
    title: "Cultural Secretary",
    name: "Saniya Syed",
    description: "Promotes cultural activities, organizes events, and fosters an inclusive campus environment.",
    email: "cultural.sec@sai.university",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Cultural Society"
  },
  {
    title: "Vice-Cultural Secretary",
    name: "Ria Baranwal",
    description: "Promotes cultural activities, organizes events, and fosters an inclusive campus environment.",
    email: "cultural.vicesec@sai.university",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Cultural Society"
  },
  // Sports Society
  {
    title: "Sports President",
    name: "Ganesh Aadithya",
    description: "Leads the university's sports initiatives and ensures student engagement in athletics.",
    email: "sports.pres@sai.university",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Sports Society"
  },
  {
    title: "Sports Secretary",
    name: "Shreya Vembu",
    description: "Coordinates sports events and manages university sports teams.",
    email: "sports.sec@sai.university",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Sports Society"
  },
  {
    title: "Sports Treasurer",
    name: "Sukruth",
    description: "Manages the sports budget and ensures funding for various sporting activities.",
    email: "sports.treasurer@sai.university",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=387&h=387",
    department: "Sports Society"
  }
];

function App() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const departments = Array.from(new Set(representatives.map(rep => rep.department)));

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Feedback submitted:', feedbackForm);
    setFeedbackForm({ name: '', email: '', message: '' });
    alert('Thank you for your feedback!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-900">
              Sai University Student Body
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#members" className="text-gray-700 hover:text-blue-900">Members</a>
              <a href="#initiatives" className="text-gray-700 hover:text-blue-900">Initiatives</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Student Government
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            The Student Government at Sai University represents student interests, organizes campus events, and ensures a vibrant student life experience.
          </p>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-16">
        {departments.map((department) => (
          <div key={department} className="container mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{department}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {representatives
                .filter(rep => rep.department === department)
                .map((rep, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={rep.image} 
                        alt={rep.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900">{rep.title}</h3>
                      <h4 className="text-xl font-bold text-gray-900 mt-1">{rep.name}</h4>
                      <p className="text-gray-600 mt-3">{rep.description}</p>
                      <div className="mt-4 flex items-center text-blue-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${rep.email}`} className="text-sm hover:underline">
                          {rep.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Initiatives</h2>
          <p className="text-xl text-gray-600">
            We work on various student-led initiatives, from academic support programs to cultural events, ensuring a thriving campus environment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-12">
            Have questions or suggestions? Reach out to us at{' '}
            <a href="mailto:studentgov@saiuniversity.edu" className="text-blue-600 hover:underline">
              studentgov@saiuniversity.edu
            </a>
          </p>

          {/* Feedback Form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Feedback</h3>
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={feedbackForm.email}
                  onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Feedback
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={feedbackForm.message}
                  onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Sai University Student Government. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;