import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './footer.module.css'

export default function SocialMedia() {
  return (
    <div className={styles.socialIcon}>
      <ul>
        <h2>СОЦ СЕТИ</h2>
        <li><img src='vkIcon.svg'/><a href='#'>VK.com</a></li>
        <li><FacebookIcon></FacebookIcon><a href='#'>Facebook</a></li>
        <li><InstagramIcon></InstagramIcon><a href='#'>Instagram</a></li>
      </ul>
    </div>
  )
}
