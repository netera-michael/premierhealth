import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, MapPin, Star } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  title: string;
  department: string;
  description: string;
  specialties: string[];
  rating: number;
  experience: number; // years
  languages: string[];
}

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  // Sample doctor data - you can replace this with real data later
  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Vitamin Therapy Specialist',
      department: 'Vitamin Drips',
      description: 'Specializes in IV vitamin therapy and personalized wellness plans.',
      specialties: ['Vitamin B12 Therapy', 'NAD+ Therapy', 'Myers\' Cocktail'],
      rating: 4.9,
      experience: 8,
      languages: ['English', 'Arabic']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Nutrition & Wellness Expert',
      department: 'Nutrition',
      description: 'Focuses on nutritional optimization and supplement protocols.',
      specialties: ['Nutritional Counseling', 'Detox Programs', 'Weight Management'],
      rating: 4.8,
      experience: 12,
      languages: ['English', 'Spanish']
    },
    {
      id: 3,
      name: 'Dr. Emma Wilson',
      title: 'Anti-Aging Specialist',
      department: 'Aesthetic Medicine',
      description: 'Specializes in anti-aging treatments and bioidentical hormone therapy.',
      specialties: ['Hormone Optimization', 'Peptide Therapy', 'Biohacking'],
      rating: 4.9,
      experience: 10,
      languages: ['English', 'French']
    },
    {
      id: 4,
      name: 'Dr. Ahmed Hassan',
      title: 'Detox & Cleansing Specialist',
      department: 'Detox Programs',
      description: 'Expert in detoxification protocols and liver support therapies.',
      specialties: ['Glutathione Therapy', 'Liver Detox', 'Chelation Therapy'],
      rating: 4.7,
      experience: 7,
      languages: ['English', 'Arabic']
    },
    {
      id: 5,
      name: 'Dr. Lisa Rodriguez',
      title: 'Energy & Performance Specialist',
      department: 'Vitamin Drips',
      description: 'Specializes in energy optimization and athletic performance enhancement.',
      specialties: ['Energy Boost Therapy', 'Athletic Performance', 'Recovery Programs'],
      rating: 4.8,
      experience: 9,
      languages: ['English', 'Spanish']
    },
    {
      id: 6,
      name: 'Dr. David Kim',
      title: 'Immunity & Wellness Expert',
      department: 'Wellness',
      description: 'Focuses on immune system support and preventive wellness strategies.',
      specialties: ['Immune Support', 'Preventive Care', 'Lifestyle Medicine'],
      rating: 4.9,
      experience: 15,
      languages: ['English', 'Korean']
    }
  ];

  const departments = ['all', 'Vitamin Drips', 'Nutrition', 'Aesthetic Medicine', 'Detox Programs', 'Wellness'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of healthcare professionals dedicated to your wellness and vitality.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 rounded-lg appearance-none"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Clear Button */}
            <button
              className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Placeholder for doctor image */}
                  <div className="flex-shrink-0">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-primary-600 font-medium">{doctor.title}</p>
                    <div className="mt-2 flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">{doctor.rating} ({Math.floor(Math.random() * 50) + 10} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                    {doctor.department}
                  </span>
                </div>
                
                <p className="mt-3 text-gray-600 text-sm">
                  {doctor.description}
                </p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Specialties:</h4>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {doctor.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{doctor.experience} years exp.</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{doctor.languages.join(', ')}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 border border-primary-300 rounded-lg hover:bg-primary-100">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Doctors;