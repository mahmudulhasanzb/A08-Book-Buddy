import MyProfile from '@/components/profile/MyProfile';

// fake DB call (replace later)
const getUser = async () => {
  return {
    name: 'Alex Reader',
    username: '@alex_reads',
    bio: 'Avid reader of science fiction.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexReader',
  };
};

const ProfilePage = async () => {
  const user = await getUser();

  return <MyProfile user={user} />;
};

export default ProfilePage;
