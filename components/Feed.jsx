'use client';
import { useState } from "react"
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

const Feed = ({allPosts}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  }

  const filteredPrompts = allPosts?.filter((post) => (
    post.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
    post.tag.toLowerCase().includes(searchText.toLowerCase()) ||
    post.creator.username.toLowerCase().includes(searchText.toLowerCase())
  ));

  
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
        <>
          {
            filteredPrompts.length == 0 ? (
              <h1 className="font-montserrat font-bold text-3xl mt-10 orange_gradient space-y-6 py-8">Oops, Prompts Not Found...</h1>
            ) : (
              <PromptCardList 
                data={filteredPrompts}
                handleTagClick={(value) => setSearchText(value) }
              />
            )
          }
        </>
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