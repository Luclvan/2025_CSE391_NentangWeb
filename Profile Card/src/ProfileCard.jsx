function ProfileCard({ name, avatar, text, link }) {
  return (
    <div className="card text-center" style={{ width: '18rem', margin: '0 auto' }}>
      <img src={avatar} className="card-img-top rounded-circle p-3" alt="avatar" style={{ width:'150px', height:'150px', objectFit:'cover', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Facebook
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
