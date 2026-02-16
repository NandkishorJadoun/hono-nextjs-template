const Home = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const { message } = await res.json();
  if (!message) return <p>Loading...</p>;

  return <p>{message}</p>;
};

export default Home;
