'use client'
import * as React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './styles/menu.module.css'

const captalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const MenuLink = ({route}) => {
    const pathname = usePathname()
  
    return (
      <div>
        <Link className={styles[`${pathname === `/${route}` ? 'active' : ''}`]} href={`/${route}`}>
          {captalizeFirstLetter(route)}
        </Link>
      </div>
    )
}

export function Links() {
    return (
      <div>
        <MenuLink route ='biography' />
        <MenuLink route ='repertoire' />
        <MenuLink route ='videos' />
        <MenuLink route ='contact' />
      </div>
    )
  }