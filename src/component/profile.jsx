import React from "react";

const Profile = () => {
  return (
    <section className="bg-[#4731D3] w-full py-16 px-8">
      
      <h2 className="text-[#CBF281] text-4xl font-bold text-center mb-12">
        Profile
      </h2>

      
      <div className="flex justify-center items-start gap-8 max-w-6xl mx-auto">
        
        <div className="flex-1 text-white">
          <h3 className="text-2xl font-bold mb-4">Basic Information</h3>
          <ul className="text-lg">
            <li>Doğum Tarihi: 22.09.1995</li>
            <li>İkamet Şehri: Adana</li>
            <li>Eğitim Durumu: Çukurova Ünv., Gıda Mühendisliği, 2015</li>
            <li>Tercih Ettiği Rol: Frontend, UI</li>
          </ul>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            src="./public/img/profil2.png"
            alt="Profile"
            className="w-[250px] h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>

       
        <div className="flex-1 text-white">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-lg">
           Workintech Fullstack yazılım programında öğrenciyim. Yazılım alanında kendimi geliştirmek ve ilerlemek istiyorum. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

