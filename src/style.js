import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f4f4f4] text-[#333]">
      {children}
    </div>
  );
};
const Header = ({ children }) => {
  return (
    <div className="bg-[#37BCF8] text-center border-b border-solid border-gray-300 text-white">
      <h1 className="text-4xl font-bold pt-10">
      {children}
      </h1>
     
    </div>
  );
};
const Nav = ({ children }) => {
  return (
    <div className="py-4 px-6 text-base font-medium">
      <ul className="flex space-x-3 justify-center">
        {children}
      </ul>
    </div>
  );
};
const NavItem = ({ href, isActive, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 ${isActive ? 'bg-[#37BCF8] text-white' : 'bg-slate-50'}`}
      >
        {children}
      </a>
    </li>
  );
};
const PresentationCard = ({ href, children }) => {
  return (
    <a href={href}>
<div className="relative flex flex-grow flex-shrink basis-[200px] m-1 border border-gray-300 rounded-lg overflow-hidden transition-shadow transition-transform w-full max-w-[310px] shadow hover:translate-y-[-5px] hover:shadow-lg">
      {children}
    </div>
    </a>
  );
};
const PresentationTitle = ({children }) => {
  return (
  <div class="absolute bottom-0 left-0 w-full bg-white/[.8] text-[#333] text-center p-2.5">
  {children}
  </div>
  );
};
const Box = ({ children }) => {
  return (
    <div className="bg-white border-solid border-[#ddd] p-5 shadow my-5">
      <div className="bg-[#eef2f5] p-3.5 rounded-md">
      {children}
      </div>
    </div>
  );
};
const ProjectBox = ({ children }) => {
  return (
    <div className="bg-white border-solid border-[#ddd] p-5 shadow my-5">
      {children}
    </div>
  );
};
const ProjectDesc = ({ children }) => {
  return (
      <div className="bg-[#eef2f5] p-3.5 rounded-md m-5">
        <div className='text-[#666] p-2.5 mb-2'>
      {children}
      </div>
      </div>
  );
};
const Footer = ({ children }) => {
  return (
    <div className="py-1 font-bold text-center border-t border-solid border-gray-300 bg-[#37BCF8] text-white">
      {children}
    </div>
  );
};
export { Layout, Header, Nav, NavItem, PresentationCard, PresentationTitle, Box, ProjectBox, ProjectDesc, Footer};
