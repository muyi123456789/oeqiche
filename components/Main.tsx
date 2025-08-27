import React from 'react';

interface Post {
  id: number;
  title: string;
}

const Main: React.FC = async () => {

  // ✅ 在服务端直接 fetch
  // const res = await fetch('http://localhost:5000/api/hello', {
  //   // 可选：开启 ISR
  //   next: { revalidate: 60 }, // 每 60 秒重新生成一次
  // });

  // const data = await res.json();
  // const posts: Post[] = data.posts || [{ id: 1, title: data.message }];

  return (
    <>
      <h2>首页内容</h2>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
};

export default Main;