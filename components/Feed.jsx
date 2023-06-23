'use client';
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-10 prompt_layout">
      {data?.map((post) => (
        <PromptCard 
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [allPosts, setAllPosts] = useState([]);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  }

  const filteredPrompts = allPosts.filter((post) => (
    post.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
    post.tag.toLowerCase().includes(searchText.toLowerCase()) ||
    post.creator.username.toLowerCase().includes(searchText.toLowerCase())
  ));

  useEffect(() => { 
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setAllPosts(data);
    }
    fetchPosts();  
  }, []);
  
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text" 
          placeholder="Search for a prompt, tag or username" 
          value={searchText} 
          onChange={handleSearchChange} 
          required 
          className="search_input peer" 
        />
      </form>
      {searchText ? (
        <PromptCardList 
          data={filteredPrompts}
          handleTagClick={(value) => setSearchText(value) }
        />
      ) : (
        <PromptCardList 
          data={allPosts}
          handleTagClick={(value) => setSearchText(value) }
        />
      )}
    </section>
  )
}

export default Feed