"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex flex-center gap-2" href="/">
        <Image 
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30} 
          className="object-contain"
        />
      </Link>
      <p className="logo_text">Promptopia</p>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        { 
          session?.user ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="orange_btn">
                Create Post
              </Link>
              <button 
                type="button" 
                className="outline_btn"
                onClick={signOut}
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image 
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <>
              {providers && 
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    className="orange_btn"
                    onClick={() => signIn(provider.id)}
                    key={provider.name}
                  >
                    Sign In
                  </button>
                ))
              }
            </>
          )
        }
      </div>
      {/* Desktop Navigation */}

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {
          session?.user ? (
            <div className="flex">
              <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => {setToggleDropdown((prev) => !prev)}}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                    >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full orange_btn"
                  >
                    SignOut
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers && 
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    className="orange_btn"
                    onClick={() => signIn(provider.id)}
                    key={provider.name}
                  >
                    Sign In
                  </button>
                ))
              }
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Nav