const team = [
  {
    name: 'Sarah Anderson',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
  },
  {
    name: 'Marcus Chen',
    role: '3D Designer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    name: 'Emma Williams',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
  },
  {
    name: 'Alex Rivera',
    role: 'UX Specialist',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
];

export default function Team() {


  return (
    <section
      id="team"
      className="py-5 px-4 px-md-5"
  
    >
      <div className="container-lg">
        <h2 className="display-5 fw-bold text-white mb-5 text-center">Our Team</h2>
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-3 text-center">
              <div className="mb-3 overflow-hidden rounded" style={{ height: '280px' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <h3 className="text-white fw-bold">{member.name}</h3>
              <p className="text-gray-400 small">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
