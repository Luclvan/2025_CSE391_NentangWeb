function ProfileCard({ name, avatar }) {
  return (
    <div className="card">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2>{name}</h2>
    </div>
    
  );
}

export default ProfileCard;
