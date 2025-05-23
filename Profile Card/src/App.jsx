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
          text="Trưởng nhóm"
          link="https://www.facebook.com/dinhan1205"

        />
        <ProfileCard
          name="Nguyễn Đăng Đại"
          avatar="https://byvn.net/6BKc"
          text="Thành viên"
          link="https://www.facebook.com/dangdai.0710"
        />
        <ProfileCard
          name="Lê Văn Lực"
          avatar="https://byvn.net/Ocv8"
          text="Thành viên"
          link="https://www.facebook.com/luc.levan.75286100"
        />
        
        <ProfileCard
          name="Võ Mạnh Thắng"
          avatar="https://byvn.net/YG4s"
          text="Thành viên"
          link="https://www.facebook.com/thangvm515"
        />
      </div>
    </div>
  );
}

export default App;
