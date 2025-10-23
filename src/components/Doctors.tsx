import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Calendar, MapPin, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  image: string; // URL for doctor's image
}

const Doctors: React.FC = () => {
  const { t } = useTranslation();
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
      languages: ['English', 'Arabic'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of female doctor
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
      languages: ['English', 'Spanish'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of male doctor
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
      languages: ['English', 'French'],
      image: 'https://images.unsplash.com/photo-1556435758-996aed9c60dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of female doctor
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
      languages: ['English', 'Arabic'],
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of male doctor
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
      languages: ['English', 'Spanish'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of female doctor
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
      languages: ['English', 'Korean'],
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of male doctor
    },
    {
      id: 7,
      name: 'Dr. Fatima Al-Mahmoud',
      title: 'Integrative Medicine Specialist',
      department: 'Wellness',
      description: 'Combines conventional and alternative medicine for holistic patient care.',
      specialties: ['Integrative Medicine', 'Functional Medicine', 'Lifestyle Medicine'],
      rating: 4.8,
      experience: 11,
      languages: ['English', 'Arabic'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea811ec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of female doctor
    },
    {
      id: 8,
      name: 'Dr. James Wilson',
      title: 'Sports Medicine Specialist',
      department: 'Vitamin Drips',
      description: 'Specializes in sports injury prevention and performance optimization.',
      specialties: ['Sports Injury Rehabilitation', 'Performance Enhancement', 'Recovery Therapy'],
      rating: 4.7,
      experience: 14,
      languages: ['English'],
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' // Photo of male doctor
    }
  ];

  const departmentOptions = [
    { value: 'all', label: t('doctors.departments.all') },
    { value: 'Vitamin Drips', label: t('doctors.departments.vitaminDrips') },
    { value: 'Nutrition', label: t('doctors.departments.nutrition') },
    { value: 'Aesthetic Medicine', label: t('doctors.departments.aestheticMedicine') },
    { value: 'Detox Programs', label: t('doctors.departments.detoxPrograms') },
    { value: 'Wellness', label: t('doctors.departments.wellness') }
  ];
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6; // Show 6 doctors per page

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDepartment]);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  // Calculate pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('doctors.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('doctors.description')}
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
                placeholder={t('doctors.searchPlaceholder')}
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
                {departmentOptions.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
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
              {t('doctors.clearFilters')}
            </button>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={doctor.image} 
                      alt={`${doctor.name} profile`}
                      className="w-16 h-16 rounded-xl object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevents infinite loop
                        target.src = 'https://placehold.co/150x150?text=Doctor'; // fallback image
                      }}
                    />
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
                  <h4 className="text-sm font-medium text-gray-900">{t('doctors.specialties')}:</h4>
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
                    {t('doctors.viewProfile')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2" aria-label="Pagination">
              <button
                className={`px-3 py-2 text-sm font-medium rounded-lg border ${
                  currentPage === 1 
                    ? 'text-gray-300 bg-gray-100 border-gray-200 cursor-not-allowed' 
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                {t('doctors.pagination.previous')}
              </button>
              
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 text-sm font-medium rounded-lg border ${
                    currentPage === page
                      ? 'text-primary-600 bg-primary-50 border-primary-300'
                      : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              
              <button
                className={`px-3 py-2 text-sm font-medium rounded-lg border ${
                  currentPage === totalPages
                    ? 'text-gray-300 bg-gray-100 border-gray-200 cursor-not-allowed'
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                {t('doctors.pagination.next')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;