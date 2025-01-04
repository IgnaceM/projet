import React, { useState } from 'react';

const DownloadManager = () => {
  const [downloads, setDownloads] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleDownload = (audio) => {
    setDownloads([...downloads, { audio, status: 'downloading' }]);
    setNotifications([...notifications, `Downloading ${audio.name}`]);

    // Simulate download completion
    setTimeout(() => {
      setDownloads((prevDownloads) =>
        prevDownloads.map((d) =>
          d.audio === audio ? { ...d, status: 'completed' } : d
        )
      );
      setNotifications([...notifications, `${audio.name} download completed`]);
    }, 3000); // Simulate a 3-second download
  };

  return (
    <div>
      <h2>Download Manager</h2>
      <div>
        <h3>Downloads in Progress</h3>
        <ul>
          {downloads
            .filter((d) => d.status === 'downloading')
            .map((d, index) => (
              <li key={index}>{d.audio.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <h3>Completed Downloads</h3>
        <ul>
          {downloads
            .filter((d) => d.status === 'completed')
            .map((d, index) => (
              <li key={index}>{d.audio.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadManager;