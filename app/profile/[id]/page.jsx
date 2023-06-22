'use client';

import { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const UserProfile = ({params}) => {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${params?.id}/posts`);
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => { 
    fetchPosts();  
  }, []);

  return (
    <Profile 
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile, Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={posts}
    />
  )
}

export default UserProfile;