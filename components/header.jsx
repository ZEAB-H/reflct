"use client";

import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PenBox, SquareLibrary, UserIcon, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Reflct Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <Button variant={"outline"}>Log in</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant={"bold"}>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/journal/new">
              <Button variant={"journal"} className="flex items-center gap-2">
                <PenBox />
                <span>Write now</span>
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant={"danger"} className="flex items-center gap-2">
                <UserIcon />
                <span>Profile</span>
              </Button>
            </Link>
            <Link href="/journal">
              <Button variant={"journal"} className="flex items-center gap-2">
                <SquareLibrary />
                <span>Your Collection</span>
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden  shadow-md">
          <div className="flex flex-col items-center gap-4  col-auto p-4">
            <SignedOut>
              <SignInButton>
                <Button variant={"outline"}>Log in</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant={"outline"}>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/journal/new">
                <Button
                  variant={"outline"}
                  className=" flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <PenBox />
                  Write now
                </Button>
              </Link>
              <Link href="/profile">
                <Button
                  variant={"outline"}
                  className=" flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <UserIcon />
                  Profile
                </Button>
              </Link>
              <Link href="/journal">
                <Button
                  variant={"outline"}
                  className="  flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <SquareLibrary />
                  Your Collection
                </Button>
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
