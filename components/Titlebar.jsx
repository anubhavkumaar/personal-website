import React, { useState } from 'react';
import Image from 'next/image';
import Toast from '../pages/toast';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  const [toast, setToast] = useState({ message: '', type: '', show: false });

  const showToast = (message, type) => {
    setToast({ message, type, show: true });
    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 3000);
  };

  const handleMinimize = () => {
    showToast('Aye yo! dont minimize!', 'info');
  };

  const handleMaximize = () => {
    showToast("Why bruh? Can't you maximize the your browser window?", 'success');
  };

  const handleClose = () => {
    showToast("Please DON'T close my portfolio! Go & check Contact Me page", 'error');
  };

  const handleMenuClick = () => {
    showToast("Hmmm Exploring! Couldn't thing what can be added in dropdown", 'success');
  };

  const menuItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        {menuItems.map((item, index) => (
          <p key={index} onClick={handleMenuClick}>{item}</p>
        ))}
      </div>
      <p className={styles.title}>Aveg Ganorkar - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize} onClick={handleMinimize}></span>
        <span className={styles.maximize} onClick={handleMaximize}></span>
        <span className={styles.close} onClick={handleClose}></span>
      </div>
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />}
    </section>
  );
};

export default Titlebar;
