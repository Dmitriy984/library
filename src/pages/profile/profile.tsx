import Layout from "../../components/common/Layout/Layout";
import ReaderProfile from '../../components/readers/ReaderProfile/ReaderProfile';
import { mockReaders } from '../../mocks/readers';
import '../../styles/profile.css';

const ProfilePage = () => {
  const reader = mockReaders[0];

  return (
    <Layout>
      <div className="page-content">
        <ReaderProfile reader={reader} />
      </div>
    </Layout>
  );
};

export default ProfilePage;