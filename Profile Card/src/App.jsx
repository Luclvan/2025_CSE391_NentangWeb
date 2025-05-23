import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">🌟 Thành viên nhóm</h1>
      <div className="grid">
        <ProfileCard
          name="Đỗ Đình An"
          avatar="https://byvn.net/pLJD"
        />
        <ProfileCard
          name="Nguyễn Đăng Đại"
          avatar="https://byvn.net/6BKc"
        />
        <ProfileCard
          name="Lê Văn Lực"
          avatar="https://byvn.net/Ocv8"
        />
        
        <ProfileCard
          name="Võ Mạnh Thắng"
          avatar="https://byvn.net/YG4s"
        />
      </div>
    </div>
  );
}

export default App;
