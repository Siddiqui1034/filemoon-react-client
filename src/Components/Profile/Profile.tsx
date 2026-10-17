const Profile = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img
        src="/images/login.png"
        alt="profile-pic"
        className="w-24 h-24 rounded-full bg-pink-700 object-cover"
      />
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-purple-900 text-center">
          Angela Smith
        </h1>
        <p className="text-md font-medium text-purple-800 text-center">
          angela@gmail.com
        </p>
        <p className="text-md font-medium text-purple-800 text-center">
          +91-1234567890
        </p>
      </div>
    </div>
  );
};

export default Profile;
