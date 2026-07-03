"use strict";

fetch("/api/videos")
    .then(response => response.json())
    .then(videos => {

        const videoGrid = document.querySelector(".videoGrid");

        videos.forEach(video => {

            // יצירת הכרטיס
            const videoCard = document.createElement("article");
            videoCard.className = "videoCard";

            // יצירת אזור התמונה
            const cardThumbnail = document.createElement("div");
            cardThumbnail.className = "cardThumbnail";

            const thumbnail = document.createElement("img");
            thumbnail.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
            thumbnail.alt = video.title;

            cardThumbnail.appendChild(thumbnail);

            // יצירת אזור התוכן
            const cardContent = document.createElement("div");
            cardContent.className = "cardContent";

            // כותרת השיר
            const cardTitle = document.createElement("h3");
            cardTitle.className = "cardTitle";
            cardTitle.textContent = video.title;

            // שם האמן
            const cardArtist = document.createElement("p");
            cardArtist.className = "cardArtist";
            cardArtist.textContent = video.artist;

            // בניית מבנה הכרטיס
            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardArtist);

            videoCard.appendChild(cardThumbnail);
            videoCard.appendChild(cardContent);

            videoGrid.appendChild(videoCard);

        });

    });