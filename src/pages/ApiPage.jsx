import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
        setPosts(res.data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  if (loading) return <Card title="Loading...">Fetching data...</Card>;
  if (error) return <Card title="Error">{error}</Card>;

  return (
    <Card title="Public API Data">
      <ul>
        {posts.map(post => (
          <li key={post.id} className="border-b py-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </Card>
  );
}
