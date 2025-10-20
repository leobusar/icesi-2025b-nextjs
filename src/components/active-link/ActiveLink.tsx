"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './ActiveLink.module.css';

interface Props {
    name: string; 
    path: string
}


export default function ActiveLink({name, path}: Props) {
  const pathName=usePathname();

  console.log(pathName);
  return (
        <Link href={path} className={`p-2 m-2 text-white ${style.link} ${pathName===path? style.active: ""}`} >{name}</Link>
  );
}