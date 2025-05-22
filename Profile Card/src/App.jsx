import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">🌟 Thành viên nhóm</h1>
      <div className="grid">
        <ProfileCard
          name="Đăng Đại"
          avatar="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/488701878_1408949310264952_7347093719228513068_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3KZAwrLLKLcQ7kNvwHPyyIY&_nc_oc=AdmpcBQCcYlRYkHUNt2X-zwBxbLoIsXmVByKlxDXAPhZMPXEGVb3nzyJ2nNt3eDyIlEE_00LvvD75it3bWZxdjTI&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=LavVSwX02Gl_rpgvFpcbBg&oh=00_AfKSf4zBPPNFavB--dqWULV8ldIXF0f2tpu6V9NFvcuSYA&oe=683527A3"
        />
        <ProfileCard
          name="Văn Lực"
          avatar="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/338554707_2388298978021555_2062345578019165081_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=X6b0jElqx-4Q7kNvwEp0uMO&_nc_oc=Adm90ws6yWqIPx1cyAQd_yk2WIDCVY8KU2ijjzqY6f6KucGwZUr5Xe5sSAuR-QqsvIss3_65QBGI1cywJ7zA9Xmz&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=ZHeRJWuNAYi1JFwvGIT3Vw&oh=00_AfIAM9e_YwHBVm9j1f7GgmIgBLfMFaWNxPQenbSM7q0NIw&oe=683557E9"
        />
        <ProfileCard
          name="Đình An"
          avatar="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/484485111_1415947326442917_929119059994452745_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Bc10BkJB9PgQ7kNvwFcLfAL&_nc_oc=AdkcYJHw07GJi7mC3UPqLS_AZh1vpRcdNYE6yyeAgk4gG-V-a1kmrCvnzqu75ssN_iYKBo9DVNyt-MmBgPWQDvmr&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=JjtpgDCwHladM25-3q-Xjw&oh=00_AfIeDEDeGDHE4d2c3xsAfTBtyTM-D59foVeSXomkV2XH3A&oe=68353F61"
        />
        <ProfileCard
          name="Mạnh Thắng"
          avatar="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=k2BfyNKh85kQ7kNvwHFQzAo&_nc_oc=AdloOuwCM9ZJyp6CGukl22j1V_OsEcn_ralSBFs49kSe32EFdEF0FiDrw0p1c-7O7pqoC9o5aIY3jqpVnbCRy32e&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&oh=00_AfLjalamxK0rddkh-yCXi0Qu_tpZCXX0OGnHH-AHRPDc-A&oe=6856E3BA"
        />
      </div>
    </div>
  );
}

export default App;
