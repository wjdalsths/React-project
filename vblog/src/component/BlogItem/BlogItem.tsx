import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Styled";

const BlogItem = () => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         setError("");
  //         setUsers([]);
  //         setLoading(true);
  //         const response = await axios.get(
  //           "https://jsonplaceholder.typicode.com/posts"
  //         );
  //         setUsers(response.data);
  //       } catch (error: any) {
  //         setError(error);
  //       }
  //       setLoading(false);
  //     };

  //     fetchUsers();
  //   }, []);

  //   if (loading) return <div>로딩중..</div>;
  //   if (error) return <div>에러가 발생했습니다</div>;
  //   if (!users) return null;

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((res: any) => {
        console.log(res);
        setBlog(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <S.items>
        {blog.map((user: any) => (
          <S.blogitem key={user.id}>
            <S.imgbox>
              <img
                src={process.env.PUBLIC_URL + "/img/tkwls.jpg"}
                alt=""
                style={{
                  height: "200px",
                  width: "320px",
                }}
              />
            </S.imgbox>
            <S.infobox>
              <S.title>{user.title}</S.title>
              <S.info>{user.body}</S.info>
            </S.infobox>
          </S.blogitem>
        ))}
      </S.items>
    </>
  );
};

export default BlogItem;
