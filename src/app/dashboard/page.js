"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  PieChart, LineChart, BarChart, Calendar, Award, BookOpen, 
  Clock, Users, MessageCircle, CheckCircle, MoreHorizontal,
  Menu, X
} from "lucide-react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Data untuk courses
  const courses = [
    { 
      id: 1, 
      title: "Bahasa Inggris Dasar", 
      level: "Beginner", 
      progress: 65, 
      image: "/english-course.jpg" 
    },
    { 
      id: 2, 
      title: "Bahasa Jepang untuk Pemula", 
      level: "Beginner", 
      progress: 30, 
      image: "/japanese-course.jpg" 
    },
    { 
      id: 3, 
      title: "Bahasa Perancis: Percakapan", 
      level: "Intermediate", 
      progress: 15, 
      image: "/french-course.jpg" 
    },
  ];

  // Data untuk upcoming events
  const events = [
    {
      id: 1,
      title: "Seminar Bahasa Korea",
      date: "5 Maret 2025",
      time: "14:00 - 16:00 WIB",
    },
    {
      id: 2,
      title: "Workshop Public Speaking",
      date: "12 Maret 2025",
      time: "10:00 - 12:00 WIB",
    },
  ];

  // Data untuk achievements
  const achievements = [
    { id: 1, title: "7 Hari Streak Belajar", icon: <CheckCircle className="text-yellow-500" size={20} /> },
    { id: 2, title: "Beginner Level Completed", icon: <Award className="text-blue-500" size={20} /> },
    { id: 3, title: "First Conversation Mastered", icon: <MessageCircle className="text-green-500" size={20} /> },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40 flex items-center justify-between px-4">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="p-2 mr-2 text-gray-700">
            <Menu size={24} />
          </button>
          <Image
            src="/LangGo.png"
            alt="LangGo Logo"
            width={40}
            height={40}
            priority
          />
          <div className="ml-2">
            <div className="font-semibold text-base text-black">LangGo</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="font-bold text-blue-500 text-sm">
                {session?.user?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Image
              src="/LangGo.png"
              alt="LangGo Logo"
              width={40}
              height={40}
              priority
            />
            <div className="ml-3">
              <div className="font-semibold text-lg text-black">LangGo</div>
              <div className="text-xs text-gray-600">Dashboard Pembelajar</div>
            </div>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="font-bold text-blue-500">
                  {session?.user?.name?.charAt(0) || "U"}
                </div>
              )}
            </div>
            <div className="ml-3">
              <div className="font-medium text-black">{session?.user?.name || "User"}</div>
              <div className="text-xs text-gray-500">{session?.user?.email || ""}</div>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => {
                  setActiveTab("overview");
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === "overview" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <PieChart size={18} className="mr-3" />
                <span>Overview</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setActiveTab("courses");
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === "courses" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <BookOpen size={18} className="mr-3" />
                <span>Kursus Saya</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setActiveTab("progress");
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === "progress" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <LineChart size={18} className="mr-3" />
                <span>Progress</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setActiveTab("events");
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === "events" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <Calendar size={18} className="mr-3" />
                <span>Event</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setActiveTab("statistics");
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-md ${activeTab === "statistics" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <BarChart size={18} className="mr-3" />
                <span>Statistik</span>
              </button>
            </li>
          </ul>
          
          <div className="mt-8 pt-4 border-t">
            <button 
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center w-full p-2 rounded-md text-red-600 hover:bg-red-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className={`lg:ml-64 p-4 md:p-8 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'} mt-16 lg:mt-0`}>
        <header className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            {activeTab === "overview" && "Dashboard Overview"}
            {activeTab === "courses" && "Kursus Saya"}
            {activeTab === "progress" && "Progress Pembelajaran"}
            {activeTab === "events" && "Event & Seminar"}
            {activeTab === "statistics" && "Statistik Pembelajaran"}
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Selamat datang kembali, {session?.user?.name?.split(" ")[0] || "Pengguna"}! Berikut adalah ringkasan pembelajaran Anda.
          </p>
        </header>
        
        {activeTab === "overview" && (
          <div className="space-y-6 md:space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-black">
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 md:p-3 rounded-full bg-blue-100 text-blue-600">
                    <Clock size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-500">Total Jam Belajar</h3>
                    <p className="text-lg md:text-2xl font-semibold">24.5</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 md:p-3 rounded-full bg-green-100 text-green-600">
                    <BookOpen size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-500">Kursus Aktif</h3>
                    <p className="text-lg md:text-2xl font-semibold">3</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 md:p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <Award size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-500">Sertifikat</h3>
                    <p className="text-lg md:text-2xl font-semibold">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 md:p-3 rounded-full bg-purple-100 text-purple-600">
                    <Users size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="text-xs md:text-sm font-medium text-gray-500">Komunitas</h3>
                    <p className="text-lg md:text-2xl font-semibold">2</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Courses in progress */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-black">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-base md:text-lg font-semibold">Kursus Berlangsung</h2>
                <button className="text-blue-600 flex items-center text-xs md:text-sm">
                  Lihat Semua
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="flex items-center p-3 md:p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-500">
                        <BookOpen size={20} className="md:w-6 md:h-6" />
                      </div>
                    </div>
                    <div className="ml-3 md:ml-4 flex-grow">
                      <h3 className="font-medium text-sm md:text-base">{course.title}</h3>
                      <div className="flex flex-col md:flex-row md:items-center text-xs md:text-sm text-gray-500">
                        <span className="mb-1 md:mb-0 md:mr-4">Level: {course.level}</span>
                        <div className="w-full md:w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="mt-1 md:mt-0 md:ml-2">{course.progress}%</span>
                      </div>
                    </div>
                    <button className="p-1 md:p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <MoreHorizontal size={16} className="md:w-5 md:h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Side-by-side: Events and Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              {/* Upcoming Events */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Event Mendatang</h2>
                <div className="space-y-3 md:space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="border-l-4 border-blue-500 pl-3 md:pl-4 py-2">
                      <h3 className="font-medium text-sm md:text-base">{event.title}</h3>
                      <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 mt-1">
                        <Calendar size={12} className="mr-1 md:w-3.5 md:h-3.5" />
                        <span>{event.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={12} className="mr-1 md:w-3.5 md:h-3.5" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-3 md:mt-4 text-blue-600 text-xs md:text-sm font-medium">Lihat lebih banyak event</button>
              </div>
              
              {/* Achievements */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Pencapaian Terbaru</h2>
                <div className="space-y-3 md:space-y-4">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="flex items-center p-2 md:p-3 border rounded-lg">
                      <div className="mr-2 md:mr-3">
                        {achievement.icon}
                      </div>
                      <span className="text-sm md:text-base">{achievement.title}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-3 md:mt-4 text-blue-600 text-xs md:text-sm font-medium">Lihat semua pencapaian</button>
              </div>
            </div>
            
            {/* AI Practice Assistant Reminder */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 md:p-6 rounded-lg shadow-sm text-white">
              <div className="flex items-start md:items-center justify-between">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Asisten AI LangGo</h2>
                  <p className="text-sm md:text-base mb-3 md:mb-4 opacity-90">Tingkatkan kemampuan bahasa dengan berlatih percakapan bersama AI.</p>
                  <button className="bg-white text-blue-600 py-1.5 md:py-2 px-3 md:px-4 rounded-md text-sm md:text-base font-medium hover:bg-blue-50 transition-colors">
                    Mulai Percakapan
                  </button>
                </div>
                <div className="hidden sm:flex w-16 h-16 md:w-20 md:h-20 bg-blue-400 bg-opacity-30 rounded-full items-center justify-center">
                  <MessageCircle size={24} className="md:w-9 md:h-9" />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "courses" && (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-black">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
              <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-0">Semua Kursus Saya</h2>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <select className="p-1.5 md:p-2 border rounded-md text-xs md:text-sm">
                  <option>Semua Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select className="p-1.5 md:p-2 border rounded-md text-xs md:text-sm">
                  <option>Semua Bahasa</option>
                  <option>Inggris</option>
                  <option>Jepang</option>
                  <option>Perancis</option>
                  <option>Mandarin</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[...courses, 
                { id: 4, title: "Bahasa Mandarin Dasar", level: "Beginner", progress: 0, image: "/mandarin-course.jpg" },
                { id: 5, title: "Bahasa Inggris Bisnis", level: "Intermediate", progress: 0, image: "/business-english.jpg" }
              ].map(course => (
                <div key={course.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-32 md:h-40 bg-blue-100 flex items-center justify-center">
                    <BookOpen size={36} className="md:w-12 md:h-12 text-blue-500 opacity-50" />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2">{course.title}</h3>
                    <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                      <span>{course.level}</span>
                      <span className="mx-2">•</span>
                      <span>{course.progress > 0 ? `${course.progress}% selesai` : "Belum dimulai"}</span>
                    </div>
                    
                    {course.progress > 0 ? (
                      <div className="w-full h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden mb-3 md:mb-4">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    ) : null}
                    
                    <button className={`w-full py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium ${
                      course.progress > 0 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}>
                      {course.progress > 0 ? "Lanjutkan" : "Mulai Kursus"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "progress" && (
          <div className="space-y-4 md:space-y-6 text-black">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Progress Pembelajaran</h2>
              
              <div className="mt-4 md:mt-6">
                <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">Bahasa Inggris Dasar</h3>
                <div className="w-full h-4 md:h-6 bg-gray-200 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-500">
                  <span>65% selesai</span>
                  <span>42/65 pelajaran</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6">
                <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">Bahasa Jepang untuk Pemula</h3>
                <div className="w-full h-4 md:h-6 bg-gray-200 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-500">
                  <span>30% selesai</span>
                  <span>15/50 pelajaran</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6">
                <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">Bahasa Perancis: Percakapan</h3>
                <div className="w-full h-4 md:h-6 bg-gray-200 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-500">
                  <span>15% selesai</span>
                  <span>6/40 pelajaran</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Aktivitas Mingguan</h2>
              
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, i) => (
                  <div key={day} className="text-center">
                    <div className={`mx-auto w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm ${
                      [0, 2, 3, 6].includes(i) 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {i === 6 ? "🔥" : i === 0 ? "✓" : i === 2 ? "✓" : i === 3 ? "✓" : ""}
                    </div>
                    <div className="mt-1 text-xs">{day}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Streak saat ini: </span>
                    <span className="text-blue-600 font-bold">7 hari</span>
                  </div>
                  <button className="text-blue-600 text-sm font-medium">Lihat lebih detail</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}