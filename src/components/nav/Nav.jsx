import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {MdWorkOutline} from 'react-icons/md'
import {MdContacts} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a className={activeNav==='#'?'active':''}  onClick={()=>setActiveNav('#')}  href="#"><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" className={activeNav==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser></AiOutlineUser></a>
      <a className={activeNav==='#skills'?'active':''} onClick={()=>setActiveNav('#skills')} href="#skills"><GiSkills></GiSkills></a>
      <a className={activeNav==='#projects'?'active':''}  onClick={()=>setActiveNav('#projects')} href="#projects"><MdWorkOutline></MdWorkOutline></a>
      <a className={activeNav==='#contacts'?'active':''}  onClick={()=>setActiveNav('#contacts')} href="#contact"><MdContacts></MdContacts></a>
    </nav>
  )
}

export default Nav